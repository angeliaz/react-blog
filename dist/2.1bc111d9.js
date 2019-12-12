(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/views/Counter/index.js":
/*!************************************!*\
  !*** ./src/views/Counter/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/counter */ "./src/redux/actions/counter.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u5F53\u524D\u8BA1\u6570\u4E3A", this.props.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.increment();
        }
      }, "\u81EA\u589E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.decrement();
        }
      }, "\u81EA\u51CF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.reset();
        }
      }, "\u91CD\u7F6E"));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // connect主要有两个参数，一个mapStateToProps,就是把redux的state，转为组件的Props，还有一个参数是mapDispatchToprops,把发射actions的方法，转为Props属性函数


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref) {
  var counter = _ref.counter;
  return counter;
}, function (dispatch) {
  return {
    increment: function increment() {
      dispatch(Object(actions_counter__WEBPACK_IMPORTED_MODULE_2__["increment"])());
    },
    decrement: function decrement() {
      dispatch(Object(actions_counter__WEBPACK_IMPORTED_MODULE_2__["decrement"])());
    },
    reset: function reset() {
      dispatch(Object(actions_counter__WEBPACK_IMPORTED_MODULE_2__["reset"])());
    }
  };
})(Counter));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQ291bnRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb3VudGVyIiwicHJvcHMiLCJjb3VudCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsInJlc2V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiY291bnRlciIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQTs7QUFDUCxhQUNFLHdFQUNFLDBHQUFXLEtBQUtDLEtBQUwsQ0FBV0MsS0FBdEIsQ0FERixFQUVFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU0sS0FBSSxDQUFDRCxLQUFMLENBQVdFLFNBQVgsRUFBTjtBQUFBO0FBQWpCLHdCQUZGLEVBSUU7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxLQUFJLENBQUNGLEtBQUwsQ0FBV0csU0FBWCxFQUFOO0FBQUE7QUFBakIsd0JBSkYsRUFNRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNLEtBQUksQ0FBQ0gsS0FBTCxDQUFXSSxLQUFYLEVBQU47QUFBQTtBQUFqQix3QkFORixDQURGO0FBV0Q7Ozs7RUFibUJDLDRDQUFLLENBQUNDLFMsR0FnQjVCOzs7QUFDZUMsMEhBQU8sQ0FBQztBQUFBLE1BQUVDLE9BQUYsUUFBRUEsT0FBRjtBQUFBLFNBQWVBLE9BQWY7QUFBQSxDQUFELEVBQXlCLFVBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQzFEUCxhQUFTLEVBQUUscUJBQU07QUFDZk8sY0FBUSxDQUFDUCxpRUFBUyxFQUFWLENBQVI7QUFDRCxLQUh5RDtBQUkxREMsYUFBUyxFQUFFLHFCQUFNO0FBQ2ZNLGNBQVEsQ0FBQ04saUVBQVMsRUFBVixDQUFSO0FBQ0QsS0FOeUQ7QUFPMURDLFNBQUssRUFBRSxpQkFBTTtBQUNYSyxjQUFRLENBQUNMLDZEQUFLLEVBQU4sQ0FBUjtBQUNEO0FBVHlELEdBQUw7QUFBQSxDQUFqQyxDQUFQLENBVVhMLE9BVlcsQ0FBZixFIiwiZmlsZSI6IjIuMWJjMTExZDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgcmVzZXQgfSBmcm9tICdhY3Rpb25zL2NvdW50ZXInXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+5b2T5YmN6K6h5pWw5Li6e3RoaXMucHJvcHMuY291bnR9PC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5pbmNyZW1lbnQoKX0+6Ieq5aKeXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVjcmVtZW50KCl9PuiHquWHj1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlc2V0KCl9PumHjee9rlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBjb25uZWN05Li76KaB5pyJ5Lik5Liq5Y+C5pWw77yM5LiA5LiqbWFwU3RhdGVUb1Byb3BzLOWwseaYr+aKinJlZHV455qEc3RhdGXvvIzovazkuLrnu4Tku7bnmoRQcm9wc++8jOi/mOacieS4gOS4quWPguaVsOaYr21hcERpc3BhdGNoVG9wcm9wcyzmiorlj5HlsIRhY3Rpb25z55qE5pa55rOV77yM6L2s5Li6UHJvcHPlsZ7mgKflh73mlbBcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHtjb3VudGVyfSkgPT4gY291bnRlciwgZGlzcGF0Y2ggPT4gKHtcbiAgaW5jcmVtZW50OiAoKSA9PiB7XG4gICAgZGlzcGF0Y2goaW5jcmVtZW50KCkpXG4gIH0sXG4gIGRlY3JlbWVudDogKCkgPT4ge1xuICAgIGRpc3BhdGNoKGRlY3JlbWVudCgpKVxuICB9LFxuICByZXNldDogKCkgPT4ge1xuICAgIGRpc3BhdGNoKHJlc2V0KCkpXG4gIH1cbn0pKShDb3VudGVyKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==