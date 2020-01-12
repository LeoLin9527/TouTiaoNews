"""
@file:run_the_spider.py
@time:2019/11/25-14:32

category: news_hot
utm_source: toutiao
widen: 1
max_behot_time: 1574653860
max_behot_time_tmp: 1574653860
tadrequire: true
as: A1B5DDCDBBE7783
cp: 5DDB57A788333E1
_signature: j-rZJAAgEBJj1qIWhawsP4.q2DAANI-
https://www.toutiao.com/toutiao/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&as=A105DED138235D2&cp=5E18B3F56DF24E1
"""
from pprint import pprint
from urllib.parse import urlencode

import requests


class TouTiaoSpider:
    def __init__(self):
        self.NewsApi = "https://www.toutiao.com/api/pc/feed/"
        self.asUrl = "http://localhost:8000"
        self.hotPage = "https://www.toutiao.com"
        self.headers = {
            "accept": "text/javascript, text/html, application/xml, text/xml, */*",
            "referer": "https://www.toutiao.com/",
            # "Cookie": "tt_webid=6780876419049801230; WEATHER_CITY=%E5%8C%97%E4%BA%AC; s_v_web_id=25132706e3f434d168f23db6045fb9d4; tt_webid=6780876419049801230; __tasessionId=bh0fpa37m1578795834647; csrftoken=8009839384d6a14fab0d82809fe6f1fb"
        }
        self.session = requests.session()

    def generate_as_cp(self):
        """
        生成as和cp参数值
        :return:
        """
        resp = requests.get(self.asUrl)
        data = resp.json()
        return data.values()

    def generate_signature(self, ua, durl):
        data = {
            "ua": ua,
            "url": durl
        }
        resp = requests.post(self.asUrl + "/sign", data=data)
        return resp.text

    def get_api_info(self):
        """
        获取文章信息
        :return:
        """
        ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"

        self.headers['User-Agent'] = ua

        self.session.get(self.hotPage, headers=self.headers)
        asd, cpd = self.generate_as_cp()
        data = {
            "min_behot_time": 0,
            "category": "__all__",
            "utm_source": "toutiao",
            "widen": 1,
            "tadrequire": True,
            "as": asd,
            "cp": cpd,
        }
        durl = self.NewsApi + '?' + urlencode(data)
        signature = self.generate_signature(ua, durl)
        print(f"sign:{signature},cookie:{self.session.cookies.get_dict()}")

        data['_signature'] = signature
        print(self.NewsApi)
        resp = self.session.get(self.NewsApi, params=data, headers=self.headers)
        try:
            # print(resp.history)
            # print(resp.url)
            # pprint(resp.json())
            for item in resp.json().get("data"):
                print(item.get('title'))
        except:
            print(resp.text)


if __name__ == '__main__':
    TT = TouTiaoSpider()
    TT.get_api_info()
