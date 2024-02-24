# viteがbuildを行い、dist/に吐き出す
npm run build

# 必要なものをdistに移動
cp manifest.json dist/
cp icon.png dist/

# zipにする（アップロード用）
zip package.zip -r dist/
rm -r dist/
