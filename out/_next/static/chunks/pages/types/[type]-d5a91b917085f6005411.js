_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"20a2":function(e,a,n){e.exports=n("nOHt")},"6xyR":function(e,a,n){"use strict";var t=n("RAs/"),r=n("hVfy"),c=n("TSYQ"),o=n.n(c),i=n("q1tI"),s=n.n(i),m=n("vUet"),d=n("YdCC"),l=function(e){return s.a.forwardRef((function(a,n){return s.a.createElement("div",Object(t.a)({},a,{ref:n,className:o()(a.className,e)}))}))},j=n("Wzyw"),u=s.a.forwardRef((function(e,a){var n=e.bsPrefix,c=e.className,i=e.variant,d=e.as,l=void 0===d?"img":d,j=Object(r.a)(e,["bsPrefix","className","variant","as"]),u=Object(m.a)(n,"card-img");return s.a.createElement(l,Object(t.a)({ref:a,className:o()(i?u+"-"+i:u,c)},j))}));u.displayName="CardImg",u.defaultProps={variant:null};var b=u,h=l("h5"),p=l("h6"),f=Object(d.a)("card-body"),O=Object(d.a)("card-title",{Component:h}),x=Object(d.a)("card-subtitle",{Component:p}),g=Object(d.a)("card-link",{Component:"a"}),_=Object(d.a)("card-text",{Component:"p"}),v=Object(d.a)("card-header"),k=Object(d.a)("card-footer"),y=Object(d.a)("card-img-overlay"),N=s.a.forwardRef((function(e,a){var n=e.bsPrefix,c=e.className,d=e.bg,l=e.text,u=e.border,b=e.body,h=e.children,p=e.as,O=void 0===p?"div":p,x=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(m.a)(n,"card"),_=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return s.a.createElement(j.a.Provider,{value:_},s.a.createElement(O,Object(t.a)({ref:a},x,{className:o()(c,g,d&&"bg-"+d,l&&"text-"+l,u&&"border-"+u)}),b?s.a.createElement(f,null,h):h))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=b,N.Title=O,N.Subtitle=x,N.Body=f,N.Link=g,N.Text=_,N.Header=v,N.Footer=k,N.ImgOverlay=y;a.a=N},"7vrA":function(e,a,n){"use strict";var t=n("RAs/"),r=n("hVfy"),c=n("TSYQ"),o=n.n(c),i=n("q1tI"),s=n.n(i),m=n("vUet"),d=s.a.forwardRef((function(e,a){var n=e.bsPrefix,c=e.fluid,i=e.as,d=void 0===i?"div":i,l=e.className,j=Object(r.a)(e,["bsPrefix","fluid","as","className"]),u=Object(m.a)(n,"container"),b="string"===typeof c?"-"+c:"-fluid";return s.a.createElement(d,Object(t.a)({ref:a},j,{className:o()(l,c?""+u+b:u)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},"Ny8+":function(e,a,n){"use strict";var t=n("YdCC");a.a=Object(t.a)("card-columns")},U9OM:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/types/[type]",function(){return n("mqqd")}])},mqqd:function(e,a,n){"use strict";n.r(a),n.d(a,"__N_SSG",(function(){return j})),n.d(a,"default",(function(){return u}));var t=n("nKUr"),r=n("Ny8+"),c=n("6xyR"),o=n("7vrA"),i=n("cWnB"),s=n("q1tI"),m=n("YFqc"),d=n.n(m),l=n("20a2"),j=!0;function u(e){var a=e.type,n=Object(s.useState)(!1),m=n[0],j=n[1],u=Object(s.useState)(!1),b=u[0],h=u[1],p=Object(l.useRouter)(),f=function(e){p.push("/moves/[move]","/moves/".concat(e.name))},O=function(e){p.push("/pokedex/[name]","/pokedex/".concat(e.name))},x=Object(s.useState)(Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(r.a,{children:a.moves.slice(0,6).map((function(e){return Object(t.jsx)(c.a,{id:"pkmn-card",onClick:function(){return f(e)},children:Object(t.jsx)(c.a.Body,{children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})},e.name)}))})})),g=x[0],_=x[1],v=Object(s.useState)(Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(r.a,{children:a.pokemon.slice(0,6).map((function(e){return Object(t.jsx)(c.a,{id:"pkmn-card",onClick:function(){return O(e.pokemon)},children:Object(t.jsx)(c.a.Body,{children:e.pokemon.name.charAt(0).toUpperCase()+e.pokemon.name.slice(1)})},e.pokemon.name)}))})})),k=v[0],y=v[1];return Object(t.jsx)(o.a,{className:"my-3",children:Object(t.jsx)(c.a,{children:Object(t.jsxs)("div",{className:"d-flex flex-column",children:[Object(t.jsxs)(c.a.Body,{children:[Object(t.jsx)(c.a.Title,{children:Object(t.jsx)("h1",{children:"Information"})}),Object(t.jsxs)("p",{children:["Name: ",a.name.charAt(0).toUpperCase()+a.name.slice(1)]}),Object(t.jsxs)("p",{children:["Id: ",a.id]}),Object(t.jsx)("p",{children:"Damage Relations: "}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:["Double damage taken from:"," ",a.damage_relations.double_damage_from.length>0?a.damage_relations.double_damage_from.map((function(e){return e.name.charAt(0).toUpperCase()+e.name.slice(1)+" "})):"None"]}),Object(t.jsxs)("li",{children:["Double damage dealt to:"," ",a.damage_relations.double_damage_to.length>0?a.damage_relations.double_damage_to.map((function(e){return e.name.charAt(0).toUpperCase()+e.name.slice(1)+" "})):"None"]}),Object(t.jsxs)("li",{children:["Half damage taken from:"," ",a.damage_relations.half_damage_from.length>0?a.damage_relations.half_damage_from.map((function(e){return e.name.charAt(0).toUpperCase()+e.name.slice(1)+" "})):"None"]}),Object(t.jsxs)("li",{children:["Half damage dealt to:"," ",a.damage_relations.half_damage_to.length>0?a.damage_relations.half_damage_to.map((function(e){return e.name.charAt(0).toUpperCase()+e.name.slice(1)+" "})):"None"]}),Object(t.jsxs)("li",{children:["No damage taken from:"," ",a.damage_relations.no_damage_from.length>0?a.damage_relations.no_damage_from.map((function(e){return e.name.charAt(0).toUpperCase()+e.name.slice(1)+" "})):"None"]}),Object(t.jsxs)("li",{children:["No damage dealt to:"," ",a.damage_relations.no_damage_to.length>0?a.damage_relations.no_damage_to.map((function(e){return e.name.charAt(0).toUpperCase()+e.name.slice(1)+" "})):"None"]})]}),a.moves.length>0?Object(t.jsxs)("div",{className:"d-flex flex-row align-items-center mt-3",style:{width:"100%"},children:[Object(t.jsx)("p",{children:"Moves with this Type:"}),Object(t.jsx)(i.a,{variant:"primary",onClick:function(){return m?(_(Object(t.jsx)(r.a,{children:a.moves.slice(0,6).map((function(e){return Object(t.jsx)(c.a,{id:"pkmn-card",onClick:function(){return f(e)},children:Object(t.jsx)(c.a.Body,{children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})},e.name)}))})),void j(!1)):(_(Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(r.a,{children:a.moves.map((function(e){return Object(t.jsx)(c.a,{id:"pkmn-card",onClick:function(){return f(e)},children:Object(t.jsx)(c.a.Body,{children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})},e.name)}))})})),void j(!0))},className:"mb-4",style:{order:2,marginLeft:"auto"},size:"sm",children:m?"Show Less Moves":"Show More Moves"})]}):Object(t.jsx)("p",{children:"Moves with this Type: Unkown"}),g,a.pokemon.length>0?Object(t.jsxs)("div",{className:"d-flex flex-row align-items-center mt-3",style:{width:"100%"},children:[Object(t.jsx)("p",{children:"Pokemon with this Type:"}),Object(t.jsx)(i.a,{variant:"primary",onClick:function(){return b?(y(Object(t.jsx)(r.a,{children:a.pokemon.slice(0,6).map((function(e){return Object(t.jsx)(c.a,{id:"pkmn-card",onClick:function(){return O(e.pokemon)},children:Object(t.jsx)(c.a.Body,{children:e.pokemon.name.charAt(0).toUpperCase()+e.pokemon.name.slice(1)})},e.pokemon.name)}))})),void h(!1)):(y(Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(r.a,{children:a.pokemon.map((function(e){return Object(t.jsx)(c.a,{id:"pkmn-card",onClick:function(){return O(e.pokemon)},children:Object(t.jsx)(c.a.Body,{children:e.pokemon.name.charAt(0).toUpperCase()+e.pokemon.name.slice(1)})},e.pokemon.name)}))})})),void h(!0))},className:"mb-4",style:{order:2,marginLeft:"auto"},size:"sm",children:b?"Show Less Pokemon":"Show More Pokemon"})]}):Object(t.jsx)("p",{children:"Pokemon with this type: Unkown"}),k]}),Object(t.jsx)(d.a,{href:"/types",children:Object(t.jsx)(i.a,{className:"mx-3 mb-4",variant:"primary",children:"Go back"})})]})})})}}},[["U9OM",0,1,2,3]]]);