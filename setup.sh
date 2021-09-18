#!/bin/bash
mongo <<EOF
use admin
db.createUser({ user: "root", pwd: "123456", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })
EOF

# mongorestore -h 0.0.0.0:27017 -d o45 --dir /mongo/backup/o45/
