var questionsData = [
  {
    q: "q1",
    question: "朋友提議臨時改行程，你第一反應是？",
    options: [
      { text: "覺得突然改很好玩，就跟了", type: "E" },
      { text: "先問清楚為什麼改，再決定", type: "T" },
      { text: "感覺不太對，但先觀察大家意見", type: "C" },
      { text: "查一下新地點的資訊，有備無患", type: "I" },
      { text: "看其他人都怎麼選，我不想跟群體落差太大", type: "P" }
    ]
  },
  {
    q: "q2",
    question: "你看到一款你關注已久的耳機，限時特價只剩最後5組，你會？",
    options: [
      { text: "馬上下單，這價格錯過太可惜", type: "E" },
      { text: "上網查原價與歷史折扣，判斷值不值得", type: "T" },
      { text: "覺得這種急促感是套路，寧願觀望", type: "R" },
      { text: "傳給朋友問他會不會買，再決定", type: "P" },
      { text: "點開評論、開箱影片，評估整體CP值", type: "I" }
    ]
  },
  {
    q: "q3",
    question: "你在團隊會議上被臨時點名發表意見，你會？",
    options: [
      { text: "硬著頭皮講直覺感受，先撐場面", type: "M" },
      { text: "邊講邊看大家反應，修正內容", type: "P" },
      { text: "把腦中記得的資料組一組再說", type: "I" },
      { text: "依照邏輯架構講出合理結論", type: "T" },
      { text: "表達對這件事的感受，讓大家理解你的立場", type: "C" }
    ]
  },
  {
    q: "q4",
    question: "有人在群組裡發了一篇你不同意的文章，你會？",
    options: [
      { text: "直接留言反駁，不能放任錯誤擴散", type: "T" },
      { text: "想了一下，看風向再決定要不要回", type: "P" },
      { text: "傳個貼圖，表示已讀", type: "E" },
      { text: "感覺被冒犯但選擇不說話", type: "R" },
      { text: "開新視窗查資料，找證據再來對話", type: "I" }
    ]
  },
  {
    q: "q5",
    question: "你在面對一項全新任務時，會傾向？",
    options: [
      { text: "靠經驗與直覺處理，先做再說", type: "C" },
      { text: "先看別人怎麼做，觀察找靈感", type: "P" },
      { text: "查資料、比對案例，擬定明確計畫", type: "L" },
      { text: "測試幾種方式，看反應再修正", type: "E" },
      { text: "整理需求與條件，建立自己的判斷模型", type: "I" }
    ]
  },
  {
    q: "q6",
    question: "你在選擇工具或資源時，會偏好？",
    options: [
      { text: "用順手、感覺對的就好", type: "C" },
      { text: "先看看別人都用什麼，有參考才安心", type: "P" },
      { text: "挑選穩定、有邏輯支撐的工具", type: "R" },
      { text: "會先試用幾種，實戰中感受差異", type: "E" },
      { text: "用數據評估效果，確認最合適的那個", type: "I" }
    ]
  },
  {
    q: "q7",
    question: "在做選擇時你最害怕的是？",
    options: [
      { text: "選了感覺對但實際錯誤的選項", type: "C" },
      { text: "與群體判斷落差太大", type: "P" },
      { text: "邏輯漏洞導致結果不穩", type: "R" },
      { text: "錯過最佳出手機會", type: "E" },
      { text: "資料不足，無法預測風險", type: "I" }
    ]
  },
  {
    q: "q8",
    question: "你覺得自己最擅長的能力是？",
    options: [
      { text: "直覺與當下判斷", type: "M" },
      { text: "觀察人性與環境互動", type: "P" },
      { text: "邏輯推理與規則制定", type: "T" },
      { text: "執行效率與靈活反應", type: "E" },
      { text: "資料收集與系統分析", type: "I" }
    ]
  },
  {
    q: "q9",
    question: "當你輸了一次，你會先？",
    options: [
      { text: "安靜下來反思整體流程", type: "C" },
      { text: "找朋友聊聊狀況與可能的盲點", type: "P" },
      { text: "重新建立推理邏輯與策略步驟", type: "L" },
      { text: "馬上換下一招，不被情緒困住", type: "E" },
      { text: "檢查紀錄，釐清哪個環節出錯", type: "I" }
    ]
  },
  {
    q: "q10",
    question: "你在接受新資訊時，最在意的是？",
    options: [
      { text: "是否引起內心的情感共鳴", type: "C" },
      { text: "這資訊是不是多數人都接受的", type: "P" },
      { text: "它背後有沒有邏輯基礎與證據", type: "T" },
      { text: "是否可以馬上實踐應用", type: "R" },
      { text: "能否整合進原有的知識體系中", type: "I" }
    ]
  },
  {
    q: "q11",
    question: "朋友向你尋求建議時，你傾向怎麼做？",
    options: [
      { text: "根據直覺提供建議", type: "M" },
      { text: "詢問更多背景，分析對方處境", type: "I" },
      { text: "問其他人的意見後綜合判斷", type: "P" },
      { text: "先分析可能路徑與風險", type: "T" },
      { text: "提供實際可執行的方法給對方", type: "E" }
    ]
  },
  {
    q: "q12",
    question: "遇到不熟的人，你通常會？",
    options: [
      { text: "先觀察對方風格與習性", type: "P" },
      { text: "快速破冰，進行試探性互動", type: "E" },
      { text: "保持距離，先分析情境是否安全", type: "T" },
      { text: "內建雷達判斷這人能不能信任", type: "M" },
      { text: "紀錄細節，後續觀察再進一步", type: "I" }
    ]
  },
  {
    q: "q13",
    question: "你認為影響決策最關鍵的因素是？",
    options: [
      { text: "情境當下的氛圍與感受", type: "C" },
      { text: "數據資料與過往經驗", type: "I" },
      { text: "群體反應與他人回饋", type: "P" },
      { text: "行動速度與反應彈性", type: "E" },
      { text: "整體邏輯與後續推演", type: "T" }
    ]
  },
  {
    q: "q14",
    question: "你覺得怎樣的失敗最難承受？",
    options: [
      { text: "直覺錯誤導致重大損失", type: "M" },
      { text: "資料都對但還是失敗", type: "I" },
      { text: "跟多數人判斷一致卻做錯", type: "P" },
      { text: "明知風險卻還是踩下去", type: "E" },
      { text: "所有邏輯都對仍無法成功", type: "T" }
    ]
  },
  {
    q: "q15",
    question: "遇到需要立刻回應的緊急狀況，你？",
    options: [
      { text: "直覺式反應，靠本能行動", type: "M" },
      { text: "依照以往經驗套用類似處理模式", type: "I" },
      { text: "快速評估風險後出手", type: "T" },
      { text: "先下手為強，再觀察結果", type: "E" },
      { text: "看看現場其他人怎麼做", type: "P" }
    ]
  },
  {
    q: "q16",
    question: "你會如何規劃長期計畫？",
    options: [
      { text: "憑感覺抓大方向，邊走邊修正", type: "C" },
      { text: "列出清單與時間點，逐項執行", type: "L" },
      { text: "參考他人案例與建議作為架構", type: "P" },
      { text: "用推論找出最高效率流程", type: "T" },
      { text: "根據數據持續優化方案", type: "I" }
    ]
  },
  {
    q: "q17",
    question: "當他人否定你的想法時，你？",
    options: [
      { text: "先看看他說的是否有邏輯", type: "T" },
      { text: "尊重但堅持自己感覺", type: "M" },
      { text: "找其他人再詢問看看誰更有道理", type: "P" },
      { text: "馬上再測試一次證明自己沒錯", type: "E" },
      { text: "列出資料支撐自己的立場", type: "I" }
    ]
  },
  {
    q: "q18",
    question: "別人會怎麼形容你的思考風格？",
    options: [
      { text: "跳脫框架，擅長找出奇異點", type: "M" },
      { text: "紮實穩定，數據導向分析型", type: "I" },
      { text: "協調與橋樑者，善於換位思考", type: "P" },
      { text: "行動派，能抓時機果斷決策", type: "E" },
      { text: "邏輯嚴密，習慣拆解系統結構", type: "T" }
    ]
  },
  {
    q: "q19",
    question: "你通常如何做出重要決定？",
    options: [
      { text: "根據當下感受與過往經驗", type: "C" },
      { text: "收集所有相關資訊再推斷", type: "I" },
      { text: "詢問信任對象的建議", type: "P" },
      { text: "評估每個選項的邏輯鏈結", type: "T" },
      { text: "看有沒有實戰證據佐證決策", type: "E" }
    ]
  },
  {
    q: "q20",
    question: "當你完成一場複雜的任務後，你會？",
    options: [
      { text: "感受任務帶來的成就與感動", type: "C" },
      { text: "復盤整體過程，建立經驗模板", type: "I" },
      { text: "分享給群體，看看大家怎麼看待", type: "P" },
      { text: "回頭挑戰更難的版本測試極限", type: "E" },
      { text: "分析整體流程與效率，提出優化建議", type: "T" }
    ]
  }
