(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("compiledTemplates", [], factory);
	else if(typeof exports === 'object')
		exports["compiledTemplates"] = factory();
	else
		root["compiledTemplates"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/templates sync recursive \\.(stub)$":
/*!**************************************!*\
  !*** ./src/templates sync \.(stub)$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./APIController.php.stub": "./src/templates/APIController.php.stub",
	"./APIResource.php.stub": "./src/templates/APIResource.php.stub",
	"./APIResourceCollection.php.stub": "./src/templates/APIResourceCollection.php.stub",
	"./APIRoute.stub": "./src/templates/APIRoute.stub",
	"./BelongsToManyRelationship.stub": "./src/templates/BelongsToManyRelationship.stub",
	"./BelongsToRelationship.stub": "./src/templates/BelongsToRelationship.stub",
	"./Controller.php.stub": "./src/templates/Controller.php.stub",
	"./DatabaseSeeder.php.stub": "./src/templates/DatabaseSeeder.php.stub",
	"./Factory.php.stub": "./src/templates/Factory.php.stub",
	"./HasManyRelationship.stub": "./src/templates/HasManyRelationship.stub",
	"./HasOneRelationship.stub": "./src/templates/HasOneRelationship.stub",
	"./Migration.php.stub": "./src/templates/Migration.php.stub",
	"./Model.php.stub": "./src/templates/Model.php.stub",
	"./Seeder.php.stub": "./src/templates/Seeder.php.stub",
	"./User.php.stub": "./src/templates/User.php.stub",
	"./api.php.stub": "./src/templates/api.php.stub",
	"./web.php.stub": "./src/templates/web.php.stub"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/templates sync recursive \\.(stub)$";

/***/ }),

/***/ "./src/templates/APIController.php.stub":
/*!**********************************************!*\
  !*** ./src/templates/APIController.php.stub ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nnamespace App\\Http\\Controllers;\r\n\r\nuse ___MODEL_NAMESPACE___\\___MODEL___;\r\nuse App\\Http\\Resources\\___MODEL___Collection;\r\nuse App\\Http\\Resources\\___MODEL___Resource;\r\n \r\nclass ___MODEL___APIController extends Controller\r\n{\r\n    public function index()\r\n    {\r\n        return new ___MODEL___Collection(___MODEL___::paginate());\r\n    }\r\n \r\n    public function show(___MODEL___ $___MODEL_INSTANCE___)\r\n    {\r\n        return new ___MODEL___Resource($___MODEL_INSTANCE___->___LOAD_RELATIONSHIPS___);\r\n    }\r\n\r\n    public function store(Request $request)\r\n    {\r\n        return new ___MODEL___Resource(___MODEL___::create($request->all()));\r\n    }\r\n\r\n    public function update(Request $request, ___MODEL___ $___MODEL_INSTANCE___)\r\n    {\r\n        $___MODEL_INSTANCE___->update($request->all());\r\n\r\n        return new ___MODEL___Resource($___MODEL_INSTANCE___);\r\n    }\r\n\r\n    public function destroy(Request $request, ___MODEL___ $___MODEL_INSTANCE___)\r\n    {\r\n        $___MODEL_INSTANCE___->delete();\r\n\r\n        return response()->json([], \\Illuminate\\Http\\Response::HTTP_NO_CONTENT);\r\n    }\r\n}\r\n");

/***/ }),

/***/ "./src/templates/APIResource.php.stub":
/*!********************************************!*\
  !*** ./src/templates/APIResource.php.stub ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nnamespace App\\Http\\Resources;\r\n\r\nuse Illuminate\\Http\\Resources\\Json\\JsonResource;\r\n\r\nclass ___MODEL___Resource extends JsonResource\r\n{\r\n    /**\r\n     * Transform the resource into an array.\r\n     *\r\n     * @param  \\Illuminate\\Http\\Request  $request\r\n     * @return array\r\n     */\r\n    public function toArray($request)\r\n    {\r\n        return [\r\n            ___COLUMNS_BLOCK___\r\n        ];\r\n    }\r\n}\r\n");

/***/ }),

/***/ "./src/templates/APIResourceCollection.php.stub":
/*!******************************************************!*\
  !*** ./src/templates/APIResourceCollection.php.stub ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nnamespace App\\Http\\Resources;\r\n\r\nuse Illuminate\\Http\\Resources\\Json\\JsonResource;\r\n\r\nclass ___MODEL___Collection extends JsonResource\r\n{\r\n    /**\r\n     * Transform the resource into an array.\r\n     *\r\n     * @param  \\Illuminate\\Http\\Request  $request\r\n     * @return array\r\n     */\r\n    public function toArray($request)\r\n    {\r\n        return parent::toArray($request);\r\n    }\r\n}\r\n");

/***/ }),

/***/ "./src/templates/APIRoute.stub":
/*!*************************************!*\
  !*** ./src/templates/APIRoute.stub ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Route::resource('___RESOURCE_NAME___', '___MODEL_NAME___APIController', [\r\n    'only' => ['index', 'show', 'store', 'update', 'destroy']\r\n]);");

/***/ }),

/***/ "./src/templates/BelongsToManyRelationship.stub":
/*!******************************************************!*\
  !*** ./src/templates/BelongsToManyRelationship.stub ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\r\n * Get the ___TARGET_CLASS_PLURAL___ for the ___THIS_CLASS___.\r\n */\r\npublic function ___METHOD_NAME___()\r\n{\r\n    return $this->belongsToMany(\\___MODEL_NAMESPACE___\\___TARGET_CLASS___::class);\r\n}\r\n");

/***/ }),

/***/ "./src/templates/BelongsToRelationship.stub":
/*!**************************************************!*\
  !*** ./src/templates/BelongsToRelationship.stub ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\r\n * Get the ___TARGET_CLASS___ for the ___THIS_CLASS___.\r\n */\r\npublic function ___METHOD_NAME___()\r\n{\r\n    return $this->belongsTo(\\___MODEL_NAMESPACE___\\___TARGET_CLASS___::class);\r\n}\r\n");

/***/ }),

/***/ "./src/templates/Controller.php.stub":
/*!*******************************************!*\
  !*** ./src/templates/Controller.php.stub ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nnamespace App\\Http\\Controllers;\r\n\r\nuse Illuminate\\Foundation\\Bus\\DispatchesJobs;\r\nuse Illuminate\\Routing\\Controller as BaseController;\r\nuse Illuminate\\Foundation\\Validation\\ValidatesRequests;\r\nuse Illuminate\\Foundation\\Auth\\Access\\AuthorizesRequests;\r\n\r\nclass ___MODEL___Controller extends BaseController\r\n{\r\n    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;\r\n}");

/***/ }),

/***/ "./src/templates/DatabaseSeeder.php.stub":
/*!***********************************************!*\
  !*** ./src/templates/DatabaseSeeder.php.stub ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nuse Illuminate\\Database\\Seeder;\r\n\r\nclass DatabaseSeeder extends Seeder\r\n{\r\n    /**\r\n     * Seed the application's database.\r\n     *\r\n     * @return void\r\n     */\r\n    public function run()\r\n    {\r\n        ___DATABASE_SEEDERS_BLOCK___\r\n    }\r\n}");

/***/ }),

/***/ "./src/templates/Factory.php.stub":
/*!****************************************!*\
  !*** ./src/templates/Factory.php.stub ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\n/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */\r\nuse ___MODEL_NAMESPACE___\\___MODEL___;\r\nuse Illuminate\\Support\\Str;\r\nuse Faker\\Generator as Faker;\r\nuse Carbon\\Carbon;\r\n\r\n/*\r\n|--------------------------------------------------------------------------\r\n| Model Factories\r\n|--------------------------------------------------------------------------\r\n|\r\n| This directory should contain each of the model factory definitions for\r\n| your application. Factories provide a convenient way to generate new\r\n| model instances for testing / seeding your application's database.\r\n|\r\n*/\r\n\r\n$factory->define(___MODEL___::class, function (Faker $faker) {\r\n    return [\r\n        ___COLUMNS_BLOCK___\r\n    ];\r\n});\r\n");

/***/ }),

/***/ "./src/templates/HasManyRelationship.stub":
/*!************************************************!*\
  !*** ./src/templates/HasManyRelationship.stub ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\r\n * Get the ___TARGET_CLASS_PLURAL___ for the ___THIS_CLASS___.\r\n */\r\npublic function ___METHOD_NAME___()\r\n{\r\n    return $this->hasMany(\\___MODEL_NAMESPACE___\\___TARGET_CLASS___::class);\r\n}\r\n");

/***/ }),

/***/ "./src/templates/HasOneRelationship.stub":
/*!***********************************************!*\
  !*** ./src/templates/HasOneRelationship.stub ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\r\n * Get the ___TARGET_CLASS___ for the ___THIS_CLASS___.\r\n */\r\npublic function ___METHOD_NAME___()\r\n{\r\n    return $this->hasOne(\\___MODEL_NAMESPACE___\\___TARGET_CLASS___::class);\r\n}\r\n");

/***/ }),

/***/ "./src/templates/Migration.php.stub":
/*!******************************************!*\
  !*** ./src/templates/Migration.php.stub ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nuse Illuminate\\Support\\Facades\\Schema;\r\nuse Illuminate\\Database\\Schema\\Blueprint;\r\nuse Illuminate\\Database\\Migrations\\Migration;\r\n\r\nclass ___CLASS_NAME___ extends Migration\r\n{\r\n    /**\r\n     * Run the migrations.\r\n     *\r\n     * @return void\r\n     */\r\n    public function up()\r\n    {\r\n        Schema::create('___TABLE___', function (Blueprint $table) {\r\n            ___COLUMNS_BLOCK___\r\n            ___SOFT_DELETES_BLOCK___\r\n        });\r\n    }\r\n\r\n    /**\r\n     * Reverse the migrations.\r\n     *\r\n     * @return void\r\n     */\r\n    public function down()\r\n    {\r\n        Schema::dropIfExists('___TABLE___');\r\n    }\r\n}\r\n");

/***/ }),

/***/ "./src/templates/Model.php.stub":
/*!**************************************!*\
  !*** ./src/templates/Model.php.stub ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\n\nnamespace ___MODEL_NAMESPACE___;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass ___CLASS_NAME___ extends Model\n{\n    ___SOFT_DELETES_BLOCK___\n    /**\n     * The attributes that are mass assignable.\n     *\n     * @var array\n     */\n    protected $fillable = [\n        ___FILLABLE___\n    ];\n\n    /**\n     * The attributes that should be mutated to dates.\n     *\n     * @var array\n     */\n    protected $dates = [___DATES___]\n\n    /**\n     * The attributes that should be hidden for arrays.\n     *\n     * @var array\n     */\n    protected $hidden = [\n        ___HIDDEN___\n    ];\n\n    /**\n     * The attributes that should be cast to native types.\n     *\n     * @var array\n     */\n    protected $casts = [\n        ___CASTS_BLOCK___\n    ];\n\n    ___RELATIONSHIP_METHODS_BLOCK___\n}\n");

/***/ }),

/***/ "./src/templates/Seeder.php.stub":
/*!***************************************!*\
  !*** ./src/templates/Seeder.php.stub ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nuse App\\___MODEL___;\r\nuse Illuminate\\Database\\Seeder;\r\n\r\nclass ___MODEL___Seeder extends Seeder\r\n{\r\n    /**\r\n     * Run the database seeds.\r\n     *\r\n     * @return void\r\n     */\r\n    public function run()\r\n    {\r\n        factory(___MODEL___::class, 10)->create();\r\n    }\r\n}");

/***/ }),

/***/ "./src/templates/User.php.stub":
/*!*************************************!*\
  !*** ./src/templates/User.php.stub ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\n\nnamespace ___MODEL_NAMESPACE___;\n\nuse Illuminate\\Notifications\\Notifiable;\nuse Illuminate\\Contracts\\Auth\\MustVerifyEmail;\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\n\nclass User extends Authenticatable\n{\n    use Notifiable;\n\n    /**\n     * The attributes that are mass assignable.\n     *\n     * @var array\n     */\n    protected $fillable = [\n        ___FILLABLE___\n    ];\n\n    /**\n     * The attributes that should be mutated to dates.\n     *\n     * @var array\n     */\n    protected $dates = [___DATES___]\n\n    /**\n     * The attributes that should be hidden for arrays.\n     *\n     * @var array\n     */\n    protected $hidden = [\n        ___HIDDEN___\n    ];\n\n    /**\n     * The attributes that should be cast to native types.\n     *\n     * @var array\n     */\n    protected $casts = [\n        ___CASTS_BLOCK___\n    ];\n\n    ___RELATIONSHIP_METHODS_BLOCK___\n}\n");

/***/ }),

/***/ "./src/templates/api.php.stub":
/*!************************************!*\
  !*** ./src/templates/api.php.stub ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nuse Illuminate\\Http\\Request;\r\nuse Illuminate\\Routing\\Router;\r\n\r\n/*\r\n|--------------------------------------------------------------------------\r\n| API Routes\r\n|--------------------------------------------------------------------------\r\n|\r\n| Here is where you can register API routes for your application. These\r\n| routes are loaded by the RouteServiceProvider within a group which\r\n| is assigned the \"api\" middleware group. Enjoy building your API!\r\n|\r\n*/\r\n\r\n/*\r\n* Snippet for a quick route reference\r\n*/\r\nRoute::get('/', function (Router $router) {\r\n    return collect($router->getRoutes()->getRoutesByMethod()[\"GET\"])->map(function($value, $key) {\r\n        return url($key);\r\n    })->values();   \r\n});\r\n\r\n___API_ROUTES_BLOCK___");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var context = __webpack_require__("./src/templates sync recursive \\.(stub)$");

var templates = {};
context.keys().forEach((filename)=>{
  var fileKey = filename.substring(2, filename.length - 5)
  templates[fileKey] = context(filename).default;
});

/* harmony default export */ __webpack_exports__["default"] = (templates);

/***/ }),

/***/ "./src/templates/index.js-exposed":
/*!****************************************!*\
  !*** ./src/templates/index.js-exposed ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = global["template"] = __webpack_require__(/*! -!./index.js */ "./src/templates/index.js");

/***/ }),

/***/ "./src/templates/web.php.stub":
/*!************************************!*\
  !*** ./src/templates/web.php.stub ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\n/*\r\n|--------------------------------------------------------------------------\r\n| Web Routes\r\n|--------------------------------------------------------------------------\r\n|\r\n| Here is where you can register web routes for your application. These\r\n| routes are loaded by the RouteServiceProvider within a group which\r\n| contains the \"web\" middleware group. Now create something great!\r\n|\r\n\r\n*/\r\nRoute::get('/', function () {\r\n    return view('welcome');\r\n});\r\n\r\n___WEB_ROUTES_BLOCK___");

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./src/templates/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\laravel-file-factory\src\templates\index.js */"./src/templates/index.js-exposed");


/***/ })

/******/ });
});