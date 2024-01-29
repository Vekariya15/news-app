import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Reuters",
            "title": "Intel co-founder Gordon Moore, author of 'Moore's Law' that helped drive computer revolution, dies at 94",
            "description": "Intel co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age of 94, the company announced.",
            "url": "https://www.cnn.com/2023/03/24/tech/gordon-moore-obituary/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230324222237-gordon-moore-file-032423.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-25T02:47:02Z",
            "content": "Intel co-founder Gordon Moore, a pioneer in the semiconductor industry whose Moores Law predicted a steady rise in computing power for decades, died Friday at the age of 94, the company announced.\r\nI… [+4645 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Alli Rosenbloom",
            "title": "Jason Sudeikis explains why he keeps his Twitter DMs open (yes, he seriously does)",
            "description": "Believe that when \"Ted Lasso\" star Jason Sudeikis says he read his Twitter DMs, he really does.",
            "url": "https://www.cnn.com/2023/03/24/entertainment/jason-sudeikis-twitter-dms-tapper-interview/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230323144539-02-jason-sudeikis-ted-lasso.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-25T02:11:59Z",
            "content": "Believe that when Ted Lasso star Jason Sudeikis says he read his Twitter DMs, he really does.\r\nIn a new interview with CNNs Jake Tapper that aired on Friday, Sudeikis, who stars as the titular charac… [+1808 chars]"
        },

        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Anja Ettel, Andreas Macho",
            "title": "Ärzte fordern Vereinfachung des Meldesystems",
            "description": "Mediziner sind nicht zufrieden mit dem Umgang mit Covid-Impfschäden: Das Meldesystem sei zu bürokratisch und sollte digitalisiert werden, so Vertreter der Ärzteschaft. Nachholbedarf sehen sie auch bei der Vergütung von Beratungsleistungen rund um die Impfunge…",
            "url": "https://www.welt.de/wirtschaft/article244480746/Covid-Impfschaeden-Aerzte-fordern-Vereinfachung-des-Meldesystems.html",
            "urlToImage": "https://img.welt.de/img/wirtschaft/mobile244480744/3921353617-ci16x9-w1200/A-Healthcare-Worker-Prepares-a-Dose-of-COVID-19-Vaccine.jpg",
            "publishedAt": "2023-03-25T00:09:32Z",
            "content": "Angesichts der Debatte um die tatsächliche Zahl von Impfschäden nach Covid-19-Impfungen fordern Ärzte ein vereinfachtes Meldesystem zur Erfassung von Verdachtsfällen. Der Meldeprozess muss dringend b… [+2190 chars]"
        },

        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Jan Dams, Philipp Vetter",
            "title": "Wirtschaftsweise – „Wir sind bei der Inflation noch nicht über den Berg“",
            "description": "Nach den ersten Schockwellen bei den Banken ist es noch zu früh, Entwarnung für die Branche zu geben, sagt die Wirtschaftsweise Veronika Grimm. Die Zentralbanken dürften nun aber nicht den Fehler machen, mit der Inflationsbekämpfung nachzulassen.",
            "url": "https://www.welt.de/wirtschaft/article244466816/Veronika-Grimm-Wir-sind-bei-der-Inflation-noch-nicht-ueber-den-Berg.html",
            "urlToImage": "https://img.welt.de/img/wirtschaft/mobile244466814/9761350367-ci16x9-w1200/Ludwig-Erhard-Gipfel-2022-auf-Gut-Kaltenbrunn-am-Tegernsee.jpg",
            "publishedAt": "2023-03-25T00:02:52Z",
            "content": "Die Wirtschaftsweise Veronika Grimm hält es nach dem Zusammenbruch der Silicon Valley Bank und der Zwangsfusion der Credit Suisse mit der UBS für noch zu früh, Entwarnung für den globalen Bankensekto… [+1990 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Tobias Kaiser",
            "title": "Deutschland muss Atomkraftwerke in der EU mitfinanzieren",
            "description": "Brüssel subventioniert Atomtechnologie im Rahmen des Green Deal als saubere Technologie. Auch Deutschland finanziert dort kräftig mit, obwohl Berlin einen anderen Kurs fährt. Daher fordern Teile der FDP eine neue Debatte.",
            "url": "https://www.welt.de/wirtschaft/article244474252/Atomkraftwerke-Deutschland-muss-die-Reaktoren-in-der-EU-mitfinanzieren.html",
            "urlToImage": "https://img.welt.de/img/wirtschaft/mobile244474928/7941351057-ci16x9-w1200/Belleville-sur-Loire-nuclear-power-station.jpg",
            "publishedAt": "2023-03-25T00:04:58Z",
            "content": "Nach dem Streit über das Verbrennerverbot und E-Fuels kündigt sich der nächste europapolitische Konflikt in der Ampel-Koalition an. Diesmal geht es um EU-Subventionen für Atomkraft.\r\nDeutschland stei… [+3000 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "PR Newswire",
            "title": "Vanillin market size is estimated to grow by USD 427.69 million between 2022 and 2027; The growing popularity of ethyl vanillin will drive the growth - Technavio",
            "description": "The vanillin market size is forecast to increase by USD 427.69 million from 2022 to 2027, at a CAGR of 11.08%, according to the recent market study by...",
            "url": "https://finance.yahoo.com/news/vanillin-market-size-estimated-grow-013000198.html",
            "urlToImage": "https://media.zenfs.com/en/prnewswire.com/4fa3205537a8276cb39c597fa71ce58e",
            "publishedAt": "2023-03-25T01:30:00Z",
            "content": "NEW YORK, March 24, 2023 /PRNewswire/ -- The vanillin market size is forecast to increase by USD 427.69 million from 2022 to 2027, at a CAGR of 11.08%, according to the recent market study by Technav… [+12810 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Bengals Wire",
            "title": "Bengals to meet with Buckeyes CB Cameron Brown before NFL draft",
            "description": "Another notable draft nugget for the Bengals.",
            "url": "https://bengalswire.usatoday.com/2023/03/24/bengals-meet-buckeyes-cameron-brown-nfl-draft/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/blFF9Z6fclZ7x9WdnNCASQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NjA-/https://media.zenfs.com/en/cincinnati_bengals_wire_usa_today_sports_articles_393/2ff21402c95b61c2d4c82048024bb809",
            "publishedAt": "2023-03-25T00:45:45Z",
            "content": "The Cincinnati Bengals will meet with Ohio State CB Cameron Brown before the NFL Draft.\r\nThis was reported by Dan Hope of Eleven Warriors on Wednesday during Ohio States pro day which was attended by… [+801 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techable.jp"
            },
            "author": "山田真由子",
            "title": "Apple Watch Ultraをケーブルなしで高速充電！コンパクトな充電ドック登場",
            "description": "Apple Watch Series 7と8、Ultraを急速充電するモジュール搭載のApple Watch充電ドック「Maco Go 2」の開発プロジェクト支援者募集がクラウドファンディングサイト「GREEN FUND...",
            "url": "https://techable.jp/archives/200581",
            "urlToImage": "https://techable.jp/wp-content/uploads/2023/03/sub2-27.jpg",
            "publishedAt": "2023-03-25T03:00:37Z",
            "content": "CIOSMARTCOBY Pro CABLE USB-CAmazonMakuake2,0..."
        },
        {
            "source": {
                "id": null,
                "name": "Technews.tw"
            },
            "author": "中央社",
            "title": "生產移出中國，傳蘋果供應商和碩將在印度設第 2 廠",
            "description": "熟知內情的兩名消息人士透露，蘋果公司（Apple）的台灣供應商和碩聯合科技公司正透過談判，要在印度開設第 2 家工廠。此時，蘋果的合作夥伴持續將生產作業自中國對外分散。 路透社報導，因談話屬私下性質而要求不具名的這兩名消息人士說，和碩打算在印度坦米爾那都省（Tamil Nadu）南部城市清奈（Che...",
            "url": "https://technews.tw/2023/03/25/apple-inc-supplier-pegatron-in-talks-to-open-second-india-factory/",
            "urlToImage": "https://img.technews.tw/wp-content/uploads/2022/10/13143705/Apple-Orchard-Road-Singapore-iPhone-14-lineup-220916-e1665643031688.jpg",
            "publishedAt": "2023-03-25T01:35:50Z",
            "content": "Apple 2 \r\nTamil NaduChennai215,0006\r\niPhone\r\nCounterpointiPhone10%\r\n2Mahindra World City20229"
        },
        {
            "source": {
                "id": null,
                "name": "Technews.tw"
            },
            "author": "邱 倢芯",
            "title": "郭明錤：AirPods Pro 2 將推 USB-C 版，平價版似乎暫沒計畫",
            "description": "本週早些時候，蘋果向開發者與公測用戶釋出了 iOS 16.4 的最終測試版；在這次的更新當中，蘋果增加了新 Beats Studio+ 耳機與新 AirPods 的引用。開發者 @aaronp613 於 Twitter 上表示，iOS 16.4 當中引用的新 AirPods 耳機型號為 A3048，...",
            "url": "https://ccc.technews.tw/2023/03/25/airpods-pro-2-with-usb-c-port/",
            "urlToImage": "https://img.technews.tw/wp-content/uploads/2022/10/13110056/IMG_0070-e1665630063995.jpg",
            "publishedAt": "2023-03-25T02:13:20Z",
            "content": "iOS 16.4 Beats Studio+ AirPods @aaronp613 Twitter iOS 16.4 AirPods A3048 AirPods A2968 AirPods Pro 2 USB-C \r\n USB-C AirPods Pro 2 USB-C AirPods 2 AirPods 3\r\nI think this is likely the USB-C version o… [+340 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Celtics Wire",
            "title": "Celtics defense shines as Boston outpaces Indiana 120-95",
            "description": "Boston looked ready for the postseason as the Celtics grabbed a 120-95 win against the visiting Indiana Pacers.",
            "url": "https://celticswire.usatoday.com/lists/celtics-defense-shines-as-boston-outpaces-indiana-120-95/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Gn3RMGfzoEat9VPXzCGSCw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/celtics_wire_usa_today_sports_articles_699/9b757bdef977b4703fa9711bf79355cd",
            "publishedAt": "2023-03-25T01:22:08Z",
            "content": "The Boston Celtics grabbed an emphatic win at home Friday night, defeating the visiting Indiana Pacers 120 to 95. The Celtics move to 51-23 on the year, matching last seasons win total. With just eig… [+3514 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "NPR",
            "title": "The battle over Osage headrights",
            "description": "Richard J. Lonsinger is a member of the Ponca tribe of Oklahoma, who was adopted at a young age into a white family of three. He eventually reconnected with his birth family, but when his birth mother passed away in 2010, he wasn't included in the distributio…",
            "url": "https://www.npr.org/2023/03/23/1165619070/osage-headrights-killers-of-the-flower-moon-fletcher-lawsuit",
            "urlToImage": "https://media.npr.org/assets/img/2023/03/24/richard-lonsinger-osage-headrights-killers-of-the-flower-moon-martin-scorsese-david-grann-lawrence-kansas-oklahoma_wide-43b4f37b4628a237cf68b8a51e15d8510a75b7ec-s1400-c100.jpeg",
            "publishedAt": "2023-03-25T02:01:04Z",
            "content": "Richard Lonsinger at his home in Lawrence, Kansas, holding a photo of himself as a child shortly after he was adopted.\r\nSam Yellowhorse Kesler/NPR\r\nRichard J. Lonsinger is a member of the Ponca tribe… [+1919 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ozbargain.com.au"
            },
            "author": "buddysayshi",
            "title": "[iOS] Plant with Care $0 (Was $3.49) @ Apple App Store",
            "description": "No in-app purchases.\nNo data collected.\n\nDescription:\nYou love cooking delicious meals, but they require ingredients! The garden provides very productive soil that can be used for growing various crops. The space is limited and each vegetable has its own plan…",
            "url": "https://www.ozbargain.com.au/node/764739",
            "urlToImage": "https://files.ozbargain.com.au/n/39/764739l.jpg?h=69a8b26f",
            "publishedAt": "2023-03-25T01:13:10Z",
            "content": "No in-app purchases.No data collected.\r\nDescription:You love cooking delicious meals, but they require ingredients! The garden provides very productive soil that can be used for growing various crops… [+672 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Fighting"
            },
            "author": "MMA Fighting Newswire",
            "title": "UFC San Antonio preview show: Who has more to lose in Marlon Vera vs. Cory Sandhagen main event?",
            "description": "MMA Fighting previews Saturday’s UFC San Antonio card, headlined by a pivotal bantamweight bout between Marlon Vera and Cory Sandhagen.",
            "url": "https://www.mmafighting.com/2023/3/24/23655487/ufc-san-antonio-preview-show-who-has-more-to-lose-in-marlon-vera-vs-cory-sandhagen-main-event",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/ayPESvfdtliuWeGrC_eAT80RBBk=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24534686/ufc_san_antonio_clean.jpg",
            "publishedAt": "2023-03-25T00:00:00Z",
            "content": "In the UFC’s first event following a storyline filled UFC 286 card, the promotion heads to Texas for UFC San Antonio, which will be headlined by a pivotal matchup in the bantamweight division between… [+695 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Graeme Massie",
            "title": "Gwyneth Paltrow’s children Apple and Moses set to testify in ski accident trial",
            "description": "Hollywood star has been sued for $300,000 by retired doctor following 2016 crash",
            "url": "https://www.independent.co.uk/news/world/americas/gwyneth-paltrow-children-apple-moses-ski-trial-b2307799.html",
            "urlToImage": "https://static.independent.co.uk/2023/03/25/00/GettyImages-1249295328.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-03-25T01:01:04Z",
            "content": "Sign up to our Evening Headlines email for your daily guide to the latest news\r\nSign up to our free US Evening Headlines email\r\nGwyneth Paltrows children Apple and Moses are set to testify as witness… [+2926 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Bloomberg News",
            "title": "Apple CEO Cook Returns to China to Speak at Key Corporate Summit",
            "description": "(Bloomberg) -- Apple Inc. Chief Executive Officer Tim Cook returned to China to attend the high-profile China Development Forum in Beijing amid continued...",
            "url": "https://finance.yahoo.com/news/apple-ceo-cook-returns-china-005238768.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/oOLXokKmgTb2XlSl5VRP7g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/8e1a6accbbd49564885a7fda151fc12c",
            "publishedAt": "2023-03-25T00:52:38Z",
            "content": "(Bloomberg) -- Apple Inc. Chief Executive Officer Tim Cook returned to China to attend the high-profile China Development Forum in Beijing amid continued tensions between the region and the US.\r\nMost… [+2456 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Computerwoche.de Live"
            },
            "author": "Peter Müller",
            "title": "Interessante Patentanmeldung: Apple-Flop vor Wiederauferstehung?",
            "description": "Die Ladematte Airpower hatte es nie über die Ankündigung hinausgeschafft. Erledigt ist das Projekt nicht.",
            "url": "https://www.computerwoche.de/a/apple-flop-vor-wiederauferstehung,3614124?utm_source=Nach-Artikeltyp_1,30,119,124,125&utm_medium=RSS&utm_campaign=RSS-Feeds",
            "urlToImage": "https://images.computerwoche.de/bdb/3379086/640x360.jpg",
            "publishedAt": "2023-03-25T03:01:00Z",
            "content": "Trotz Ankündigung hat Apple seine Ladematte Airpower nie auf den Markt gebracht. Gelingt nun das Kunststück?Foto: Apple\r\nEin Apple kürzlich zugesprochenes Patent beschreibt, wie eine Ladematte für iP… [+4112 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Complex"
            },
            "author": "Brad Callas",
            "title": "Lola Brooke Taps Latto and Yung Miami for \"Don't Play With It\" Remix",
            "description": "Fresh off dropping her first new song of 2023, Bed-Stuy rapper Lola Brooke taps Latto and Yung Miami for the remix of her breakout hit \"Don't Play With It.\"",
            "url": "https://www.complex.com/music/lola-brooke-latto-yung-miami-dont-play-with-it-remix",
            "urlToImage": "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/vygpwaly5wiabj0tbsnc/lola-brooke-latto-yung-miami",
            "publishedAt": "2023-03-25T00:37:52Z",
            "content": "Fresh off dropping her first new song of 2023, Bed-Stuy rapper Lola Brooke recruits Latto and Yung Miami for the remix of her breakout hit “Don’t Play With It.”\r\nThe Dizzy Banko-produced track arrive… [+869 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Japan Today"
            },
            "author": null,
            "title": "Gwyneth Paltrow insists Utah ski collision wasn't her fault",
            "description": "Gwyneth Paltrow insisted Friday on the witness stand that a ski collision at an upscale Utah ski resort in 2016 wasn’t her fault, claiming the man suing her had run into her from behind. Paltrow testified that the crash shocked her — and said that she worried…",
            "url": "https://japantoday.com/category/entertainment/gwyneth-paltrow-expected-to-testify-in-ski-collision-trial",
            "urlToImage": null,
            "publishedAt": "2023-03-25T00:47:21Z",
            "content": "Gwyneth Paltrow insisted Friday on the witness stand that a ski collision at an upscale Utah ski resort in 2016 wasnt her fault, claiming the man suing her had run into her from behind.\r\nPaltrow test… [+5281 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Itc-check.com"
            },
            "author": "itc",
            "title": "【2023年3月25日限定】LINE Pay、Apple Gift Cardを友だちに贈るとLINEポイント2.5%還元キャンペーン実施中",
            "description": "2023年3月25日(土)0:00〜23:59の期間中、LINEからApple Gift Cardを友だちに贈るとLINEポイントが2.5%還元される「ニコニコday」キャンペーン実施中です。 LINEポイント還元は期間...",
            "url": "https://itc-check.com/lin-202303a/",
            "urlToImage": "https://itc-check.com/itcwp/wp-content/uploads/2023/03/lin-202303a.jpg",
            "publishedAt": "2023-03-25T01:16:46Z",
            "content": "2023325()0:0023:59LINEApple Gift CardLINE2.5%day\r\nLINE2.5%1,000\r\niPhoneLINE\r\n<table><tr><th></th><td>2023325()0:0023:59</td></tr><tr><th></th><td>202343()47()</td></tr></table>Apple Gift Card \r\nLINEA… [+202 chars]"
        },

        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": "Reuters",
            "title": "Intel co-founder Gordon Moore, prophet of the rise of the PC, dies at 94",
            "description": "(marketscreener.com) SAN FRANCISCO -Intel Corp co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age of 94, the company announced.https://www.markets…",
            "url": "https://www.marketscreener.com/news/latest/Intel-co-founder-Gordon-Moore-prophet-of-the-rise-of-the-PC-dies-at-94--43334598/?utm_medium=RSS&utm_content=20230325",
            "urlToImage": "https://www.marketscreener.com/images/twitter_ZB_fdnoir.png",
            "publishedAt": "2023-03-25T00:55:43Z",
            "content": "SAN FRANCISCO (Reuters) -Intel Corp co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age… [+4859 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": "MarketScreener",
            "title": "Intel co-founder Gordon Moore, prophet of the rise of the PC, dies at 94",
            "description": "(marketscreener.com) Intel Corp co-founder\nGordon Moore, a pioneer in the semiconductor industry whose\n\"Moore's Law\" predicted a steady rise in computing power for\ndecades, died Friday at the age of 94, the company announced.\n Intel and Moore's family philant…",
            "url": "https://www.marketscreener.com/quote/stock/INTEL-CORPORATION-4829/news/Intel-co-founder-Gordon-Moore-prophet-of-the-rise-of-the-PC-dies-at-94-43334598/?utm_medium=RSS&utm_content=20230325",
            "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdgris.png",
            "publishedAt": "2023-03-25T00:28:16Z",
            "content": "SAN FRANCISCO, March 24 (Reuters) - Intel Corp\r\nco-founder Gordon Moore, a pioneer in the semiconductor industry\r\nwhose \"Moore's Law\" predicted a steady rise in computing power\r\nfor decades, died Fri… [+4917 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Gordon Moore, Intel Co-Founder And Pioneer Of The PC, Dies At 94",
            "description": "Even though he predicted the PC movement, Gordon Moore told Forbes magazine that he did not buy a home computer himself until the late 1980s.",
            "url": "https://www.ndtv.com/world-news/gordon-moore-intel-co-founder-and-pioneer-of-personal-computers-dies-at-94-3891468",
            "urlToImage": "https://c.ndtvimg.com/2023-03/s3454sa8_gordon-moore_625x300_25_March_23.jpg",
            "publishedAt": "2023-03-25T00:13:46Z",
            "content": "Intel said he died surrounded by family at his home in Hawaii.\r\nSan Francisco: Intel Corp co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise … [+4895 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "WELT",
            "title": "Mehrheit der Verbraucher findet Warnstreik gerechtfertigt",
            "description": "Ein beispielloser Verkehrswarnstreik wird zu Wochenbeginn große Teile Deutschlands lahmlegen. Dennoch zeigt sich eine Mehrheit der Bundesbürger laut einer Erhebung verständnisvoll. Bei einem Aspekt sind die Befragten allerdings geteilter Meinung.",
            "url": "https://www.welt.de/politik/deutschland/article244484222/Streiks-Mehrheit-der-Verbraucher-findet-Arbeitsniederlegungen-gerechtfertigt.html",
            "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile244484228/7441356267-ci16x9-w1200/Warnstreiks-an-Flughaefen-Hamburg.jpg",
            "publishedAt": "2023-03-25T01:04:06Z",
            "content": "Eine Mehrheit der Menschen in Deutschland blickt verständnisvoll auf den ganztägigen und umfassenden Verkehrs-Warnstreik am kommenden Montag. Das geht aus einer Umfrage des Meinungsforschungsinstitut… [+1871 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Olhardigital.com.br"
            },
            "author": "Rodrigo Mozelli",
            "title": "Microsoft começa a liberar pareamento de iPhones com o Windows",
            "description": "App já era usado há anos por usuários de Android\nO post Microsoft começa a liberar pareamento de iPhones com o Windows apareceu primeiro em Olhar Digital.",
            "url": "https://olhardigital.com.br/2023/03/24/reviews/microsoft-comeca-a-liberar-pareamento-de-iphones-com-o-windows/",
            "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2023/03/shutterstock_2197539461.jpg",
            "publishedAt": "2023-03-25T02:34:48Z",
            "content": "A Microsoft estÃ¡ lanÃ§ando gradualmente o aplicativo Seu Telefone atualizado que permite a conexÃ£o de um iPhone a um PC com Windows.\r\nO repÃ³rter Tom Warren, do The Verge, teve acesso Ã  nova versÃ… [+4008 chars]"
        },
        {
            "source": {
                "id": "handelsblatt",
                "name": "Handelsblatt"
            },
            "author": "Handelsblatt",
            "title": "Gordon Moore: Intel-Mitbegründer mit 94 Jahren gestorben",
            "description": "Der Amerikaner gründete 1968 das Unternehmen mit, aus dem später Intel wurde. Er galt als Vorreiter der Halbleiter-Branche.",
            "url": "https://www.handelsblatt.com/technik/it-internet/gordon-moore-intel-mitbegruender-mit-94-jahren-gestorben/29058918.html",
            "urlToImage": "https://www.handelsblatt.com/images/gordon-moore/29058922/2-format2003.jpg",
            "publishedAt": "2023-03-25T01:24:00Z",
            "content": "San Francisco Der Mitbegründer des US-Chipherstellers Intel, Gordon Moore, ist im Alter von 94 Jahren gestorben. Dies teilte das Unternehmen am Freitag (Ortszeit) mit. Moore galt als Pionier der Halb… [+2217 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Madeleine Achenza",
            "title": "NSW election 2023: Interactive sausage map helps voters satisfy hunger while visiting polling booths",
            "description": "The Democracy Sausage website offers a helpful interactive map to help millions of NSW voters satisfy their hunger while voting on election day.",
            "url": "https://www.dailymail.co.uk/news/article-11900483/NSW-election-2023-Interactive-sausage-map-helps-voters-satisfy-hunger-visiting-polling-booths.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/03/24/23/wire-69092263-1679698943-680_636x382.jpg",
            "publishedAt": "2023-03-25T00:55:53Z",
            "content": "Barbecues are being fired up as voters across New South Wales head to the polls for the 2023 State Election.\r\nVoting booths across the state opened at 8am on Saturday, and millions are expected to ca… [+3205 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Intel cofounder Gordon Moore, prophet of the rise of the PC, dies at 94",
            "description": "Co-launching Intel in 1968, Moore was the rolled-up-sleeves engineer within a triumvirate of technology luminaries that eventually put \"Intel Inside\" processors in more than 80% of the world's personal computers.",
            "url": "https://economictimes.indiatimes.com/tech/technology/intel-cofounder-gordon-moore-prophet-of-the-rise-of-the-pc-dies-at-94/articleshow/98983287.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-98983300,width-1070,height-580,imgsize-59658,overlay-ettech/photo.jpg",
            "publishedAt": "2023-03-25T02:13:56Z",
            "content": "Intel Corp co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age of 94, the company annou… [+4799 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Andreas Macho",
            "title": "Nachfrage nach Eigentumswohnungen eingebrochen",
            "description": "Im Immobilienmarkt passen die Angebotspreise und die Finanzierungen wegen der gestiegenen Zinsen nicht mehr zusammen. Daher bricht die Nachfrage völlig ein. Immobilienentwickler bangen um ihr Geschäftsmodell.",
            "url": "https://www.welt.de/finanzen/immobilien/article244477148/Immobilienkrise-Nachfrage-nach-Eigentumswohnungen-eingebrochen.html",
            "urlToImage": "https://img.welt.de/img/finanzen/immobilien/mobile244477146/3101350887-ci16x9-w1200/Immobilienentwickler-in-der-Krise-7.jpg",
            "publishedAt": "2023-03-25T00:08:20Z",
            "content": "Die Nachfrage nach Eigentumswohnungen ist wegen der Immobilienkrise in den ersten Monaten dieses Jahres deutlich eingebrochen. Die Anfragen pro angebotener Eigentumswohnung gingen im Februar gegenübe… [+1130 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Zach Braziller",
            "title": "Inside Markquis Nowell’s journey to becoming foundation of Kansas State’s rise",
            "description": "Markquis Nowell put on a show at the Garden on Thursday and only wants more, as this is what he helped build this team to be.",
            "url": "https://nypost.com/2023/03/24/inside-markquis-nowells-journey-to-foundation-of-kansas-state/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000008693096.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-03-25T02:16:56Z",
            "content": "Shane Southwell was one of 19,624 mesmerized spectators in the Garden on Thursday night, and he found himself getting emotional watching the Markquis Nowell show.\r\nYes, Southwell was rooting for his … [+5595 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WGN TV Chicago"
            },
            "author": "Scott Lewis",
            "title": "Gwyneth Paltrow testifies she initially feared ski collision was a sexual assault",
            "description": "Paltrow testified that she was skiing downhill with her children, Apple and Moses, when a man skied up behind her, with his skis sliding between hers, moving her legs apart.",
            "url": "https://wgntv.com/news/nexstar-media-wire/gwyneth-paltrow-testifies-she-initially-feared-ski-collision-was-a-sexual-assault/",
            "urlToImage": "https://wgntv.com/wp-content/uploads/sites/5/2023/03/MicrosoftTeams-image-5.jpg?w=1280",
            "publishedAt": "2023-03-25T00:29:06Z",
            "content": "PARK CITY, Utah (KTVX) In a non-traditional twist, Gwyneth Paltrow was called to the stand by her opposition this afternoon in the Deer Valley Ski Resort crash injury case involving Dr. Terry Sanders… [+4087 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Terra.com.br"
            },
            "author": "Pipoca Moderna",
            "title": "Top 10 de lançamentos digitais tem filme do Oscar e sucessos de cinema",
            "description": "Sucessos de cinema, filme do Oscar e lançamentos exclusivos do streaming preenchem o Top 10 das ...",
            "url": "https://www.terra.com.br/diversao/entre-telas/filmes/top-10-de-lancamentos-digitais-tem-filme-do-oscar-e-sucessos-de-cinema,a6e4804b60c32be9c3ed5205d14aea7erzz45gl3.html",
            "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/03/25/497530738-the-banshees-of-inisherin.jpg",
            "publishedAt": "2023-03-25T00:57:54Z",
            "content": "Sucessos de cinema, filme do Oscar e lançamentos exclusivos do streaming preenchem o Top 10 das melhores estreias digitais da semana. Confira abaixo os destaques das plataformas de assinatura e locad… [+9926 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FRANCE 24 English"
            },
            "author": "FRANCE24",
            "title": "Gwyneth Paltrow takes the stand in skiing trial",
            "description": "The \"Shakespeare in Love\" actress is being sued for damages by retired optometrist Terry Sanderson over a skiing accident seven years ago, which his lawyers blame on Paltrow and say caused him damages worth $3.3 million.\n\nPaltrow has in turn countersued, for …",
            "url": "https://www.france24.com/en/live-news/20230325-gwyneth-paltrow-takes-the-stand-in-skiing-trial",
            "urlToImage": "https://s.france24.com/media/display/49dc479c-caa0-11ed-b138-005056a90284/w:1280/p:16x9/Part-GTY-1249293237-1-1-1.jpg",
            "publishedAt": "2023-03-25T00:02:13Z",
            "content": "Los Angeles (AFP) Actress Gwyneth Paltrow took the stand in her US trial over a skiing accident Friday, telling a Utah courtroom that the man suing her had crashed into her from behind and was at fau… [+3101 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Intel co-founder Gordon Moore dies at 94",
            "description": ":Intel Corp co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age of 94, the company announced.Intel and Moore's family philanthropic foundation said…",
            "url": "https://www.channelnewsasia.com/business/intel-co-founder-gordon-moore-prophet-rise-pc-dies-94-3373411",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--BYNV11Ue--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/one-cms/images/2021-06/business_1.png?itok=rGtz_C8Z",
            "publishedAt": "2023-03-25T00:12:45Z",
            "content": ":Intel Corp co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age of 94, the company anno… [+4279 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Intel co-founder Gordon Moore, prophet of the rise of the PC, dies at 94",
            "description": ":Intel Corp co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age of 94, the company announced.Intel and Moore's family philanthropic foundation said…",
            "url": "https://www.channelnewsasia.com/business/intel-co-founder-gordon-moore-prophet-rise-pc-dies-94-3373411",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--BYNV11Ue--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/one-cms/images/2021-06/business_1.png?itok=rGtz_C8Z",
            "publishedAt": "2023-03-25T00:12:45Z",
            "content": ":Intel Corp co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age of 94, the company anno… [+4279 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky.com"
            },
            "author": "Sky",
            "title": "Five notable moments in Gwyneth Paltrow's ski collision lawsuit testimony",
            "description": "Oscar-winning actress Gwyneth Paltrow is being sued by a retired optometrist who says she crashed into him on a ski slope, leaving him with a number of injuries.",
            "url": "https://news.sky.com/story/gwyneth-paltrows-ski-collision-lawsuit-testimony-five-notable-moments-12842012",
            "urlToImage": "https://e3.365dm.com/23/03/1600x900/skynews-paltrow-sanderson-utah_6099499.jpg?20230325011610",
            "publishedAt": "2023-03-25T00:42:00Z",
            "content": "Oscar-winning actress Gwyneth Paltrow is being sued by a retired optometrist who says she crashed into him on a ski slope, leaving him with a number of injuries.\r\nPaltrow denies this - claiming that … [+2601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pypi.org"
            },
            "author": "sourab@huggingface.co",
            "title": "peft-machinify added to PyPI",
            "description": "Parameter-Efficient Fine-Tuning (PEFT)",
            "url": "https://pypi.org/project/peft-machinify/",
            "urlToImage": "https://pypi.org/static/images/twitter.abaf4b19.webp",
            "publishedAt": "2023-03-25T00:43:06Z",
            "content": "State-of-the-art Parameter-Efficient Fine-Tuning (PEFT) methods\r\nParameter-Efficient Fine-Tuning (PEFT) methods enable efficient adaptation of pre-trained language models (PLMs) to various downstream… [+14986 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pypi.org"
            },
            "author": "transformers@huggingface.co",
            "title": "transformers-machinify added to PyPI",
            "description": "State-of-the-art Machine Learning for JAX, PyTorch and TensorFlow",
            "url": "https://pypi.org/project/transformers-machinify/",
            "urlToImage": "https://pypi.org/static/images/twitter.abaf4b19.webp",
            "publishedAt": "2023-03-25T00:41:38Z",
            "content": "&lt;picture&gt;\r\n &lt;source media=\"(prefers-color-scheme: dark)\" srcset=\"https://huggingface.co/datasets/huggingface/documentation-images/raw/main/transformers-logo-dark.svg\"&gt;\r\n &lt;source media=… [+54534 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techweb.com.cn"
            },
            "author": "故渊",
            "title": "苹果Apple Watch新专利：可连接各种健身器材，提供更详实健身数据",
            "description": "3 月 25 日消息，根据美国商标和专利局（USPTO）公示的最新清单，苹果获得了一项涉及 Apple Watch 的技术专利。苹果希望 Apple Watch 能够和各种健身设备进行交互，从而提供更精准的健身数据。苹果表示传统的数字计步器主要依赖于加速度计来确定用户是否迈出了一步，但手臂的自然摆动也可能让其产生变化，导致步数不够准确。苹果希望 Apple Watch 能够和跑步机等各种健身设备连接，从而提供更准确的健身数据。该方法还可以包括从健身机获得第一机器数据。第一机器数据可以指定健身器的类型。在其中一个示…",
            "url": "http://www.techweb.com.cn/it/2023-03-25/2923433.shtml",
            "urlToImage": "http://upload1.techweb.com.cn/s/120/imgs/2023/0325/1679706592513.jpg",
            "publishedAt": "2023-03-25T01:10:34Z",
            "content": "3 25 USPTO Apple Watch Apple Watch \r\n Apple Watch \r\n Apple Watch"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Trevin Lund, Amy Lamare, Brian Gallagher, Unity Blott",
            "title": "Jon Hamm goes from Mad Men to Mean Girls as he joins Mean Girls musical as sex-ed teacher Coach Carr",
            "description": "Jon Hamm has announced he will be joining the cast of the Mean Girls musical movie, which will be released on Paramount +. The Mad Men star, 52, is set to play the awkward gym teacher, Coach Carr.",
            "url": "https://www.dailymail.co.uk/tvshowbiz/article-11900759/Jon-Hamm-goes-Mad-Men-Mean-Girls-joins-Mean-Girls-musical-sex-ed-teacher-Coach-Carr.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/03/25/00/69093989-0-image-a-13_1679704284651.jpg",
            "publishedAt": "2023-03-25T01:39:40Z",
            "content": "Jon Hamm will be joining the cast of the Mean Girls musical movie, which will be released on Paramount +.\r\nThe Mad Men star, 52, is set to play the role of the incompetent, bumbling sex-ed instructor… [+4058 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PRNewswire"
            },
            "author": null,
            "title": "Vanillin market size is estimated to grow by USD 427.69 million between 2022 and 2027; The growing popularity of ethyl vanillin will drive the growth - Technavio",
            "description": "NEW YORK, March 24, 2023 /PRNewswire/ -- The vanillin market size is forecast to increase by USD 427.69 million from 2022 to 2027, at a CAGR of 11.08%, according to the recent market study by Technavio. The market is driven by the growing popularity of ethyl …",
            "url": "https://www.prnewswire.com/news-releases/vanillin-market-size-is-estimated-to-grow-by-usd-427-69-million-between-2022-and-2027-the-growing-popularity-of-ethyl-vanillin-will-drive-the-growth---technavio-301779781.html",
            "urlToImage": "https://mma.prnewswire.com/media/2039165/market_research_report.jpg?p=facebook",
            "publishedAt": "2023-03-25T01:30:00Z",
            "content": "NEW YORK, March 24, 2023 /PRNewswire/ -- The vanillin market size is forecast to increase by USD 427.69 million from 2022 to 2027, at a CAGR of 11.08%, according to the recent market study by Technav… [+25772 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Independent.ie"
            },
            "author": "Adrian Weckler",
            "title": "Ask Adrian: How can I unlock a dead relative’s phone? And advice on a good mid-price laptop",
            "description": "Question If a close family member dies and all of their key information is on their phone, can I get the phone company to give me the password to unlock it? — Lorraine Doyle",
            "url": "https://www.independent.ie/business/technology/ask-adrian-how-can-i-unlock-a-dead-relatives-phone-and-advice-on-a-good-mid-price-laptop-42401469.html",
            "urlToImage": "https://www.independent.ie/business/technology/3ed49/42401468.ece/AUTOCROP/w1240h700/ir%2010222231",
            "publishedAt": "2023-03-25T02:30:00Z",
            "content": "Question If a close family member dies and all of their key information is on their phone, can I get the phone company to give me the password to unlock it? Lorraine DoyleAnswerMostly, no. Im presumi… [+1898 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New Zealand Herald"
            },
            "author": null,
            "title": "Gwyneth Paltrow gives evidence at Utah Ski Collision trial: ‘You skied directly into my f****** back!’",
            "description": "The actress insists she was not responsible for the 2016 collision at Deer Park Resort.",
            "url": "https://www.nzherald.co.nz/entertainment/gwyneth-paltrow-gives-evidence-at-utah-ski-collision-trial-you-skied-directly-into-my-f-back/KZMLT2DZQRCTJCPNS76NVMTYD4/",
            "urlToImage": "https://www.nzherald.co.nz/resizer/HSmkEJyEFuv4P7eRBE213IjiYeA=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/3KVOEGM5IJGOTOKPRXTNNRSBGE.jpg",
            "publishedAt": "2023-03-25T01:23:44Z",
            "content": "Gwyneth Paltrow testifies during her trial on March 24, 2023. Photo / Getty ImagesGwyneth Paltrow yelled at her alleged ski crash victim: You skied directly into my f****** back! and claimed she init… [+2801 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Harriet Alexander",
            "title": "Gwyneth Paltrow was 'anxious', 'wary' and 'tense' in court, body language expert claims",
            "description": "A body language expert has said Gwyneth Paltrow looked tense and tired at times during her testimony in a case regarding a ski collision in Utah in 2016. At other times she projected authority.",
            "url": "https://www.dailymail.co.uk/news/article-11900757/Gwyneth-Paltrow-anxious-wary-tense-court-body-language-expert-claims.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/03/25/02/69095949-0-image-a-26_1679711778209.jpg",
            "publishedAt": "2023-03-25T02:38:17Z",
            "content": "Gwyneth Paltrow was 'tense' and anxious on the stand on Friday, a body language expert has claimed after analyzing the Oscar-winning actress's performance in her trial over a ski slope collision.\r\nPa… [+4584 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Independent.ie"
            },
            "author": "Josie Ensor",
            "title": "Accuser’s footage of crash with Paltrow now missing, court told",
            "description": "Footage that Gwyneth Paltrow&rsquo;s accuser sent his family shortly after their ski collision which he boasted would make him &ldquo;famous&rdquo; has gone missing, the court has heard.",
            "url": "https://www.independent.ie/world-news/north-america/accusers-footage-of-crash-with-paltrow-now-missing-court-told-42403557.html",
            "urlToImage": "https://www.independent.ie/world-news/north-america/d39fd/42403556.ece/AUTOCROP/w1240h700/H-PALTROW%2038",
            "publishedAt": "2023-03-25T02:30:00Z",
            "content": "Footage that Gwyneth Paltrows accuser sent his family shortly after their ski collision which he boasted would make him famous has gone missing, the court has heard.The Hollywood star and chief execu… [+3266 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techweb.com.cn"
            },
            "author": "潇公子",
            "title": "苹果 CEO 库克关注乡村教育，对中国发展研究基金会捐助增加至 1 亿元人民币",
            "description": "3 月 25 日消息，苹果官方今日宣布对中国发展研究基金会的捐助增加至 1 亿元人民币，以为中国各地的教师和学生创造成长机会。此次 Apple 新增的 5000 万元人民币捐赠将资助为期三年的 “智惠园丁” 项目，着眼于中国欠发达地区的数字化教学，预计将影响超过 12 万名教师和 200 万余名学生。新的捐赠将主要面向小学和初中教师，并为幼儿园和职业教师提供支持。目标是将数字技术更好地融合到课堂教学中。此次捐赠是建立在 Apple 与中国发展研究基金会长期合作的贫困地区儿童发展数字化项目基础之上，该项目自 201…",
            "url": "http://www.techweb.com.cn/it/2023-03-25/2923431.shtml",
            "urlToImage": "http://upload1.techweb.com.cn/s/120/imgs/2023/0325/1679705671789.jpg",
            "publishedAt": "2023-03-25T00:54:46Z",
            "content": "3 25 1 Apple 5000 12 200 \r\n Apple 2018 Apple 2018 2500 11 2021 Apple 2500 \r\nApple iPad MacBook \r\n iPad iPad \r\n iPad\r\n Apple Apple Store Today at Apple \r\n2018 Apple iPad"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Lori Bashian",
            "title": "Bruce Willis' wife Emma says dementia isn’t talked about enough: 'It is so isolating'",
            "description": "Bruce Willis' wife Emma is opening up about how isolating being a caregiver for someone with dementia can be and why she recently asked photographers to leave her husband alone.",
            "url": "https://www.foxnews.com/entertainment/bruce-willis-wife-emma-dementia-isnt-talked-about-enough",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/da070151-Bruce-Willis-Emma.jpg",
            "publishedAt": "2023-03-25T01:50:46Z",
            "content": "Bruce Willis' wife is opening up about her experience caring for someone with dementia. \r\nEmma Heming Willis hosted an Instagram live Friday, during which she spoke with occupational therapist Teepa … [+3248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Famitsu.com"
            },
            "author": "西川くん",
            "title": "3DS、WiiUのニンテンドーeショップが3月28日午前9時に終了。終わる前に知っておきたいことや買っておきたいオススメソフトを紹介",
            "description": "2023年3月28日午前9時にニンテンドー3DSシリーズ、Wii Uのオンラインストア“ニンテンドーeショップ”のサービスが終了を迎える。終了する前に知っておきたいことや、購入しておきたいオススメソフトなどを紹介する。",
            "url": "https://www.famitsu.com/news/202303/25295978.html",
            "urlToImage": "https://www.famitsu.com/images/000/295/978/z_641e079a7b0ec.jpg",
            "publishedAt": "2023-03-25T03:00:00Z",
            "content": "202332893DS3DSWii Ue\r\ne\r\ne\r\ne\r\n3DSWii Ue20228\r\n3DSWii UIDNintendo Switch\r\n(Amazon.co.jp)ID\r\n3DSSD32GB32GBSDNew3DSmicroSDmicroSD3DSmicroSD\r\nWii UUSB2TBUSB\r\ne3289\r\ne\r\n2023323DS 3DS29.com3\r\n3DS100 EDGE8… [+632 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Independent.ie"
            },
            "author": "Richard Curran",
            "title": "Ireland is a different economic beast since the crash but five big factors could pierce our hide",
            "description": "The Irish economy entered the current wave of uncertainty in pretty good shape but the waters are getting choppier.",
            "url": "https://www.independent.ie/opinion/comment/ireland-is-a-different-economic-beast-since-the-crash-but-five-big-factors-could-pierce-our-hide-42403534.html",
            "urlToImage": "https://www.independent.ie/opinion/comment/9713a/42403533.ece/AUTOCROP/w1240h700/keyescartoons602",
            "publishedAt": "2023-03-25T02:30:00Z",
            "content": "The Irish economy entered the current wave of uncertainty in pretty good shape but the waters are getting choppier.Full employment, stronger banks, a tech jobs boom and an exchequer awash with cash h… [+5891 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Cnbc",
            "title": "Intel co-founder Gordon Moore, prophet of the rise of the PC, dies at 94",
            "description": "Intel co-founder Gordon Moore, a pioneer in the semiconductor industry, died Friday at the age of 94, the company announced.",
            "url": "https://www.cnbc.com/2023/03/24/intel-co-founder-gordon-moore-prophet-of-the-rise-of-the-pc-dies-at-94.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/102170260-76837934.jpg?v=1679710544&w=1920&h=1080",
            "publishedAt": "2023-03-25T02:20:24Z",
            "content": "Intel co-founder Gordon Moore, a pioneer in the semiconductor industry whose \"Moore's Law\" predicted a steady rise in computing power for decades, died Friday at the age of 94, the company announced.… [+4665 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hello i ama constructiure");
        this.state = {
            articles: this.articles
        }
    }


    // componentDidMount() {
    //     let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4cbb3918eba84fb0b7d1a5aaf392c774";
    //     let data=  fetch(url);
    //     let parseData =   data.json()
    //     console.log(parseData);
    //     this.setdata({this.articles:parseData.article})
    // }

    render() {
        return (
            <div className="container my-3">
                <h2>News - top headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element) => { return <div className="col-md-4" key={element.url}><NewsItem title={element.title.slice(0, 20)} description={element.description.slice(0, 30)} imageurl={element.urlToImage} newsurl={element.url} /></div> })}

                </div>
            </div>
        )
    }
}

export default News
