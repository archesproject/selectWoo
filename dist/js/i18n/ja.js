/*! Select2 1.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ja",[],function(){return{errorLoading:function(){return"結果が読み込まれませんでした"},inputTooLong:function(e){var t=e.input.length-e.maximum,n=t+" 文字を削除してください";return n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="少なくとも "+t+" 文字を入力してください";return n},loadingMore:function(){return"読み込み中…"},maximumSelected:function(e){var t=e.maximum+" 件しか選択できません";return t},noResults:function(){return"対象が見つかりません"},searching:function(){return"検索しています…"}}}),{define:e.define,require:e.require}})();