# POE Hideout Coordinate Converter

Copy and Convert Hideout Decoration Coordinates To Different Hideout Base

Before you use this tool, please refer to the following link on how to obtain the coordinate difference between two hideouts:
- [English (Google Translate)](https://translate.google.com/translate?sl=zh-CN&tl=en&u=https://forum.gamer.com.tw/Co.php?bsn%3D18966%26sn%3D549600%26subbsn%3D13%26bPage%3D0)
- [Chinese (Original)](https://forum.gamer.com.tw/C.php?bsn=18966&snA=124827&page=1&gothis=549600#549600)

Once you calculated x and y coordinate difference, put them into `config.json`

## Config.json Settings
- `HIDEOUT_FILE`: the original file you'd like to copy (file name e.g.: `your-hideout-name.hideout`)
- `NEW_HIDEOUT_NAME`: new hideout base you'd like to copy to (e.g.: `Celestial Nebula Hideout`)
- `NEW_HIDEOUT_HASH`: hash of the new hideout base (refer `*.hideout` file for the hash value)
- `DIFF_X`: difference of x coordinate
- `DIFF_Y`: difference of y coordinate

## Download
https://github.com/tojurnru/poe-hideout-coordinate-converter/releases

## Troubleshoot

The executable outputs log into console. In case nothing happens after you run, try running it again via Command Prompt or Terminal.
