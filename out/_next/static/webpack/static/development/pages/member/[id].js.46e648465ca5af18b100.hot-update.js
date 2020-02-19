webpackHotUpdate("static/development/pages/member/[id].js",{

/***/ "./pages/member/[id].js":
/*!******************************!*\
  !*** ./pages/member/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MemberData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MemberData */ "./components/MemberData.js");
var _jsxFileName = "/Users/kevin/Documents/Projects/next-test/pages/member/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // class Member extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       member: {},
//     };
//   }
//   async componentDidMount() {
//     const res = await fetch(`https://api.propublica.org/congress/v1/members/${this.props.id}.json`, {
//       method: 'GET',
//       headers: {
//         'X-API-Key': 'Q38PfmdlAd0KohAiBlCESyIgGhpMpJ5bmoQFK8s3'
//       }
//     });
//     const member = await res.json();
//     this.setState({
//       isLoading: false,
//       member: member.results[0]
//     })
//   }
//   render() {
//     const { isLoading, member } = this.state
//     return (
//       <Layout>
//         <h1>{`${member.first_name} ${member.last_name}`}</h1>
//       </Layout>
//     );
//   }
// }
// export default Member;

var Member = function Member(_ref) {
  var member = _ref.member;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_MemberData__WEBPACK_IMPORTED_MODULE_4__["default"], {
    member: member.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
}; // Member.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.propublica.org/congress/v1/members/${id}.json`, {
//     method: 'GET',
//     headers: {
//       'X-API-Key': 'Q38PfmdlAd0KohAiBlCESyIgGhpMpJ5bmoQFK8s3'
//     }
//   });
//   const member = await res.json();
//   return { member: member.results[0] };
// };


/* harmony default export */ __webpack_exports__["default"] = (Member);

/***/ })

})
//# sourceMappingURL=[id].js.46e648465ca5af18b100.hot-update.js.map