"""
@file:run_spider.py
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
"""
import requests


class TouTiaoSpider:
    def __init__(self):
        self.NewsApi = "https://www.toutiao.com/api/pc/feed/"
        self.asUrl = "http://localhost:8000"
        self.headers = dict()
        self.hotPage = "https://www.toutiao.com/ch/news_hot/"
        self.session = requests.session()

    def generate_as_cp(self):
        """
        生成as和cp参数值
        :return:
        """
        resp = requests.get(self.asUrl)
        data = resp.json()
        return data.values()

    def generate_signature(self, ua, max_behot_time=0):
        data = {
            "ua": ua,
            "btime": max_behot_time
        }
        resp = requests.post(self.asUrl + "/sign", data=data)
        return resp.text

    def get_api_info(self, max_behot_time=0):
        """
        获取文章信息
        :return:
        """
        ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        self.headers['User-Agent'] = ua
        self.session.get(self.hotPage, headers=self.headers)
        asd, cpd = self.generate_as_cp()
        signature = self.generate_signature(ua, max_behot_time)
        print(signature)
        data = {
            "category": "news_hot",
            "utm_source": "toutiao",
            "widen": 1,
            "max_behot_time": max_behot_time,
            "max_behot_time_tmp": max_behot_time,
            "tadrequire": True,
            "as": asd,
            "cp": cpd,
            "_signature": signature
        }
        resp = self.session.get(self.NewsApi, params=data, headers=self.headers)
        print(resp.json())


if __name__ == '__main__':
    TT = TouTiaoSpider()
    TT.get_api_info()
