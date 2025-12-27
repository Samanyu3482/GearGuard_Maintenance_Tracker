const db = require("../config/db");

exports.createRequest = (req, res) => {
  const { equipment_id, category_id, subject } = req.body;
  const created_by = req.user.id;

  if (!equipment_id || !category_id || !subject) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const teamQuery = `SELECT default_team_id FROM equipment WHERE id = ?`;

  db.query(teamQuery, [equipment_id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result.length)
      return res.status(404).json({ message: "Equipment not found" });

    const team_id = result[0].default_team_id;
    const NEW_STATUS_ID = 1;

    const insertRequest = `
      INSERT INTO maintenance_requests
      (subject, equipment_id, team_id, category_id, current_status_id, created_by)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
      insertRequest,
      [subject, equipment_id, team_id, category_id, NEW_STATUS_ID, created_by],
      (err, r) => {
        if (err) return res.status(500).json(err);

        db.query(
          `INSERT INTO request_status_history
           (request_id, status_id, changed_by, note)
           VALUES (?, ?, ?, 'Request created')`,
          [r.insertId, NEW_STATUS_ID, created_by]
        );

        res.status(201).json({ message: "Maintenance request created ✅" });
      }
    );
  });
};

exports.getAllRequests = (req, res) => {
  const sql = `
    SELECT r.id, r.subject, rs.name AS status,
           e.serial_number AS equipment, t.name AS team,
           u.name AS assigned_to
    FROM maintenance_requests r
    JOIN request_statuses rs ON r.current_status_id = rs.id
    JOIN equipment e ON r.equipment_id = e.id
    JOIN teams t ON r.team_id = t.id
    LEFT JOIN users u ON r.assigned_to = u.id
    ORDER BY r.id DESC
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.updateRequestStatus = (req, res) => {
  const { request_id } = req.params;
  const { status_id } = req.body;

  db.query(
    `UPDATE maintenance_requests SET current_status_id=? WHERE id=?`,
    [status_id, request_id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Status updated successfully 🔄" });
    }
  );
};



// 🔹 ASSIGN TECHNICIAN TO REQUEST
exports.assignTechnician = (req, res) => {
  const { request_id } = req.params;
  const { technician_id } = req.body;

  if (!technician_id) {
    return res.status(400).json({ message: "Technician ID required" });
  }

  const sql = `
    UPDATE maintenance_requests
    SET assigned_to = ?
    WHERE id = ?
  `;

  db.query(sql, [technician_id, request_id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Technician assigned successfully 👨‍🔧"
    });
  });
};
