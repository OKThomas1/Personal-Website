import requests
from datetime import datetime
r = requests.post("http://192.168.0.12:3000/admin/leetcode/scrape", cookies={"admin": "test"})
with open("debug.txt", "a") as file:
    file.write(datetime.now().strftime("%H:%M:%S") + " ")
    if r.status_code != 200:
        file.write(str(r) + "\n")
    else:
        file.write(str(r.json()) + "\n")
