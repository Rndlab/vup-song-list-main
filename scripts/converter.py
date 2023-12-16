import json
import pandas as pd
import math
song_df = pd.read_excel('./music.xlsx')
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
        "initial": row[4] or 'A',
        "sticky_top": row[5] or 0,
        "paid": row[6] or 0,
        "BVID": '' if row[7] is None else row[7]
    }
    if row[5] == 1:
        song_list.insert(0,song_data)
    else:
        song_list.append(song_data)

with open("../public/music_list.json", 'w') as f:
    f.write(json.dumps(song_list))
