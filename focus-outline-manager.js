// Copyright (c) 2012 The Chromium Authors, Vladimirs. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * focus-outline-manager
 *
 * Watch users keyboard input and manage the focus outline visibility
 */

/**
 * The class name to set on the document element.
 * @const
 */
var CLASS_NAME = 'focus-outline-hidden';

/**
 * This class sets a CSS class name on the HTML element when a user presses the
 * tab key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-hidden *:focus {
 *     outline: none;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to it.
 *
 * @constructor
 */
function FocusOutlineManager () {
    var that = this;

    document.addEventListener('keydown', function (e) {
        that.focusByKeyboard = true;
    }, true);

    document.addEventListener('mousedown', function (e) {
        that.focusByKeyboard = false;
    }, true);

    document.addEventListener('focus', function (event) {
        // Update visibility only when focus is actually changed.
        that.updateVisibility();
    }, true);

    document.addEventListener('focusout', function (event) {
        window.setTimeout(function () {
            if (!document.hasFocus()) {
                that.focusByKeyboard = true;
                that.updateVisibility();
            }
        }, 0);
    });

    this.updateVisibility();
}

FocusOutlineManager.prototype = {
    /**
     * Whether focus change is triggered by TAB key.
     * @type {boolean}
     * @private
     */
    focusByKeyboard: true,

    updateVisibility: function () {
        this.hidden = !this.focusByKeyboard;
    },

    /**
     * Whether the focus outline should be hidden.
     * @type {boolean}
     */
    set hidden(hidden) {
        document.documentElement.classList.toggle(CLASS_NAME, hidden);
    },

    get hidden() {
        return document.documentElement.classList.contains(CLASS_NAME);
    }
};

new FocusOutlineManager();
