# 初期起動
```
./scripts/init.sh
```

# アプリの起動方法
```
docker-compose up --build
```

# アプリのビルド
```
docker-compose run app sh -c "cd react-app&& yarn build"
```
出力先 volumes/react-app/build/

