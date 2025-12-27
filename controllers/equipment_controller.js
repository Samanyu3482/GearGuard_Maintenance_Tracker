const db = require("../config/db");

// 🔹 CREATE EQUIPMENT (Manager Only)
exports.createEquipment = (req, res) => {
  const {
    serial_number,
    department_id,
    purchase_date,
    warranty_expiry,
    location,
    default_team_id
  } = req.body;

  if (!serial_number)
    return res.status(400).json({ message: "Serial number required" });

  const sql = `
    INSERT INTO equipment 
    (serial_number, department_id, purchase_date, warranty_expiry, location, default_team_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [serial_number, department_id, purchase_date, warranty_expiry, location, default_team_id],
    (err) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res.status(409).json({ message: "Equipment already exists" });
        return res.status(500).json(err);
      }

      res.status(201).json({ message: "Equipment created successfully ✅" });
    }
  );
};

// 🔹 GET ALL EQUIPMENT
exports.getAllEquipment = (req, res) => {
  const sql = `
    SELECT e.*, d.name AS department, t.name AS team
    FROM equipment e
    LEFT JOIN departments d ON e.department_id = d.id
    LEFT JOIN teams t ON e.default_team_id = t.id
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// 🔹 GET EQUIPMENT BY ID
exports.getEquipmentById = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT e.*, d.name AS department, t.name AS team
    FROM equipment e
    LEFT JOIN departments d ON e.department_id = d.id
    LEFT JOIN teams t ON e.default_team_id = t.id
    WHERE e.id = ?
  `;

  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(404).json({ message: "Equipment not found" });

    res.json(results[0]);
  });
};
