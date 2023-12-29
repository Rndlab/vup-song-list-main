import json
import pandas as pd
import math
import time
from pypinyin import Style, lazy_pinyin
song_df = pd.read_excel('./music.xlsx', dtype={'网易云播客id': str})
song_df = song_df.where(pd.notnull(song_df), None)
song_list = []


print('开始生成歌单')
for index, row in song_df.iterrows():
    print(row[0])
    song_data = {
        "index": index,
        "song_name": row[0] or '',
        "artist": row[1] or '',
        "language": row[2] or '中文',
        "remarks": '' if row[3] is None else row[3],
        "initial": ''.join(lazy_pinyin(row[0], style=Style.FIRST_LETTER))[0].upper(),
        "sticky_top": 0,
        "paid": 0,
        "BVID": '' if row[4] is None else row[4],
        "url": '' if row[5] is None else row[5]
    }
    song_list.append(song_data)

with open("../public/music_list.json", 'w') as f:
    f.write(json.dumps(song_list))
print('生成歌单完成')
time.sleep(5000)

