# 初期起動
```
./scripts/init.sh
```

# アプリの起動方法
```
docker-compose up --build
```
起動後は、サーバのアドレスにポート3000でアクセス


# アプリのビルド
```
docker-compose run app sh -c "cd react-app&& yarn build"
```
出力先 volumes/react-app/build/

# アプリケーションの中身
Reactのチュートリアルの三目並べです。

