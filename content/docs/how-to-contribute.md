# 如何貢獻

![editor](/docs/editor.webp)

我們提供一個**容易使用且功能強大**的內容編輯器。貢獻者能快速新增或修改政治人物的各項內容。

我們使用[Markdown](https://markdown.tw/)([GFM](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax))語法編輯所有內容。Markdown 是一種輕量級的標記語言，它允許人們使用易讀易寫的純文字格式編寫文檔，然後轉換成結構化的HTML。

## 使用編輯器貢獻內容

### 使用規範

1. 提出的內容必須與標籤相關。
1. 提出的內容必須提出證明或附上來源。(使用[註腳](#註腳footnotes))
   - 沒有來源的內容不會被加入。
   - 如果來源的連結後來失效，這筆資訊也將會被移除。
   - 需要時會寄Email向貢獻者提問。
1. 請不要使用`# 一級標題`與`## 二級標題`。(參考[標題](#標題headings))

### 登入編輯器

<video style="border:1px solid #3199BA" autoplay loop muted controls playsinline>
    <source src="/docs/login.webm" type="video/webm" />
    <source src="/docs/login.mp4" type="video/mp4" />
</video>

- 點擊`編輯內容`按鈕或直接到[https://www.voting-guide.tw/contribute](https://www.voting-guide.tw/contribute)
- 未登入的用戶需寄送Email驗證信，並點選信中`點擊此連結驗證你的Email`連結。
- 點選連結後便會開啟編輯器。

### 功能簡介

![editor-overview](/docs/editor-overview.webp)

1. 選擇欲編輯的政治人物與資訊標籤
1. Markdown編輯器
1. 內容預覽
1. 送出審核按鈕

請參考[Markdown語法和使用情境](markdown語法和使用情境)學習如何使用Markdown語法。
挑選適合你的Markdown語法來填寫你的內容。有任何疑問也請[聯絡我們](/docs/we-need-to-talk)。

### 送出變更請求

![submit](/docs/submit.webp)

- 點選`完成編輯`以顯示確認對話框。
- 填入你的名字並按下，`確認送出`。

## 查看正在審核中的內容

[https://github.com/taiwan-voting-guide/content/pulls](https://github.com/taiwan-voting-guide/content/pulls)

## 增加或修改資訊標籤

如果你認為**沒有你需要的標籤**或**標籤應該被修改**請[聯絡我們](/docs/we-need-to-talk)

## Markdown語法和使用情境

此部分只簡單介紹常用的Markdown語法，請參考以下連結學習Markdown完整的教學。

- [https://markdown.tw/]()
- [https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

### 標題（Headings）

- 使用`#`符號創建標題。`#`的數量表示標題的級別。一級標題用一個`#`，二級標題用兩個`##`，以此類推。
- 使用情境：組織文檔結構，清晰地區分不同部分或章節。
- **禁止使用一級標題和二級標題**，因為在工具上我們已經使用一級標題於候選人的姓名，使用二級標題於資訊標籤。

```
### 三級標題
#### 四級標題
##### 五級標題
###### 六級標題
```

### 段落和換行（Paragraphs and Line Breaks）

- 段落由一個或多個連續的內容行組成。在段落後面加上一個空行來創建新的段落。
- 在行尾添加兩個或更多的空格，然後按Enter鍵可創建一個換行。

```
這是一個段落。

這是另一個段落。
這是同一段落中的新行。
```

### 粗體和斜體（Bold & Italic）

- 用兩個`*`或`_`包圍文字創建粗體（如`**粗體**`），用一個`*`或`_`包圍文字創建斜體（如`*斜體*`）。
- 使用情境：強調內容中的關鍵詞或短語。

```
*斜體* _斜體_ **粗體** __粗體__
```

### 列表（Lists）

- 無序列表使用`*`、`-`或`+`開頭。
- 有序列表使用數字後跟點（如`1.`）。
- 使用情境：列出一系列的項目或步驟。

```
- 項目 1
- 項目 2
  - 子項目 2.1
  - 子項目 2.2
- 項目 3

1. 第一項
2. 第二項
3. 第三項
```

### 鏈接（Links）

- 使用方括號包圍鏈接文字，後跟圓括號內的URL（如`[Google](https://www.google.com)`）。
- 使用情境：參考外部資源或相關連結。

```
[Google](https://www.google.com)
```

### 圖片（Images）

- 與鏈接類似，但在方括號前加一個驚嘆號（如`![alt text](image_url)`）。
- 使用情境：插入圖片或視覺元素。

```
![圖片描述](http://example.com/image.jpg)
```

### 引用（Blockquotes）

- 使用`>`符號前置於引用文字。
- 使用情境：引用或突出顯示其他來源的內容。

```
> 這是一個引用。
> 這是同一個引用的第二行。
```

### 水平線（Horizontal Rules）

- 使用三個以上的`-`、`*`或`_`創建分隔線。
- 使用情境：在文檔中創建清晰的分隔。

```
---
或
***
```

### 表格 (Tables)

- 通過使用豎線 `|` 和連字符 `-` 來創建清晰的列和行。
- 使用情境：在當需要在文檔中清晰地展示和組織數據，比如規格、特性列表、價格等。

```
| 標頭 1 | 標頭 2 | 標頭 3 |
| ------ | ------ | ------ |
| 內容 1 | 內容 2 | 內容 3 |
| 內容 a | 內容 b | 內容 c |
```

### 註腳（Footnotes）

- 在需要添加註腳的文字後加上`[^n]`（`n`是註腳編號）。在文檔的任何位置定義註腳內容，格式為`[^n]: 註腳內容`。註腳通常放在文檔的末尾。
- 使用情境：提供額外信息或參考，而不干擾主要內容的流程。
- **你需要在每一行的結尾加上註腳，而註腳內容為這筆資訊的來源。**

```
這是一段包含註腳的資訊。這裡是一個註腳[^1]。

[^1]: 這是註腳的內容，它可以包含來源或來源的連結。

這是第二段，它也有一個註腳[^2]。

[^2]: 第二個註腳的內容。
```
