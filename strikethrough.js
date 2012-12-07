/**
 * Namespace
 */
var Mikedhart = Mikedhart || {};

/**
 * This is a simple utility class to provide logical and facial methods to append
 * a custom height and colour strikethrough to any HTML element.
 *
 * @author Mike Hart
 * @version 0.1
 * @copyright: MIT Style
 */
Mikedhart.Strikethrough = function () {
	this.elements;

	this.strikethroughHeight = 10;
	this.strikethroughColour = "#FFFFFF";

	this.init = function (strikethroughHeight, strikethroughColour) {
		this.strikethroughHeight = strikethroughHeight;
		this.strikethroughColour = strikethroughColour;

		this.fetchElements();
		this.surroundElements();
		this.appendStrikethrough();
		this.moveStrikethrough();
	}

	this.moveStrikethrough = function () {
		var that = this;

		$.each($(".mikedhart-strikethrough"), function (key, el) {
			var parent = $(el).parent();
			var paddingTop = $(el).css("padding-top").replace(/[^-\d\.]/g, '');
			var paddingBottom = $(el).css("padding-bottom").replace(/[^-\d\.]/g, '');
			var parentHeight = $(parent).css("height").replace(/[^-\d\.]/g, '');
			var finalHeight = parseInt(parentHeight)+parseInt(paddingBottom)+parseInt(paddingTop);
			var moveBy = (finalHeight/2) + (that.strikethroughHeight/2);

			$(el).css("bottom", moveBy);
		});
	}

	this.appendStrikethrough = function () {
		var that = this;

		$.each($(".mikedhart-strikethrough-wrap"), function (key, el) {
			$(el).append("<span style=\"height: " + that.strikethroughHeight + "px; background-color: " + that.strikethroughColour + "\" class=\"mikedhart-strikethrough\">&nbsp;</span>");
		});
	}

	this.fetchElements = function () {
		this.elements = $(".strikethrough");
	}

	this.surroundElements = function () {
		var that = this;

		$.each(this.elements, function (key, el) {
			var width = $(el).css("width");
			var height = $(el).css("height");
			var wrapper = "<span style=\"width: " + width + "; height: " + height + ";\" class=\"mikedhart-strikethrough-wrap\" />"

			$(el).wrap(wrapper);
		});
	}
}
