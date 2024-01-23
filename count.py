import json
import requests
from bs4 import BeautifulSoup as bf
from pprint import pprint

def count():
    moneys = [
            'money0',
            'money2',
            'money4',
        ]
    for money in moneys:
        print(money)
        with open(f'static/json/{money}.json', mode='r', encoding='utf-8') as f:
            r = json.load(f)

        allGame = [d["gameType"] for d in r["data"]]
    
        # print(len(allGame))
        print(len(set(allGame)))
        pprint(set(allGame))

count()



def get_data_credit():
    url = "https://www.jiliasia7.com/service/promotion/moneyRank/getDailyReport"
    # url = "https://www.jiliasia7.com/service/promotion/creditRank/getDailyReport"

    res = requests.post(url=url)

    print(res.status_code)
    if res.status_code == 200:
        with open('static/json/money3.json', mode='w', encoding='utf-8') as f:
            json.dump(res.json(), f, indent=4)
        print('ok')
    else:
        print('error')

# get_data_credit()




def fit_data():
    with open(f"static/json/credit3.json" , mode='r', encoding='utf-8') as f:
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

    with open('static/json/credit4.json', mode='w', encoding='utf-8') as w:
        json.dump(res, w, ensure_ascii=False, indent=4)

    print("ok")

# fit_data()


def trans_data():
    moneys = [
            'money0',
            'money2',
            'money4',
        ]
    
    with open("gameName.json" , mode='r', encoding='utf-8') as f2:
            change = json.load(f2)
    
    for money in moneys:
        print(money)
        with open(f"static/json/{money}.json" , mode='r', encoding='utf-8') as f1:
            data = json.load(f1)

        
        for i in data["data"]:
            if i["gameType"] in list(change):
                i["gameType"] = change[i["gameType"]]

        

        with open(f"static/json/{money}.json", mode='w', encoding='utf-8') as w:
            json.dump(data, w, ensure_ascii=False, indent=4)

        print("ok")

# trans_data()


'''
1. 串api 可拿到即時資訊 但需要vpn 或用 proxy 
2. 固定一筆資料去random
3. 定時手動更新資料避免每次數據都不一樣
'''