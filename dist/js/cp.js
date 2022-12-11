/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['title', 'action', 'blueprint', 'meta', 'values'],
  methods: {
    onSaved: function onSaved() {
      setTimeout(function () {
        return window.location.href = "/cp/jobboard/jobs";
      }, 500);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobListing.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobListing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_statamic_cms_resources_js_components_Listing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../vendor/statamic/cms/resources/js/components/Listing */ "../../../vendor/statamic/cms/resources/js/components/Listing.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_vendor_statamic_cms_resources_js_components_Listing__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      listingKey: "jobs",
      requestUrl: cp_url("jobboard/api/jobs"),
      currentSite: this.site,
      initialSite: this.site,
      columns: this.columns
    };
  },
  watch: {
    activeFilters: {
      deep: true,
      handler: function handler(filters) {
        this.currentSite = filters.site ? filters.site.site : null;
      }
    },
    site: function site(_site) {
      this.currentSite = _site;
    },
    currentSite: function currentSite(site) {
      this.setSiteFilter(site);
      this.$emit('site-changed', site);
    }
  },
  methods: {
    setSiteFilter: function setSiteFilter(site) {
      this.filterChanged({
        handle: 'site',
        values: {
          site: site
        }
      });
    },
    removeRow: function removeRow(row) {
      var id = row.id;
      var i = _.indexOf(this.items, _.findWhere(this.items, {
        id: id
      }));
      this.items.splice(i, 1);
      if (this.items.length === 0) location.reload();
      var self = this;
      Object.keys(this.$refs).forEach(function (key) {
        if (key.includes('deleter_') && self.$refs[key] !== undefined) {
          self.$refs[key].cancel();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!../../../vendor/statamic/cms/resources/js/components/Listing.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!../../../vendor/statamic/cms/resources/js/components/Listing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_list_HasActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-list/HasActions */ "../../../vendor/statamic/cms/resources/js/components/data-list/HasActions.js");
/* harmony import */ var _data_list_HasFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-list/HasFilters */ "../../../vendor/statamic/cms/resources/js/components/data-list/HasFilters.js");
/* harmony import */ var _data_list_HasPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-list/HasPagination */ "../../../vendor/statamic/cms/resources/js/components/data-list/HasPagination.js");
/* harmony import */ var _data_list_HasPreferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-list/HasPreferences */ "../../../vendor/statamic/cms/resources/js/components/data-list/HasPreferences.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_data_list_HasActions__WEBPACK_IMPORTED_MODULE_0__["default"], _data_list_HasFilters__WEBPACK_IMPORTED_MODULE_1__["default"], _data_list_HasPagination__WEBPACK_IMPORTED_MODULE_2__["default"], _data_list_HasPreferences__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    initialSortColumn: String,
    initialSortDirection: String,
    initialColumns: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    filters: Array,
    actionUrl: String
  },
  data: function data() {
    return {
      source: null,
      initializing: true,
      loading: true,
      items: [],
      columns: this.initialColumns,
      visibleColumns: this.initialColumns.filter(function (column) {
        return column.visible;
      }),
      sortColumn: this.initialSortColumn,
      sortDirection: this.initialSortDirection,
      meta: null
    };
  },
  computed: {
    parameters: function parameters() {
      return Object.assign({
        sort: this.sortColumn,
        order: this.sortDirection,
        page: this.page,
        perPage: this.perPage,
        search: this.searchQuery,
        filters: this.activeFilterParameters,
        columns: this.visibleColumns.map(function (column) {
          return column.field;
        }).join(',')
      }, this.additionalParameters);
    },
    activeFilterParameters: function activeFilterParameters() {
      return utf8btoa(JSON.stringify(this.activeFilters));
    },
    additionalParameters: function additionalParameters() {
      return {};
    },
    shouldRequestFirstPage: function shouldRequestFirstPage() {
      if (this.page > 1 && this.items.length === 0) {
        this.page = 1;
        return true;
      }
      return false;
    }
  },
  created: function created() {
    this.autoApplyFilters(this.filters);
    this.request();
  },
  watch: {
    parameters: {
      deep: true,
      handler: function handler(after, before) {
        // A change to the search query would trigger both watchers.
        // We only want the searchQuery one to kick in.
        if (before.search !== after.search) return;
        if (JSON.stringify(before) === JSON.stringify(after)) return;
        this.request();
      }
    },
    loading: {
      immediate: true,
      handler: function handler(loading) {
        this.$progress.loading(this.listingKey, loading);
      }
    },
    searchQuery: function searchQuery(query) {
      this.sortColumn = null;
      this.sortDirection = null;
      this.resetPage();
      this.request();
    }
  },
  methods: {
    request: function request() {
      var _this = this;
      if (!this.requestUrl) {
        this.loading = false;
        return;
      }
      this.loading = true;
      if (this.source) this.source.cancel();
      this.source = this.$axios.CancelToken.source();
      this.$axios.get(this.requestUrl, {
        params: this.parameters,
        cancelToken: this.source.token
      }).then(function (response) {
        _this.columns = response.data.meta.columns;
        _this.activeFilterBadges = _objectSpread({}, response.data.meta.activeFilterBadges);
        _this.items = Object.values(response.data.data);
        _this.meta = response.data.meta;
        if (_this.shouldRequestFirstPage) return _this.request();
        _this.loading = false;
        _this.initializing = false;
        _this.afterRequestCompleted();
      })["catch"](function (e) {
        if (_this.$axios.isCancel(e)) return;
        _this.loading = false;
        _this.initializing = false;
        _this.$toast.error(e.response ? e.response.data.message : __('Something went wrong'), {
          duration: null
        });
      });
    },
    afterRequestCompleted: function afterRequestCompleted(response) {
      //
    },
    sorted: function sorted(column, direction) {
      this.sortColumn = column;
      this.sortDirection = direction;
    },
    removeRow: function removeRow(row) {
      var id = row.id;
      var i = _.indexOf(this.rows, _.findWhere(this.rows, {
        id: id
      }));
      this.rows.splice(i, 1);
      if (this.rows.length === 0) location.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobCreate.vue?vue&type=template&id=0dfd1cbe&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobCreate.vue?vue&type=template&id=0dfd1cbe&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("publish-form", {
    attrs: {
      title: _vm.title,
      action: _vm.action,
      blueprint: _vm.blueprint,
      meta: _vm.meta,
      values: _vm.values
    },
    on: {
      saved: _vm.onSaved
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobListing.vue?vue&type=template&id=15ec6d9c&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobListing.vue?vue&type=template&id=15ec6d9c& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.initializing ? _c("div", {
    staticClass: "card loading"
  }, [_c("loading-graphic")], 1) : _vm._e(), _vm._v(" "), !_vm.initializing ? _c("data-list", {
    staticClass: "mb-4",
    attrs: {
      "visible-columns": _vm.columns,
      columns: _vm.columns,
      rows: _vm.items,
      sort: false,
      "sort-column": _vm.sortColumn,
      "sort-direction": _vm.sortDirection
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var hasSelections = _ref.hasSelections;
        return _c("div", {}, [_c("div", {
          staticClass: "card p-0 relative"
        }, [_c("data-list-filter-presets", {
          ref: "presets",
          attrs: {
            "active-preset": _vm.activePreset,
            "preferences-prefix": _vm.preferencesPrefix
          },
          on: {
            selected: _vm.selectPreset,
            reset: _vm.filtersReset
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "data-list-header"
        }, [_c("data-list-filters", {
          attrs: {
            filters: _vm.filters,
            "active-preset": _vm.activePreset,
            "active-preset-payload": _vm.activePresetPayload,
            "active-filters": _vm.activeFilters,
            "active-filter-badges": _vm.activeFilterBadges,
            "active-count": _vm.activeFilterCount,
            "search-query": _vm.searchQuery,
            "saves-presets": true,
            "preferences-prefix": _vm.preferencesPrefix
          },
          on: {
            "filter-changed": _vm.filterChanged,
            "search-changed": _vm.searchChanged,
            saved: function saved($event) {
              return _vm.$refs.presets.setPreset($event);
            },
            deleted: function deleted($event) {
              return _vm.$refs.presets.refreshPresets();
            },
            "restore-preset": function restorePreset($event) {
              return _vm.$refs.presets.viewPreset($event);
            },
            reset: _vm.filtersReset
          }
        })], 1), _vm._v(" "), _c("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.items.length === 0,
            expression: "items.length === 0"
          }],
          staticClass: "p-3 text-center text-grey-50",
          domProps: {
            textContent: _vm._s(_vm.__("No results"))
          }
        }), _vm._v(" "), _c("data-list-table", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.items.length,
            expression: "items.length"
          }],
          attrs: {
            "allow-bulk-actions": false,
            loading: _vm.loading,
            reorderable: false,
            sortable: true,
            "toggle-selection-on-row-click": false,
            "allow-column-picker": true,
            "column-preferences-key": _vm.preferencesKey("columns")
          },
          on: {
            sorted: _vm.sorted
          },
          scopedSlots: _vm._u([{
            key: "cell-enabled",
            fn: function fn(_ref2) {
              var redirect = _ref2.row;
              return [redirect.enabled ? _c("div", {
                staticClass: "bg-green block h-3 w-2 mx-auto rounded-full"
              }) : _c("div", {
                staticClass: "bg-red block h-3 w-2 mx-auto rounded-full"
              })];
            }
          }, {
            key: "cell-source",
            fn: function fn(_ref3) {
              var redirect = _ref3.row;
              return [_c("a", {
                staticStyle: {
                  "word-break": "break-all"
                },
                attrs: {
                  href: _vm.cp_url("redirect/redirects/" + redirect.id)
                }
              }, [_vm._v(_vm._s(redirect.source))])];
            }
          }, {
            key: "actions",
            fn: function fn(_ref4) {
              var redirect = _ref4.row,
                index = _ref4.index;
              return [_c("dropdown-list", [_c("dropdown-item", {
                attrs: {
                  text: _vm.__("Edit"),
                  redirect: _vm.cp_url("redirect/redirects/" + redirect.id)
                }
              }), _vm._v(" "), _c("dropdown-item", {
                staticClass: "warning",
                attrs: {
                  text: _vm.__("Delete")
                },
                on: {
                  click: function click($event) {
                    _vm.$refs["deleter_".concat(redirect.id)].confirm();
                  }
                }
              }, [_c("resource-deleter", {
                ref: "deleter_".concat(redirect.id),
                attrs: {
                  resource: redirect,
                  reload: true
                },
                on: {
                  deleted: function deleted($event) {
                    return _vm.removeRow(redirect.id);
                  }
                }
              })], 1)], 1)];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("data-list-pagination", {
          staticClass: "mt-3",
          attrs: {
            "resource-meta": _vm.meta,
            "per-page": _vm.perPage
          },
          on: {
            "page-selected": _vm.selectPage,
            "per-page-changed": _vm.changePerPage
          }
        })], 1);
      }
    }], null, false, 2549411429)
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "../../../vendor/statamic/cms/resources/js/components/data-list/HasActions.js":
/*!************************************************************************************!*\
  !*** ../../../vendor/statamic/cms/resources/js/components/data-list/HasActions.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    actionStarted: function actionStarted() {
      this.loading = true;
    },
    actionCompleted: function actionCompleted() {
      var successful = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.loading = false;
      if (successful === false) return;
      this.$events.$emit('clear-selections');
      this.$events.$emit('reset-action-modals');
      if (response.message !== false) {
        this.$toast.success(response.message || __("Action completed"));
      }
      this.afterActionSuccessfullyCompleted();
    },
    afterActionSuccessfullyCompleted: function afterActionSuccessfullyCompleted() {
      this.request();
    }
  }
});

/***/ }),

/***/ "../../../vendor/statamic/cms/resources/js/components/data-list/HasFilters.js":
/*!************************************************************************************!*\
  !*** ../../../vendor/statamic/cms/resources/js/components/data-list/HasFilters.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activePreset: null,
      activePresetPayload: {},
      searchQuery: '',
      activeFilters: {},
      activeFilterBadges: {}
    };
  },
  computed: {
    activeFilterCount: function activeFilterCount() {
      var count = Object.keys(this.activeFilters).length;
      if (this.activeFilters.hasOwnProperty('fields')) {
        count = count + Object.keys(this.activeFilters.fields).filter(function (field) {
          return field != 'badge';
        }).length - 1;
      }
      return count;
    },
    hasActiveFilters: function hasActiveFilters() {
      return this.activeFilterCount > 0;
    }
  },
  methods: {
    searchChanged: function searchChanged(query) {
      this.searchQuery = query;
    },
    hasFields: function hasFields(values) {
      for (var fieldHandle in values) {
        if (values[fieldHandle]) return true;
      }
      return false;
    },
    filterChanged: function filterChanged(_ref) {
      var handle = _ref.handle,
        values = _ref.values;
      var unselectAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (values && this.hasFields(values)) {
        Vue.set(this.activeFilters, handle, values);
      } else {
        Vue["delete"](this.activeFilters, handle);
      }
      if (unselectAll) this.unselectAllItems();
    },
    filtersChanged: function filtersChanged(filters) {
      this.activeFilters = {};
      for (var handle in filters) {
        var values = filters[handle];
        this.filterChanged({
          handle: handle,
          values: values
        }, false);
      }
      this.unselectAllItems();
    },
    filtersReset: function filtersReset() {
      this.activePreset = null;
      this.activePresetPayload = {};
      this.searchQuery = '';
      this.activeFilters = {};
      this.activeFilterBadges = {};
    },
    unselectAllItems: function unselectAllItems() {
      if (this.$refs.dataList) {
        this.$refs.dataList.clearSelections();
      }
    },
    selectPreset: function selectPreset(handle, preset) {
      this.activePreset = handle;
      this.activePresetPayload = preset;
      this.searchQuery = preset.query;
      this.filtersChanged(preset.filters);
    },
    autoApplyFilters: function autoApplyFilters(filters) {
      if (!filters) return;
      var values = {};
      filters.filter(function (filter) {
        return !_.isEmpty(filter.auto_apply);
      }).forEach(function (filter) {
        values[filter.handle] = filter.auto_apply;
      });
      this.activeFilters = values;
    }
  }
});

/***/ }),

/***/ "../../../vendor/statamic/cms/resources/js/components/data-list/HasPagination.js":
/*!***************************************************************************************!*\
  !*** ../../../vendor/statamic/cms/resources/js/components/data-list/HasPagination.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    initialPerPage: {
      type: Number,
      "default": function _default() {
        return Statamic.$config.get('paginationSize');
      }
    }
  },
  data: function data() {
    return {
      perPage: this.initialPerPage,
      page: 1
    };
  },
  mounted: function mounted() {
    this.setInitialPerPage();
  },
  methods: {
    setInitialPerPage: function setInitialPerPage() {
      if (!this.hasPreferences) {
        return;
      }
      this.perPage = this.getPreference('per_page') || this.initialPerPage;
    },
    changePerPage: function changePerPage(perPage) {
      var _this = this;
      perPage = parseInt(perPage);
      var promise = this.hasPreferences ? this.setPreference('per_page', perPage != this.initialPerPage ? perPage : null) : Promise.resolve();
      promise.then(function (response) {
        _this.perPage = perPage;
        _this.resetPage();
      });
    },
    selectPage: function selectPage(page) {
      this.page = page;
    },
    resetPage: function resetPage() {
      this.page = 1;
    }
  }
});

/***/ }),

/***/ "../../../vendor/statamic/cms/resources/js/components/data-list/HasPreferences.js":
/*!****************************************************************************************!*\
  !*** ../../../vendor/statamic/cms/resources/js/components/data-list/HasPreferences.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      preferencesPrefix: null
    };
  },
  computed: {
    hasPreferences: function hasPreferences() {
      return this.preferencesPrefix !== null;
    }
  },
  methods: {
    preferencesKey: function preferencesKey(type) {
      return "".concat(this.preferencesPrefix, ".").concat(type);
    },
    getPreference: function getPreference(type) {
      return this.$preferences.get(this.preferencesKey(type));
    },
    setPreference: function setPreference(type, value) {
      return this.$preferences.set(this.preferencesKey(type), value);
    },
    removePreference: function removePreference(type) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.$preferences.remove(this.preferencesKey(type), value);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/JobCreate.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/JobCreate.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JobCreate_vue_vue_type_template_id_0dfd1cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobCreate.vue?vue&type=template&id=0dfd1cbe&scoped=true& */ "./resources/js/components/JobCreate.vue?vue&type=template&id=0dfd1cbe&scoped=true&");
/* harmony import */ var _JobCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/JobCreate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JobCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobCreate_vue_vue_type_template_id_0dfd1cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _JobCreate_vue_vue_type_template_id_0dfd1cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0dfd1cbe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/JobCreate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/JobListing.vue":
/*!************************************************!*\
  !*** ./resources/js/components/JobListing.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JobListing_vue_vue_type_template_id_15ec6d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobListing.vue?vue&type=template&id=15ec6d9c& */ "./resources/js/components/JobListing.vue?vue&type=template&id=15ec6d9c&");
/* harmony import */ var _JobListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobListing.vue?vue&type=script&lang=js& */ "./resources/js/components/JobListing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JobListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobListing_vue_vue_type_template_id_15ec6d9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _JobListing_vue_vue_type_template_id_15ec6d9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/JobListing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "../../../vendor/statamic/cms/resources/js/components/Listing.vue":
/*!************************************************************************!*\
  !*** ../../../vendor/statamic/cms/resources/js/components/Listing.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Listing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listing.vue?vue&type=script&lang=js& */ "../../../vendor/statamic/cms/resources/js/components/Listing.vue?vue&type=script&lang=js&");
/* harmony import */ var _addons_doefom_jobboard_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../addons/doefom/jobboard/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_addons_doefom_jobboard_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Listing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/statamic/cms/resources/js/components/Listing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/JobCreate.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/JobCreate.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobCreate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/JobListing.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/JobListing.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobListing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobListing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../../../vendor/statamic/cms/resources/js/components/Listing.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ../../../vendor/statamic/cms/resources/js/components/Listing.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addons_doefom_jobboard_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_addons_doefom_jobboard_node_modules_vue_loader_lib_index_js_vue_loader_options_Listing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../addons/doefom/jobboard/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../addons/doefom/jobboard/node_modules/vue-loader/lib/index.js??vue-loader-options!./Listing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!../../../vendor/statamic/cms/resources/js/components/Listing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_addons_doefom_jobboard_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_addons_doefom_jobboard_node_modules_vue_loader_lib_index_js_vue_loader_options_Listing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/JobCreate.vue?vue&type=template&id=0dfd1cbe&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/JobCreate.vue?vue&type=template&id=0dfd1cbe&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobCreate_vue_vue_type_template_id_0dfd1cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobCreate_vue_vue_type_template_id_0dfd1cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobCreate_vue_vue_type_template_id_0dfd1cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobCreate.vue?vue&type=template&id=0dfd1cbe&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobCreate.vue?vue&type=template&id=0dfd1cbe&scoped=true&");


/***/ }),

/***/ "./resources/js/components/JobListing.vue?vue&type=template&id=15ec6d9c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/JobListing.vue?vue&type=template&id=15ec6d9c& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobListing_vue_vue_type_template_id_15ec6d9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobListing_vue_vue_type_template_id_15ec6d9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobListing_vue_vue_type_template_id_15ec6d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobListing.vue?vue&type=template&id=15ec6d9c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/JobListing.vue?vue&type=template&id=15ec6d9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./resources/js/cp.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_JobListing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/JobListing */ "./resources/js/components/JobListing.vue");
/* harmony import */ var _components_JobCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/JobCreate */ "./resources/js/components/JobCreate.vue");


Statamic.$components.register("job-listing", _components_JobListing__WEBPACK_IMPORTED_MODULE_0__["default"]);
Statamic.$components.register("job-create", _components_JobCreate__WEBPACK_IMPORTED_MODULE_1__["default"]);
})();

/******/ })()
;