import{$n as mm,Er as tw,Fr as vm,Or as ue,Qr as ym,S as Gw,Sr as su,U as Nm,Wt as _V,Y as Ob,Yr as y,Zn as mb,_r as sI,_t as T_,b as GC,bn as fb,cn as ds,d as Dm,ei as zC,fn as e_,fr as qw,mt as T,ni as zm,on as db,or as om,p as EV,qn as lb,rr as oT,vt as Td,wn as gV,xt as Ub}from"./chunk-BvNdw-tD.js";import{h as Uc}from"./chunk-fFpEnBvw.js";import{l as Ai,y as Gs}from"./main-JFYWHEXQ.js";import{f as V,u as T$1,y as y$1}from"./chunk-CUe4qX-k.js";var H=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var J=[`icon`];var K=[`*`];function L(n,i){if(n&1&&ym(0,`span`,1),n&2){let e=lb(2);Ob(e.cn(e.cx(`icon`),e.icon())),vm(`pBind`,e.ptm(`icon`))}}function U(n,i){if(n&1&&qw(0,L,1,3,`span`,0),n&2)Gw(lb().icon()?0:-1)}function W(n,i){if(n&1&&(ds(0,`span`,1),Dm(1,2),su()),n&2){let e=lb();Ob(e.cx(`icon`)),vm(`pBind`,e.ptm(`icon`)),oT(),vm(`ngTemplateOutlet`,e.iconTemplate())}}var X={root:({instance:n})=>{let i=n.severity(),e=n.rounded();return[`p-tag p-component`,{"p-tag-info":i===`info`,"p-tag-success":i===`success`,"p-tag-warn":i===`warn`,"p-tag-danger":i===`danger`,"p-tag-secondary":i===`secondary`,"p-tag-contrast":i===`contrast`,"p-tag-rounded":e}]},icon:`p-tag-icon`,label:`p-tag-label`};var q=(()=>{class n extends Ai{name=`tag`;style=H;classes=X;static ɵfac=(()=>{let e;return function(o){return(e||(e=sI(n)))(o||n)}})();static ɵprov=ue({token:n,factory:n.ɵfac})}return n})();var R=new T(`TAG_INSTANCE`);var Y=(()=>{class n extends T$1{componentName=`Tag`;$pcTag=y(R,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=y(y$1,{self:!0});severity=gV();value=gV();icon=gV();rounded=gV(!1,{transform:_V});iconTemplate=EV(`icon`,{descendants:!1});_componentStyle=y(q);dataP=T_(()=>{let e=this.severity(),t=this.rounded();return this.cn({rounded:t,[e]:e})});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let e;return function(o){return(e||(e=sI(n)))(o||n)}})();static ɵcmp=GC({type:n,selectors:[[`p-tag`]],contentQueries:function(t,o,$){t&1&&Nm($,o.iconTemplate,J,4),t&2&&mb()},hostVars:3,hostBindings:function(t,o){t&2&&(mm(`data-p`,o.dataP()),Ob(o.cx(`root`)))},inputs:{severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[e_([q,{provide:R,useExisting:n},{provide:V,useExisting:n}]),tw([y$1]),om],ngContentSelectors:K,decls:5,vars:5,consts:[[3,`class`,`pBind`],[3,`pBind`],[3,`ngTemplateOutlet`]],template:function(t,o){t&1&&(db(),fb(0),qw(1,U,1,1)(2,W,2,4,`span`,0),ds(3,`span`,1),Ub(4),su()),t&2&&(oT(),Gw(o.iconTemplate()?2:1),oT(2),Ob(o.cx(`label`)),vm(`pBind`,o.ptm(`label`)),oT(),zm(o.value()))},dependencies:[Uc,Gs,y$1],encapsulation:2})}return n})();var mn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=zC({type:n});static ɵinj=Td({imports:[Y,Gs,Gs]})}return n})();export{mn as n,Y as t};