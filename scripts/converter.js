const assert = require('assert');
const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');

const cnchar = require('cnchar');

([ 'cnchar-poly',
   'cnchar-trad', ]).map(id => require(id))
                    .forEach(f => cnchar.use(f));

const toPinyin = str => cnchar.spell(str);

const src = path.resolve(__dirname, './music.xlsx')
const dest = path.resolve(__dirname, '../public/music_list.json')

const loadMusicList = async ({src, dest}) => {
    const buffer = fs.readFileSync(src)

    const workbook = new ExcelJS.Workbook()
    workbook.calcProperties.fullCalcOnLoad = true
    await workbook.xlsx.load(buffer)

    let song_list = []

    if (workbook.worksheets.length > 0) {
        let index = 0
        workbook.worksheets[0].eachRow((r, i) => {
            const song_name = r.getCell(1).text
            if (!song_name) { return }
            if (song_name === '歌名') { return }
            console.log(`${song_name}`)

            let song_data = {}
            song_data.index = index++
            song_data.song_name = song_name || ''
            song_data.artist = r.getCell(2).text || ''
            song_data.language = r.getCell(3).text || ''
            song_data.remarks = r.getCell(4).text || ''

            assert(song_data.song_name.length > 0, JSON.stringify(song_data.song_name))
            song_data.initial = toPinyin(song_name).slice(0, 1).toUpperCase()

            if (song_data.initial.toLowerCase() === song_data.initial) {
                song_data.initial = ''
            }

            song_data.sticky_top = 0
            song_data.paid = 0
            song_data.BVID = r.getCell(5).text || ''
            song_data.url = r.getCell(6).text || ''

            song_list.push(song_data)
        })
    }
    
    fs.writeFileSync(dest, JSON.stringify(song_list))
    console.log('生成歌单完成')
}

loadMusicList({src, dest})
