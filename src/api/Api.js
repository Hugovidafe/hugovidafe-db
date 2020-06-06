/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
USEFUL API (c) 2020
Desc: THIS PACKAGE IS UNDER DEVELOPMENT!
Created: 2020-06-05T09:40:19.887Z
Modified: 2020-06-06T22:42:37.869Z
*/

'use strict';

const BaseApi = require('./BaseApi')
const Database = require('../database/Database');
const Langs = require('i18n');

/**
 * The main hub for interating with the API, and the starting point for any database and much.
 * @extends {BaseApi}
 * 
 * @author Created by Hugovidafe <hugo.vidal.ferre@gmail.com>
 * @github https://github.com/Hugovidafe/useful-api 
 * @license http://opensource.org/licenses/MIT
 */

class Api extends BaseApi {
	/**
	 * @param {ApiOptions} [options] Options for the API.
	 */
	constructor(options = {}) {
		super(Object.assign({ _apiVersion: "1" }, options));

		// this._validateOptions();

		/**
		 * Initiate a instance of Database.
		 * @type {Database}
		 */

		this.database = new Database(this);

		Langs.configure({
            directory: this.options.path_langs,
            syncFiles: true,
            updateFiles: true,
            autoReload: true
		})

		/**
		 * Initiate a instance of translations.
		 * @type {Langs}
		 */

		this.langs = Langs;
	}

	/**
	 * Validates the api options.
	 * @param {ApiOptions} [options=this.options] Options to validate.
	 * @private
	 */

	// _validateOptions(options = this.options) {
	// 	if (options.path_db && !(typeof options.path_db === "string")) {
	// 		throw new TypeError('API_INVALID_OPTION', 'path_db', '...');
	// 	}
	// 	if (options.path_backup_db && !(typeof options.path_backup_db === "string")) {
	// 		throw new TypeError('API_INVALID_OPTION', 'path_backup_db', "...");
	// 	}
	// }
}

module.exports = Api;