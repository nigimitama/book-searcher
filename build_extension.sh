#!bin/sh -eux

if [ -e "dist/" ]; then
  rm -r dist/
fi

# viteがbuildを行い、dist/に吐き出す
npm run build

# 必要なものをdistに移動
cp manifest.json dist/
cp -r images/ dist/
cp -r _locales dist/

# zipにする（アップロード用）
if [ -e "package.zip" ]; then
  rm "package.zip"
fi

zip package.zip -r dist/
rm -r dist/
