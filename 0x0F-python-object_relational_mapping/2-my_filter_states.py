#!/usr/bin/env python3

import MySQLdb
import sys

conn = MySQLdb.connect(host="localhost", port=3306, user=sys.argv[1],
                            passwd=sys.argv[2], db=sys.argv[3], charset="utf8")
cur = conn.cursor()
name = sys.argv[4]
cur.execute("SELECT * FROM states WHERE name = %s ORDER BY id", (name,))
query_rows = cur.fetchall()
for row in query_rows:
    print(row)
cur.close()
conn.close()
