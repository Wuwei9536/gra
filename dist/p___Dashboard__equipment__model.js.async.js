(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{WdJ4:function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),p=a.n(n),u=a("p0pE"),r=a.n(u),s=a("dCQc");t["default"]={namespace:"equipment",state:{data:[]},effects:{fetchEquipmentData:p.a.mark(function e(t,a){var n,u,c,i,o;return p.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,u=a.call,c=a.put,i=(new Date).toLocaleDateString().replace(/\//g,"-"),e.next=6,u(s["k"],r()({today:i},n));case 6:return o=e.sent,e.next=9,c({type:"setEquipmentData",payload:o});case 9:case"end":return e.stop()}},e)}),createEquipment:p.a.mark(function e(t,a){var n,u,r;return p.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,u=a.call,r=a.put,e.next=4,u(s["b"],{equip_name:n.equipmentName,ip:n.ip,node_type:n.nodeType,cpu_model:n.cpuType,core_num:n.cpuNum,storage:n.storage,disk:n.disk,isagent:n.agent});case 4:return e.next=6,r({type:"fetchEquipmentData",payload:{equip_name:n.name,status:n.status}});case 6:case"end":return e.stop()}},e)}),deleteEquipment:p.a.mark(function e(t,a){var n,u,r;return p.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,u=a.call,r=a.put,e.next=4,u(s["e"],{id:n.id});case 4:return e.next=6,r({type:"fetchEquipmentData",payload:{equip_name:n.equip_name,status:n.status}});case 6:case"end":return e.stop()}},e)}),updateEquipment:p.a.mark(function e(t,a){var n,u,r;return p.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,u=a.call,r=a.put,e.next=4,u(s["y"],{id:n.id,equip_name:n.equipmentName,ip:n.ip,node_type:n.nodeType,cpu_model:n.cpuType,core_num:n.cpuNum,storage:n.storage,disk:n.disk,isagent:n.agent});case 4:return e.next=6,r({type:"fetchEquipmentData",payload:{equip_name:n.name,status:n.status}});case 6:case"end":return e.stop()}},e)})},reducers:{setEquipmentData:function(e,t){var a=t.payload;return r()({},e,{data:a})}}}}}]);