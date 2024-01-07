import React from "react";

import routes from "../../views";
import { Route, Routes, Navigate } from "react-router-dom";
const Main = (props) => {
  // 生成路由匹配规则，当url和Route.path匹配成功时，显示当前配对成功的Route.component
  // v6版本前，凡是被 Route 组件直接包裹的React组件中，其props上都有路由相关的API
  // v6版本前，Switch => Route
  // Switch作用：用于把 Route 数组组件包裹起来，当Url变化时，从上到下进行匹配，匹配成功即终止
  // <Switch>
  //     <Route path="/a"></Route>
  //     <Route path="/a/"></Route>
  // </Switch>
  // v6版本，Routes => Route，且Route移除了exact，exact在v5是作为精准匹配，在Navlink中也有添加

  // 在生成 Route 数组时，其外层不能包裹任何HTML节点，它的直接父组件只能是 Routes
  //   const createRoutes = () => {
  //     let res = [];
  //     // 将routes扁平化
  //     routes.map((ele) => {
  //       res.push(
  //         /* 传递组件作为React元素 */
  //         // <Route key={ele.id} path={ele.path} element={ele.component} />
  //         /* 传递函数或者类 */
  //         <Route key={ele.id} path={ele.path} Component={ele.component} />
  //       );
  //       if (ele.children) {
  //         ele.children.map((ele) => {
  //           res.push(
  //             <Route key={ele.id} path={ele.path} Component={ele.component} />
  //           );
  //         });
  //       }
  //     });
  //     console.log('rees', res);
  //     return res;
  //   };
  const createRoutes = (routes) => {
    return routes
      .map((item) => {
        if (item.children) {
          return [
            ...createRoutes(item.children),
            <Route key={item.id} path={item.path} Component={item.component} />,
          ];
        }
        return (
          <Route key={item.id} path={item.path} Component={item.component} />
        );
      })
      .flat();
  };

  // const v2 = (routes) => {
  //   let res = []
  //   const serChildren = arr => {
  //     arr.map(item => {
  //       res.push(
  //         <Route key={item.id} path={item.path} Component={item.component} />
  //       )
  //       if (item.children) serChildren(item.children)
  //     })
  //   }
  //   routes.map(item => {
  //     if (item.children) {
  //       serChildren(item.children)
  //     }
  //   })
  //   return res;
  // }

  return (
    <div className="re-main">
      <Routes>
        {createRoutes(routes)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Main

