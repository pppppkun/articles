(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{185:function(_,v,e){"use strict";e.r(v);var i=e(0),t=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"_1-mysql-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql-架构","aria-hidden":"true"}},[_._v("#")]),_._v(" 1. MySQL 架构")]),_._v(" "),e("p",[_._v("MySQL 由两部分组成：")]),_._v(" "),e("ol",[e("li",[_._v("提供服务的 Server 部分，它除了提供核心服务，还提供函数库、跨存储引擎的功能（存储过程、触发器、视图等）")]),_._v(" "),e("li",[_._v("存储数据的引擎部分：默认为 InnoDB 引擎（MySQL 5.5.5 后）。引擎层使用的是插件框架，除了 InnoDB，你还可以使用 MyISAM、Memory 等引擎。"),e("strong",[_._v("Server 层通过存储引擎提供的接口来访问引擎")]),_._v("。")])]),_._v(" "),e("p",[_._v("Server部分执行一条 MySQL 语句的流程如下：")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("连接 MySQL Server，由连接器进行权限检查。并从权限表中查询连接具备的所有权限，供后续执行器使用；当你在连接过程中修改权限，并不会立即生效，新权限在重连后生效。")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("长连接的问题：每个连接会分配一个内存池（"),e("strong",[_._v("存执行过程中临时使用的内存")]),_._v("），如果连接长时间不关闭，内存会一致增长，如果超出系统内存，操作系统会因为 OOM 而杀掉进程，从外部看上去就像 MySQL 重启了一样。建议使用长连接，而解决长连接的方式是 ① 定期的重连 ② 在 MySQL 5.7 及之后，使用 "),e("code",[_._v("mysql_reset_connection")]),_._v(" 重新初始化连接。")])]),_._v(" "),e("li",[e("p",[_._v("短连接的问题：连接过程是复杂的，频繁的短连接会消耗资源。")])]),_._v(" "),e("li",[e("p",[_._v("不考虑网络问题，连接器的 Keepalive 时间为 8 小时，"),e("code",[_._v("wait_timeout")]),_._v(" 参数控制。")])])])]),_._v(" "),e("li",[e("p",[_._v("通过权限检查后，会进入查询缓存，如果缓存中有该语句（key），则直接返回缓存中数据（value），否则进入后续步骤")]),_._v(" "),e("p",[e("em",[_._v("一般不建议使用查询缓存，因为一旦有更新发生，查询缓存就会清空，除非你的数据是静态的、非更新数据")])]),_._v(" "),e("p",[_._v("禁用查询缓存的方法：参数 "),e("code",[_._v("query_cache_type")]),_._v(" 设置为 DEMAND")])]),_._v(" "),e("li",[e("p",[_._v("进入分析器：根据词法分析，识别出语句中的各个词的含义；根据语法分析，分析这条语句的语法是否合法")])]),_._v(" "),e("li",[e("p",[_._v("进入优化器：在一个表有多个索引的情况下，优化器会分析该语句是否使用索引，以及使用哪个索引；对于 join 语句，优化器会根据执行效率，选择先查询哪个表，再到另一个表中匹配，还是相反。")])]),_._v(" "),e("li",[e("p",[_._v("进入执行器：首先判断连接是否具有执行权限。执行器会根据优化结果，调用引擎的接口进行查询，例如全表扫描的步骤如下")]),_._v(" "),e("ol",[e("li",[_._v("调用查询表第一行的接口，判断返回值是否符合条件，符合就将结果插入结果集")]),_._v(" "),e("li",[_._v("调用查询表的下一行的接口，判断是否符合查询条件")]),_._v(" "),e("li",[_._v("判断是否是结尾，否则循环第 2 步")]),_._v(" "),e("li",[_._v("将结果集返回给客户端")])]),_._v(" "),e("p",[_._v("在索引上查询的步骤也差不多，只不过是把调用第一行/下一行的接口换为调用第一个/下一个符合条件的接口。")]),_._v(" "),e("p",[_._v("执行器会把每次调用接口后扫描的行数累加，以 "),e("code",[_._v("rows_examined")]),_._v(" 值存储在慢查询语句中。")])])]),_._v(" "),e("p",[e("em",[_._v("本文是学习《MySQL实战45讲》的笔记")])])])}],!1,null,null,null);t.options.__file="1.MySQL架构.md";v.default=t.exports}}]);