# Git Lesson

## リモートリポジトリとローカルリポジトリとはそれぞれ何でしょうか？
    - ファイルやディレクトリ状態を記録する場所をリポジトリといい、
      このリポジトリをネット上に配置して複数人で共有する場所をリモートリポジトリ。
      一方で開発者ひとりひとりが使用するために自分のパソコンに配置する場所をローカルリポジトリという。


## プッシュとマージの違いは何でしょうか？
    - プッシュはローカルで編集した内容をリモートにアップすること。
    - マージはそれぞれローカルで編集されリモートにアップされた作業内容をブランチにとりこむこと。



## コミットとプッシュの違い
    - コミットは編集した内容や変更した内容をリポジトリに保存することなので、保存とアップで作業目的が違う。



## コミットのメッセージはどのように書いてあげるのが最適でしょうか？
    - コミットメッセージはその履歴がどんな編集をしたのか残すメッセージなので、一目で内容が分かるように書くのが最適。


## ローカルでマージするフローと、プルリクエストでマージするフローの違いは何でしょうか？
    - 主な違いはマージの前にコードレビューを挟むかというところ。ローカルでマージをしてリモートのブランチにプッシュをしてしまうとコードにバグがあっても気づかない可能性が出てしまうが、プルリクエストを作成し担当者にコードレビューされることで、事前にバグを発見することができる。


## コンフリクトを起こしてしまった場合、どう対処すべきですか？
    - 状況にもよるが下記の3通りの方法で変更を取り込む必要がある。
    1.先にマージされた変更内容を取り込む
    2.後にマージしようとしている変更内容を取り込む
    3.どちらの変更内容も取り込む
    - コンフリクトの解決は自分以外の人が書いたコードの内容も把握する必要があるため、少しでも意図が読み取れない場合はコードを書いた人とよく相談をすることが重要である。