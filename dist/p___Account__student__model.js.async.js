(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{xOdZ:function(e,a,t){"use strict";t.r(a);var s=t("p0pE"),n=t.n(s),r=t("d6i3"),c=t.n(r),u=t("dCQc");a["default"]={namespace:"student",state:{data:[{key:"1",name:"John Brown",academy:"88%",class:32,number:32}]},effects:{fetchStudentData:c.a.mark(function e(a,t){var s,n,r,l;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=a.payload,n=t.call,r=t.put,e.next=4,n(u["n"],s);case 4:return l=e.sent,e.next=7,r({type:"setStudentData",payload:l});case 7:case"end":return e.stop()}},e)}),deleteStudentUser:c.a.mark(function e(a,t){var s,n,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=a.payload,n=t.call,r=t.put,e.next=4,n(u["f"],s);case 4:return e.next=6,r({type:"fetchStudentData",payload:{stu_name:s.stu_name,class_grade:s.class_grade}});case 6:case"end":return e.stop()}},e)}),updateStudentUser:c.a.mark(function e(a,t){var s,n,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=a.payload,n=t.call,r=t.put,e.next=4,n(u["z"],{id:s.id,stu_name:s.stu_name,academy:s.academy,class_grade:s.class_grade,stu_num:s.stu_num,spell:s.spell,classSpell:s.classSpell});case 4:return e.next=6,r({type:"fetchStudentData",payload:{stu_name:s.selectName,class_grade:s.selectClassGrade}});case 6:case"end":return e.stop()}},e)}),createStudentUser:c.a.mark(function e(a,t){var s,n,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=a.payload,n=t.call,r=t.put,e.next=4,n(u["c"],{stu_name:s.stu_name,academy:s.academy,class_grade:s.class_grade,stu_num:s.stu_num,spell:s.spell,classSpell:s.classSpell});case 4:return e.next=6,r({type:"fetchStudentData",payload:{stu_name:s.selectName,class_grade:s.selectClassGrade}});case 6:case"end":return e.stop()}},e)})},reducers:{setStudentData:function(e,a){var t=a.payload;return n()({},e,{data:t})}}}}}]);