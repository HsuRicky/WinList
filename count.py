import json
import requests
from bs4 import BeautifulSoup as bf
from pprint import pprint

def count():
    with open('static/json/money2.json', mode='r', encoding='utf-8') as f:
        r = json.load(f)

    allGame = [d["gameType"] for d in r["data"]]
   
    print(len(allGame))
    print(len(set(allGame)))
    pprint(set(allGame))

count()



def get_data_credit():
    # url = "https://www.jiliasia7.com/service/promotion/moneyRank/getDailyReport"
    url = "https://www.jiliasia7.com/service/promotion/creditRank/getDailyReport"

    res = requests.post(url=url)

    print(res.status_code)
    if res.status_code == 200:
        with open('static/json/credit1.json', mode='w', encoding='utf-8') as f:
            json.dump(res.json(), f, indent=4)
        print('ok')
    else:
        print('error')

# get_data_credit()




def fit_data():
    with open(f"static/json/money1.json" , mode='r', encoding='utf-8') as f:
        data = json.load(f)

    filtered_data = [
        {
            "id": entry["id"],
            "username": entry["username"],
            "gameType": entry["gameType"],
            "highScore": entry["highScore"],
            "imgUrl": entry["imgUrl"]
        }
        for entry in data["data"]
    ]

    res = {
        "code": data["code"],
        "data": filtered_data
    }

    with open('static/json/money2.json', mode='w', encoding='utf-8') as w:
        json.dump(res, w, ensure_ascii=False, indent=4)

    print("ok")

# fit_data()



'''
1. 串api 可拿到即時資訊 但需要vpn 或用 proxy 
2. 固定一筆資料去random
3. 定時手動更新資料避免每次數據都不一樣
'''