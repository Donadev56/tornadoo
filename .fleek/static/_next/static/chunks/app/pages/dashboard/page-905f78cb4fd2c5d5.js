(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{6516:(e,s,a)=>{Promise.resolve().then(a.bind(a,4997))},3534:(e,s,a)=>{"use strict";a.d(s,{f:()=>N});var t=a(5155),i=a(1377),r=a(1493),l=a(5976),n=a(5531),c=a.n(n),o=a(835),d=a(8843),A=a(4832),_=a(7339),h=a(2981),m=a(3157),u=a(4194),g=a(2552),x=a(1671),p=a(3302),v=a(2115),b=a(6876),f=a(6046);let j=[{items:[{icon:o.A,label:"Dashboard"},{icon:i.A,path:b.B.profile,label:"Profile"},{icon:d.A,path:b.B.partners,label:"Partners"},{icon:A.A,path:b.B.team,label:"Team"}]},{items:[{icon:_.A,label:"Earnings"},{icon:h.A,label:"Airdrop"},{icon:_.A,label:"Billionaire Programme"},{icon:m.A,label:"Billionaire Salary"}]},{items:[{icon:u.A,label:"Blockchain"},{icon:g.A,label:"Exchange"},{icon:x.A,label:"Support"},{icon:p.A,path:b.B.home,label:"Logout"}]}],N=e=>{let{isSidebarOpen:s,setIsSidebarOpen:a}=e,[i,n]=(0,v.useState)(""),[o,d]=(0,v.useState)(j),A=(0,f.useRouter)(),_=e=>{A.push(e)};return(0,v.useEffect)(()=>{let e=()=>{window.screen.width>728&&a(!0)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[a]),(0,v.useEffect)(()=>{if(""===i.trim())d(j);else{let e=i.toLowerCase();d(j.map(s=>({items:s.items.filter(s=>s.label.toLowerCase().includes(e))})).filter(e=>e.items.length>0))}},[i]),(0,t.jsxs)("div",{style:{transform:"".concat(s?"translateX(0px)":"translateX(-100%)")},className:c().sidebar,children:[(0,t.jsx)("div",{className:c().closeButton,onClick:()=>a(!1),children:(0,t.jsx)(r.A,{color:"grey",size:24})}),(0,t.jsxs)("div",{className:c().searchContainer,children:[(0,t.jsx)(l.A,{className:c().searchIcon}),(0,t.jsx)("input",{className:c().inputSearch,placeholder:"Search...",value:i,onChange:e=>n(e.target.value)})]}),(0,t.jsx)("div",{className:c().sidebarMenu,children:o.map((e,s)=>(0,t.jsx)("div",{className:c().divider,children:e.items.map((e,s)=>(0,t.jsxs)("div",{onClick:()=>_(e.path||b.B.dashboard),className:c().sidebarItem,children:[(0,t.jsx)(e.icon,{size:24}),(0,t.jsx)("span",{children:e.label})]},s))},s))})]})}},24:(e,s,a)=>{"use strict";a.d(s,{u:()=>A});var t=a(5155),i=a(2115),r=a(5865),l=a.n(r);let n={src:"/_next/static/media/logo.5a85a3a5.png",height:1600,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXFHFwCaNgCIOACzUwagYSF5JwDYbR2uXA6DPgpuPRCxbBnEahTPqY7CcECoglKTUxM1R1JrMgN3W09/QwfQrCE8AAAADnRSTlMAoBzZbeNvCWI7bPtK+nNf/B0AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAzSURBVHicY2BAAHZOLhZOBgYGDlZuIQEeEIOfl4+ZnYGBgYlVUJgNrIZFhBGqmAMkAQcAKZwBClWC46wAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};var c=a(5435),o=a(1661),d=a(5565);let A=e=>{let{isSidebarOpen:s,setIsSidebarOpen:a}=e,[r,A]=(0,i.useState)("");return(0,i.useEffect)(()=>{(async()=>{try{let e=await (0,o.W)();e.success&&A(e.response)}catch(e){console.error("Failed to fetch user address:",e)}})()},[]),(0,t.jsxs)("section",{className:l().top,children:[s&&(0,t.jsx)("div",{onClick:()=>{a(!1)},className:l().overlay}),(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("div",{className:l().left,children:(0,t.jsx)("div",{className:l().logo,children:(0,t.jsx)(d.default,{alt:"",width:"50",src:n})})}),(0,t.jsxs)("div",{className:l().right,children:[(0,t.jsxs)("div",{className:l().address,children:[r.slice(0,4),"...",r.slice(r.length-4,r.length)]}),(0,t.jsx)(c.A,{size:40,className:l().menuElement,onClick:()=>a(!s)})]})]})]})}},4997:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>es});var t=a(5155),i=a(2115),r=a(2114),l=a(1556),n=a(49),c=a.n(n);let o={src:"/_next/static/media/blur_orange2.6445df39.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEX3VwD/bQD6awD6cAP6bwT/J8xHAAAABXRSTlMBGw9NOWmdAeIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicY2BkYWZmZmFkYmBgYmQEUXgAAARiAB0e4KoTAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},d={src:"/_next/static/media/green_blur.3b7a9a3b.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEVMaXEAdUwAdk8AcVIAdlMAeFN7wf91AAAABnRSTlMAChgrRGhS36oqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgZWFiZAABFmYoA0YzwGgGGA0ABFgAISCE9/YAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},A={src:"/_next/static/media/blue_blur.ec0959a9.png",height:224,width:420,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUoUv85ZP8zY/88Z/87aP8+af8+aP8/Z/8Qy+CPAAAACHRSTlMBHAw1SGN1jGdHFBsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAiSURBVHicHcaxDQAACAIwEND/PzY6tQBQJOuVpTcdX9wzWQPxAFI8ghUBAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};var _=a(2110);let h=()=>{let e=e=>_.oR.warn(e),s=s=>{e("".concat(s," is not available yet ."))};return(0,t.jsxs)("section",{className:c().matrixSection,children:[(0,t.jsx)(_.N9,{theme:"dark",style:{borderRadius:"10px"}}),(0,t.jsxs)("div",{className:c().matrixTitle,children:["Tornadoo Programs"," ",(0,t.jsxs)("span",{className:c().info,children:["info ",(0,t.jsx)(r.A,{className:c().questionMark})]})]}),(0,t.jsxs)("div",{className:c().matrixContainer,children:[(0,t.jsxs)("div",{style:{backgroundImage:"url(".concat(o,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:c().matrix,children:[(0,t.jsxs)("div",{className:c().matrixHead,children:[(0,t.jsx)("div",{className:c().titleLeft,children:"F CLUB"}),(0,t.jsx)("div",{className:c().totalGain,children:"0 USDT"})]}),(0,t.jsx)("div",{className:c().grids,children:Array.from({length:9},(e,s)=>(0,t.jsx)("div",{className:c().grid},s))}),(0,t.jsxs)("button",{onClick:()=>s("F CLUB"),className:c().previewBtn,children:["Preview ",(0,t.jsx)(l.A,{})]})]}),(0,t.jsxs)("div",{style:{backgroundImage:"url(".concat(d,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:c().matrix,children:[(0,t.jsxs)("div",{className:c().matrixHead,children:[(0,t.jsx)("div",{className:c().titleLeft,children:"X CLUB"}),(0,t.jsx)("div",{className:c().totalGain,children:"0 USDT"})]}),(0,t.jsx)("div",{className:c().grids,children:Array.from({length:9},(e,s)=>(0,t.jsx)("div",{className:c().grid},s))}),(0,t.jsxs)("button",{onClick:()=>s("X CLUB"),className:"".concat(c().xClub," ").concat(c().previewBtn),children:["Preview ",(0,t.jsx)(l.A,{})]})]}),(0,t.jsxs)("div",{style:{backgroundImage:"url(".concat(A,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:c().matrix,children:[(0,t.jsxs)("div",{className:c().matrixHead,children:[(0,t.jsx)("div",{className:c().titleLeft,children:"GLOBAL SLOT"}),(0,t.jsx)("div",{className:c().totalGain,children:"0 USDT"})]}),(0,t.jsx)("div",{className:c().grids,children:Array.from({length:9},(e,s)=>(0,t.jsx)("div",{className:c().grid},s))}),(0,t.jsxs)("button",{onClick:()=>s("GLOBAL SLOT"),className:"".concat(c().global," ").concat(c().previewBtn),children:["Preview ",(0,t.jsx)(l.A,{})]})]})]})]})};var m=a(5669),u=a.n(m),g=a(8756),x=a(2478),p=a(7363),v=a(3013),b=a(1661),f=a(3567),j=a(9967),N=a(7257),w=a.n(N);let C={src:"/_next/static/media/activity_white.f571b9f7.png",height:30,width:30,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX///////////////////////////////////////////////////////////////////////8BOg0gAAAAEXRSTlMCzi9LOyK1GV7iEXiHopdywLEZhAgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVHicBcGHAcAgDMAwh5DF7v/PVgKI2gbYiPrEsBZRVYfeWxN5D1XN7e70zLuOT0beufYJGDpXBj86XAHQeV4/2gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},S={src:"/_next/static/media/activity_green.9c1698cd.webp",height:30,width:30,blurDataURL:"data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAQLBu6kKAAHHRYI9+nNJiAqIA3y39aQODgzIN/NyL1DSE1gn7K3sTdWYHKNn6l4EFhqeIiVkh0AEkx1gGMbAABWUDggLgAAANABAJ0BKggACAACQDgloAJ0ugH4AAOwAP7u6d/+YJX6EPDb/7dn9Wh9Wh/QwAA=",blurWidth:8,blurHeight:8};var B=a(5565);let y=()=>{let[e,s]=(0,i.useState)(null),[a,r]=(0,i.useState)(null);(0,i.useEffect)(()=>{l()},[]);let l=async()=>{try{let e=await (0,b.W)();if(!e.success)return;let a=await (0,f.nd)(e.response),t=await (0,f.Zq)(e.response);a.success?"string"!=typeof a.response&&(console.log(a.response),s(a.response)):console.error("No data found for direct team",a),t.success?"string"!=typeof t.response&&(console.log(t.response),r(t.response)):console.error("No data found for direct 24 hours joining team",t)}catch(e){console.error("Error fetching user team data:",e)}};return(0,t.jsxs)("section",{className:w().statsContainer,children:[(0,t.jsxs)("div",{className:w().middle,children:[(0,t.jsx)("div",{className:w().bar}),(0,t.jsxs)("div",{className:"".concat(w().partners," ").concat(w().teamData),children:[(0,t.jsx)("div",{className:w().gridContainer}),(0,t.jsx)(I,{title:"Partners"}),(0,t.jsx)("div",{className:w().number,children:Number(null==e?void 0:e.directDownlinesCount)||0}),(0,t.jsxs)("div",{className:w().activity,children:[(0,t.jsxs)("div",{style:{color:"".concat((null==a?void 0:a.direct)?"rgb(0, 255, 132)":"white")},className:w().leftActivity,children:[(0,t.jsx)(v.A,{className:w().arrow}),(null==a?void 0:a.direct)||0]}),(0,t.jsx)("div",{className:w().rightActivity,children:(0,t.jsx)(B.default,{alt:"",width:20,src:(null==a?void 0:a.direct)?S:C})})]})]}),(0,t.jsxs)("div",{className:"".concat(w().team," ").concat(w().teamData),children:[(0,t.jsx)(I,{title:"Team"}),(0,t.jsx)("div",{className:w().number,children:Number(null==e?void 0:e.teamSize)||0}),(0,t.jsxs)("div",{className:w().activity,children:[(0,t.jsxs)("div",{style:{color:"".concat((null==a?void 0:a.total)?"rgb(0, 255, 132)":"white")},className:w().leftActivity,children:[(0,t.jsx)(v.A,{className:w().arrow}),(null==a?void 0:a.total)||0]}),(0,t.jsx)("div",{className:w().rightActivity,children:(0,t.jsx)(B.default,{alt:"",width:20,src:(null==a?void 0:a.total)?S:C})})]})]})]}),(0,t.jsx)("div",{className:w().bottom})]})},E=()=>"",I=e=>{let{title:s}=e;return(0,t.jsxs)("div",{className:w().title,children:[s," ",(0,t.jsx)(E,{})]})};var k=a(7174),R=a(6876);let U=()=>{let[e,s]=(0,i.useState)(null),[a,l]=(0,i.useState)(!0),[n,c]=(0,i.useState)(null),[o,d]=(0,i.useState)(!0),[A,_]=(0,i.useState)("");async function h(e,s,a){if(navigator.share)try{await navigator.share({title:e,text:s,url:a}),console.log("Shared successful.")}catch(e){console.error("An error occured :",e)}else console.warn("The api is not available")}(0,i.useEffect)(()=>{(async()=>{try{let e=await (0,b.W)();e.success?(_("".concat(location.host).concat(R.B.register,"/?ref=").concat(e.response)),await m(e.response)):console.error("Failed to fetch user address:",e.response)}catch(e){console.error("Error fetching user:",e)}})()},[]),(0,i.useEffect)(()=>{o&&setTimeout(()=>{d(!1)},5e3)},[o]),(0,i.useEffect)(()=>{(async()=>{try{let e=await (0,b.W)();if(e.success){let a=e.response,t=await (0,f.gL)(a);if(t.success&&t.response){let e="string"!=typeof t.response?t.response:null;s(e),d(!1)}else console.error("Failed to fetch user data:",t.response),d(!1)}else console.error("Failed to fetch user address:",e.response),d(!1)}catch(e){console.error("Error fetching user:",e),d(!1)}})()},[]);let m=async e=>{try{let s=localStorage.getItem("username/".concat(e)),a="",t=await (0,k.g)(e);if(t.success)a=t.response;else{console.error("Failed to fetch user image:",t.response);return}let i={name:s,image:a};d(!1),c(i)}catch(e){return console.error("Error fetching user profile data:",e),null}};return(0,t.jsxs)("section",{className:u().profile,children:[(0,t.jsxs)("div",{className:u().container,children:[(0,t.jsxs)("div",{className:u().leftSection,children:[(0,t.jsxs)("div",{className:u().top,children:[(0,t.jsxs)("div",{className:u().right,children:[(0,t.jsxs)("div",{className:u().name,children:[(null==n?void 0:n.name)||e&&e.name,"  "]}),(0,t.jsxs)("div",{className:u().id,children:["ID  ",e&&Number(e.countId)]}),(0,t.jsxs)("div",{onClick:()=>l(!a),className:u().showLess,children:[a?"less":"more","  ",a?(0,t.jsx)(p.A,{}):(0,t.jsx)(x.A,{className:u().showLessIcon})]})]}),(0,t.jsx)("div",{className:u().leftTop,children:(0,t.jsxs)("div",{className:u().profileImage,children:[(0,t.jsx)("div",{className:u().avatar_gradient}),(0,t.jsx)(B.default,{className:u().avatarSrc,width:50,height:50,src:(null==n?void 0:n.image)||g.A,alt:""})]})})]}),a&&(0,t.jsx)("div",{className:u().bottom,children:(0,t.jsxs)("div",{className:u().invited,children:["Invited on ",e&&new Date(1e3*Number(e.joiningDate)).toLocaleString(),(0,t.jsxs)("span",{className:u().sponsorID,children:[" ID ",e&&Number(e.uplineCountID)||0]})]})}),(0,t.jsx)("section",{className:u().referralLink,children:(0,t.jsxs)("div",{className:u().containerRef,children:[(0,t.jsxs)("div",{className:u().topRef,children:[(0,t.jsxs)("div",{className:u().title,children:["My personal link"," ",(0,t.jsx)(r.A,{size:20,className:u().questionMark})]}),(0,t.jsxs)("div",{className:u().link,children:[A.slice(0,18),"..."]})]}),(0,t.jsxs)("div",{className:u().buttons,children:[(0,t.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(A)},className:u().copy,children:"Copy "}),(0,t.jsx)("button",{onClick:()=>{h("Join me in Tornadoo !","Use this link to join me in Tornadoo smart contract and strat earning !",A)},className:u().share,children:"Share"})]})]})})]}),(0,t.jsx)("div",{className:u().rightSection,children:(0,t.jsx)("div",{className:w().top,children:(0,t.jsxs)("div",{className:w().profits,children:[(0,t.jsxs)("div",{className:u().profitTitle,children:["Profits ",(0,t.jsx)(E,{})]}),(0,t.jsx)("div",{className:w().gains,children:(0,t.jsxs)("div",{className:w().amount,children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"left",alignItems:"center",gap:"10px"},className:w().profitNumber,children:["0 USDT ",(0,t.jsx)(j.zb$,{className:w().iconTether})]}),(0,t.jsxs)("div",{className:w().daily,children:["0 ",(0,t.jsx)(v.A,{className:w().arrow})]})]})})]})})})]}),o&&(0,t.jsx)("div",{className:u().loaderContainer,children:(0,t.jsx)("div",{className:u().loader})})]})};var T=a(5585),L=a(1017),D=a(6656),M=a(6672),H=a(117),V=a.n(H),P=a(6046);let W=[{title:" school",headElement:(0,t.jsx)(T.A,{className:V().icon}),description:"Learn Tornadoo",path:R.B.profile},{title:"Notification",headElement:(0,t.jsx)(L.A,{className:V().icon}),description:"Notification center",path:null},{title:"Message",headElement:(0,t.jsx)(D.A,{className:V().icon}),description:"message your freinds ",path:null},{title:"Social",headElement:(0,t.jsx)(M.A,{className:V().icon}),description:"Invite new friends",path:null}],G=()=>{let e=(0,P.useRouter)(),s=s=>{e.push(s)},a=e=>_.oR.warn(e),i=e=>{a("".concat(e," is not available yet ."))};return(0,t.jsxs)("section",{className:V().cardContainer,children:[(0,t.jsx)("div",{className:V().cards,children:W.map((e,a)=>(0,t.jsx)("div",{onClick:()=>{e.path?s(e.path):i(e.title)},className:V().card,children:(0,t.jsx)("div",{className:V().cardhead,children:(0,t.jsx)("div",{className:V().containerHead,children:e.headElement})})},a))}),(0,t.jsx)(_.N9,{theme:"dark",style:{borderRadius:"10px"}})]})};var Y=a(1599),O=a(1562),z=a(750),Q=a(2393),F=a.n(Q);let X=()=>{let[e,s]=(0,i.useState)(0),[a,r]=(0,i.useState)(null);(0,i.useEffect)(()=>{l(),n()},[]);let l=async()=>{try{let e=await (0,f.Zd)();e.success&&"string"!=typeof e.response&&s(e.response)}catch(e){console.error(e)}},n=async()=>{try{let e=await (0,f.yD)();e.success?"string"!=typeof e.response&&(console.log(e.response),r(e.response)):console.error("No data found for global events",e)}catch(e){console.error(e)}},c=e=>{window.open("https://opbnb.bscscan.com/tx/"+e)};return(0,t.jsxs)("section",{className:F().statsContainer,children:[(0,t.jsx)("p",{children:"Statistics"}),(0,t.jsxs)("div",{className:F().globalCards,children:[(0,t.jsxs)("div",{className:F().statsCard,children:[(0,t.jsxs)("div",{className:F().statBlock,children:[(0,t.jsxs)("div",{className:F().statHeader,children:[(0,t.jsx)("span",{children:"Users"}),(0,t.jsx)(Y.A,{className:F().infoIcon})]}),(0,t.jsx)("div",{className:F().statValue,children:Number(e)||0}),(0,t.jsx)("div",{className:F().statChange,children:"0"})]}),(0,t.jsxs)("div",{className:F().statBlock,children:[(0,t.jsxs)("div",{className:F().statHeader,children:[(0,t.jsx)("span",{children:"Total Invest"}),(0,t.jsx)(Y.A,{className:F().infoIcon})]}),(0,t.jsxs)("div",{className:F().statValue,children:["0 ",(0,t.jsx)("span",{className:F().unit,children:"USDT"})]}),(0,t.jsx)("div",{className:F().statChange,children:"0 USDT"})]})]}),(0,t.jsxs)("section",{className:F().activityContainer,children:[(0,t.jsx)("div",{className:F().recentActivitiesTitle,children:(0,t.jsx)("p",{children:"Recent Activity"})}),(0,t.jsx)("div",{className:F().activities,children:null==a?void 0:a.map((e,s)=>(0,t.jsxs)("div",{onClick:()=>c(e.transactionHash||""),className:F().activityCard,children:[(0,t.jsxs)("div",{className:F().activityHeader,children:[(0,t.jsx)(O.A,{className:F().icon}),(0,t.jsx)("a",{href:"#",className:F().link,children:"new user joined"}),(0,t.jsx)(z.A,{className:F().externalIcon})]}),(0,t.jsxs)("div",{className:F().timeAgo,children:[String(e.returnValues.userId)&&String(e.returnValues.userAddress).slice(0,17),"..."]})]},s))})]})]})]})};var J=a(3534),Z=a(24),K=a(7088),q=a.n(K),$=a(5323);let ee=()=>{let[e,s]=(0,i.useState)(!1),a=(0,$.$)();return(0,i.useEffect)(()=>{a.account&&console.log("User connected: ",a.account)},[a]),(0,t.jsxs)("div",{className:q().dash,children:[(0,t.jsx)("div",{className:q().left,children:(0,t.jsx)(J.f,{setIsSidebarOpen:s,isSidebarOpen:e})}),(0,t.jsxs)("div",{className:q().right,children:[(0,t.jsx)(Z.u,{isSidebarOpen:e,setIsSidebarOpen:s}),(0,t.jsx)(U,{}),(0,t.jsx)(y,{}),(0,t.jsx)(G,{}),(0,t.jsx)(h,{}),(0,t.jsx)(X,{})]})]})};function es(){return(0,t.jsx)($.j,{children:(0,t.jsx)(ee,{})})}},6876:(e,s,a)=>{"use strict";a.d(s,{B:()=>t});let t={register:"/pages/register",login:"/login",dashboard:"/pages/dashboard",profile:"/pages/profile",partners:"/pages/partners",team:"/pages/teamList",home:"/"}},1661:(e,s,a)=>{"use strict";a.d(s,{W:()=>t});let t=async()=>{try{let e=window.ethereum;e||console.log("No Ethereum browser detected!");let s=[];console.log("Metamask detected ...");try{s=await e.request({method:"eth_requestAccounts"})}catch(e){console.log(e)}let a=localStorage.getItem("savedAddress"),t=s[0];if(t)return console.log("Using connected address:",a),{success:!0,response:t};if(a)return console.log("Using saved address:",a),{success:!0,response:a};return{success:!1,response:"User address not found"}}catch(e){return console.error("Error fetching user address:",e),{success:!1,response:"Error: ".concat(e||"Failed to get user address")}}}},5323:(e,s,a)=>{"use strict";a.d(s,{$:()=>c,j:()=>n});var t=a(5155),i=a(2115),r=a(1054);let l=(0,i.createContext)(void 0),n=e=>{let{children:s}=e,[a,n]=(0,i.useState)(null),[c,o]=(0,i.useState)(null),d=null;d=window.ethereum;let A=async()=>{if(d)try{let e=new r.Ay$(d);await d.request({method:"eth_requestAccounts"});let s=await e.eth.getAccounts();n(e),o(s[0]),localStorage.setItem("isWalletConnected","true")}catch(e){console.error("Erreur de connexion au wallet :",e)}else alert("Veuillez installer MetaMask pour utiliser cette fonctionnalit\xe9.")};return(0,i.useEffect)(()=>{"true"===localStorage.getItem("isWalletConnected")&&A()},[]),(0,t.jsx)(l.Provider,{value:{web3:a,account:c,connectWallet:A,disconnectWallet:()=>{n(null),o(null),localStorage.removeItem("isWalletConnected")}},children:s})},c=()=>{let e=(0,i.useContext)(l);if(!e)throw Error("useWeb3 doit \xeatre utilis\xe9 dans un Web3Provider");return e}},2393:e=>{e.exports={statsContainer:"global_statsContainer__14O0t",statsCard:"global_statsCard__rKL76",statBlock:"global_statBlock__iyauR",statHeader:"global_statHeader__nk2CU",infoIcon:"global_infoIcon__Gb_JO",statValue:"global_statValue__boh19",statChange:"global_statChange__Z3HSP",unit:"global_unit__yQ1JJ",divider:"global_divider__1_xY6",activityContainer:"global_activityContainer__FbhmB",activities:"global_activities__LRQYz",activityCard:"global_activityCard__gp_g_",activityHeader:"global_activityHeader___0e3Y",icon:"global_icon__6P0ne",link:"global_link__Naqqu",externalIcon:"global_externalIcon__rxYGJ",details:"global_details__2iGac",multiplier:"global_multiplier__9LKOz",timeAgo:"global_timeAgo__4E8NY",globalCards:"global_globalCards__HrO6b"}},49:e=>{e.exports={matrixSection:"matrix_matrixSection__Ceuj3",matrixTitle:"matrix_matrixTitle__xg0es",info:"matrix_info__l9AID",questionMark:"matrix_questionMark__rh2TD",matrixContainer:"matrix_matrixContainer__pj6v_",matrix:"matrix_matrix__tcgLw",matrixHead:"matrix_matrixHead__gIXtR",previewBtn:"matrix_previewBtn__NPbPU",grid:"matrix_grid__ccQfh",grids:"matrix_grids__W1U4M",xClub:"matrix_xClub__ZJoaz",global:"matrix_global__XxR6p"}},5669:e=>{e.exports={avatar_gradient:"profile_avatar_gradient__HRlHf",animatedCercle:"profile_animatedCercle__C9BGf",profile:"profile_profile__Cb4TW",container:"profile_container__RIo_G",top:"profile_top__iZwb7",leftTop:"profile_leftTop__SyTvS",avatarSrc:"profile_avatarSrc__vIfks",loaderSrc:"profile_loaderSrc__tHwyH",profileImage:"profile_profileImage__P1FRM",name:"profile_name___gVmv",id:"profile_id__X_WOQ",showLess:"profile_showLess__hLtwG",right:"profile_right__ozw08",bottom:"profile_bottom__iAjV0",sponsorID:"profile_sponsorID__lMjuJ",referralLink:"profile_referralLink__E2xP8",containerRef:"profile_containerRef__lxm_b",buttons:"profile_buttons__m5UtF",copy:"profile_copy__jfvl1",share:"profile_share__3GQAa",topRef:"profile_topRef__YJawf",title:"profile_title__zeqtz",questionMark:"profile_questionMark__xX70c",link:"profile_link__dkr5G",rightSection:"profile_rightSection__AP_ho",leftSection:"profile_leftSection___vpYL",profitTitle:"profile_profitTitle__k3_n_",shareIcon:"profile_shareIcon__JqSnW",loaderContainer:"profile_loaderContainer__xHIwe",loader:"profile_loader__XrKUC",animloader:"profile_animloader__DiFM3"}},117:e=>{e.exports={cardContainer:"pubcard_cardContainer__ObRje",cards:"pubcard_cards__WcOZq",card:"pubcard_card__bxI_L",cardhead:"pubcard_cardhead__odMnQ",icon:"pubcard_icon__YGvN7",title:"pubcard_title__Nx9Gq",desc:"pubcard_desc__RWTh6",bg:"pubcard_bg__8ABlT",containerHead:"pubcard_containerHead__zt_bh"}},7257:e=>{e.exports={statsContainer:"stats_statsContainer__rKnPV",top:"stats_top__2D_sP",profits:"stats_profits__4oQnx",bottom:"stats_bottom__7LlaZ",title:"stats_title__9c5LR",shareIcon:"stats_shareIcon__3b5MC",gains:"stats_gains__uKPjw",amount:"stats_amount__Ho9qe",number:"stats_number__qlMbT",profitNumber:"stats_profitNumber__fufDo",daily:"stats_daily__qLWXU",arrow:"stats_arrow__kd8uy",middle:"stats_middle__7hY_i",teamData:"stats_teamData__W9kvq",activity:"stats_activity__e1rbk",leftActivity:"stats_leftActivity__Ds7hd",internalImage:"stats_internalImage__9tM_9",internalImageratio:"stats_internalImageratio__zeCWx",ratio:"stats_ratio__45T3b",right:"stats_right__H_TVR",iconTether:"stats_iconTether___jI_V"}},5531:e=>{e.exports={sidebar:"side_sidebar__dZY8F",closeButton:"side_closeButton__7zPE2",sidebarMenu:"side_sidebarMenu__AJ47i",sidebarItem:"side_sidebarItem__F2wwO",inputSearch:"side_inputSearch__DCa2N",search:"side_search__ERXCI",searchContainer:"side_searchContainer__UfIDu",searchIcon:"side_searchIcon__adtgn",overlay:"side_overlay__dV_sr",divider:"side_divider__flYFw"}},5865:e=>{e.exports={top:"top_top__H_VPs",container:"top_container__tABoJ",address:"top_address__LtgwQ",menuElement:"top_menuElement__ySS3w",right:"top_right__1sWRd"}},7088:e=>{e.exports={dash:"dash_dash__8uCOs",right:"dash_right__OLm26",left:"dash_left__j2bd4"}},7174:(e,s,a)=>{"use strict";a.d(s,{g:()=>i});var t=a(5828);let i=(0,t.createServerReference)("7f802a883db2e2e821f03872b8e6e35b0fecbf36c7",t.callServer,void 0,t.findSourceMapURL,"GetImage")},8756:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t={src:"/_next/static/media/p1.2331fbba.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEX/0KG/glvrroA+Hg9vOB5oOTYzDwz/2KkjBg19QyGSYz3BbDKLWTLTo4KqemWBRzfks4+XZ1XyxJfKp4S7oFGonFmV20TqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nB2KWQ7AIBCFUEdfx6V773/VRgkJPwBagoJZmI1eq0eh8bX2PkJnd+9jjoe53YK9pFQuyNsi/zd8AcUUzv9PAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},e=>{var s=s=>e(e.s=s);e.O(0,[390,915,362,54,92,110,590,165,567,441,517,358],()=>s(6516)),_N_E=e.O()}]);