(()=>{const n=document.querySelector(".cart-item-total-price-container"),t=document.querySelector(".cart-main-item"),e=document.querySelector(".nav-display-cart"),i=document.querySelector(".item-cart-container");let c=JSON.parse(sessionStorage.getItem("itemCart"))||[];function s(){if(0!==c.length){console.log(c);let e=c.map((function(n){let t=itemData.filter((function(t){return t.id===n.id}))[0];return`\n                <div class="cart-itemWrapper" id=product-id-${t.id}>\n                        <div class="left-section">\n                            <img\n                            class="cart-img"\n                            src="${t.img}"\n                            />\n                        </div>\n\n                        <div class="right-section">\n                                <div class="item-info">\n                                    <h4>${t.name}</h4>\n                                    <h4>${a(t.price)} 원</h4>\n                                </div>\n                                <div class="item-desc">${t.desc}</div>\n                                <div class="item-count">\n                                    <span onclick="decrement('${t.id}')"  class="count-btn">-</span>\n                                    <span id = '${t.id}'> ${n.countItem}</span>\n                                    <span onclick="increment('${t.id}','${t.name}','${n.price}')" class="count-btn">+</span>\n                                </div>\n                        </div>\n                </div>            \n                `})).join("");t.innerHTML=e;let i='  <div class="cart-item-total-price"><h3>영수증</h3>'+c.map((function(n){let t=n.countItem*n.price;return`\n            \n            <div class="receiptWrapper">\n                <div class="recipetItemsInfo">${n.name} * <span class='cartCountItem'>${n.countItem} </span> </div>\n                <div>=</div>\n                <div class="reciptItemTotal">${a(t)} <span class='unit'>원</span></div>\n            </div>\n            `})).join("")+`\n                <div class="receiptTotalContainer">\n                    <div class="recipetItemsInfo">총금액</div>\n             \n    <div class="reciptItemsTotal">${a(c.reduce((function(n,t){return n+t.countItem*t.price}),0))} <span class='totalUnit'>원</span></div>\n    \n                </div>\n            </div>\n                `;n.innerHTML=i}else{t.innerHTML="",n.innerHTML="";const e=document.createElement("div");e.classList="displayEmpty",e.textContent="장바구니가 비어있습니다.",i.appendChild(e)}}function a(n){return n.toLocaleString()}window.addEventListener("DOMContentLoaded",(function(){s(),function(){let n=c.reduce((function(n,t){return n+t.countItem}),0);e.textContent=n}()}))})();