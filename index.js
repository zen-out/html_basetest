class BaseTest {
    constructor() {

    }

    /**
     * this.checkElement(el) 
     * @description ensures that you can pass in jquery or string
     * @author zen-out
     * @date 2022-01-05
     * @returns {boolean}
     */
    checkElement(el) {
        if (typeof el === "string") {
            return $(el)
        } else {
            return el;
        }
    }

    /**
    * hasClass(element, classname)
    * @example
    let hasClass = baseTest.hasClass(el, "yonas")
    let hasClassFalse = baseTest.hasClass(el, "no")
    * @author zen-out
       * @date 2022-01-05
    * @returns {boolean}
    */
    hasClass(element, classname) {
            element = this.checkElement(element)
            if (element.hasClass(classname)) {
                return true;
            } else {
                return false;
            }
        }
        /**
        * hasId(element, id)
        * @example
        let hasIdTrue = baseTest.hasId(el, "yon")
        console.log('hasIdTrue:', hasIdTrue);
        let hasIdFalse = baseTest.hasId(el, "whatsup")
        console.log('hasIdFalse:', hasIdFalse);
        * @author zen-out
        * @date 2022-01-05
        * @returns {boolean}
        */
    hasId(element, id) {
            element = this.checkElement(element)
            var elmId = element.attr("id");
            return elmId === id ? true : false;
        }
        /**
        * hasAttr(element, attribute)
        * @example
        let hasAttrTrue = baseTest.hasAttr(el, "disabled")
        console.log('hasAttrTrue:', hasAttrTrue);
        let hasAttrFalse = baseTest.hasAttr(el, "no")
        console.log('hasAttrFalse:', hasAttrFalse);
        * @author zen-out
        * @date 2022-01-05
        * @returns {boolean}
        */
    hasAttr(element, attribute) {
            element = this.checkElement(element)
            var getVal = element.attr(attribute);
            return getVal === undefined ? false : true;
        }
        /**
        * hasDataTest(element, key, value = "")
        * @example
        let hasDataTrue = baseTest.hasDataTest(el, "problem_id")
        console.log('hasDataTrue:', hasDataTrue);
        let hasDataFalse = baseTest.hasDataTest(el, "task_id")
        console.log('hasDataFalse:', hasDataFalse);
           let hasDataTrueTrue = baseTest.hasDataTest(el, "problem_id", 3)
           console.log("🚀 ~ file: baseTest.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
           let hasDataTrueTrue2 = baseTest.hasDataTest(el, "problem_id", "3")
           console.log("🚀 ~ file: baseTest.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
        * @author zen-out
        * @date 2022-01-05
        * @returns {boolean}
        */
    hasDataTest(element, key, value = "") {
            element = this.checkElement(element)
            let getData = element.data(key)
            if (value === "") {
                return getData ? true : false
            } else {
                return getData === value ? true : false
            }
        }
        /**
        * hasHTML(element, html)
        * @example
        let htmlTrue = baseTest.hasHTML(el, "<div>baller</div>")
        console.log("🚀 ~ file: baseTest.js ~ line 80 ~ htmlTrue", htmlTrue)
        let htmlFalse = baseTest.hasHTML(el, "whatthef")
        console.log("🚀 ~ file: baseTest.js ~ line 82 ~ htmlFalse", htmlFalse)
        let htmltext = baseTest.hasHTML(el, "ll")
        console.log("🚀 ~ file: baseTest.js ~ line 84 ~ htmltext", htmltext)
        * @author zen-out
        * @date 2022-01-05
        * @returns {boolean}
        */
    hasHTML(element, html) {
            element = this.checkElement(element)
            let get = element.html();
            let stringed = get.toString()
            return stringed.includes(html) ? true : false
        }
        /**
        * hasChild(element, child)
        * @example 
        let ChildTrue1 = baseTest.hasChild(el, ".supergrandchild")
        console.log("🚀 ~ file: baseTest.js ~ line 103 ~ ChildTrue1", ChildTrue1)
        let hasChildFalse = baseTest.hasChild(el, ".what")
        console.log("🚀 ~ file: baseTest.js ~ line 105 ~ hasChildFalse", hasChildFalse)
        * @author zen-out
        * @date 2022-01-05
        * @returns {boolean}
        */
    hasChild(element, child) {
            element = this.checkElement(element)
            let found = $(child)
            let get = element.find(found)
            return get.length > 0 ? true : false
        }
        /**
        * exists(element)
        let existTrue = baseTest.exists(el)
        console.log("🚀 ~ file: baseTest.js ~ line 90 ~ existTrue", existTrue)
        let existFalse = baseTest.exists($(".love"))
        console.log("🚀 ~ file: baseTest.js ~ line 92 ~ existFalse", existFalse)
        * @author zen-out
        * @date 2022-01-05
        * @returns {boolean}
        */
    exists(element) {
            element = this.checkElement(element)
            if (element.length) {
                return true;
            } else {
                return false
            }
        }
        /**
        * visible(element)
        * @example
        let visibleTrue = baseTest.visible(el)
        console.log("🚀 ~ file: baseTest.js ~ line 91 ~ visibleTrue", visibleTrue)
        let visibleFalse = baseTest.visible($(".noDisplay"))
        console.log("🚀 ~ file: baseTest.js ~ line 93 ~ visibleFalse", visibleFalse)
        * @author zen-out
        * @date 2022-01-05
        * @returns {boolean}
        */
    visible(element) {
            element = this.checkElement(element)
            let getDisplayNone = element.is(":visible")
            return getDisplayNone ? true : false
        }
        /**
        * hasCSS(element, key, value)
        let hasCSSFalse = baseTest.hasCSS(el, "color", "#6f57e5")
        console.log("🚀 ~ file: baseTest.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
        let hasCSSTrue = baseTest.hasCSS(el, "display", "flex")
        console.log("🚀 ~ file: baseTest.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)
        * @author zen-out
        * @date 2022-01-05
        * @returns {boolean}
        */
    hasCSS(element, key, value) {
        element = this.checkElement(element)
        let getValue = element.css(key)
        return getValue === value ? true : false
    }
    list() {
        const string = `
        html_basetest.hasClass(el, "yonas")
        html_basetest.hasId(el, "yon")
        html_basetest.hasAttr(el, "disabled")
        html_basetest.hasDataTest(el, "problem_id")
        html_basetest.hasChild(el, ".what")
        html_basetest.hasHTML(el, "<div>baller</div>")
        html_basetest.exists($(".love"))
        html_basetest.visible($(".noDisplay"))
        html_basetest.hasCSS(el, "color", "#6f57e5")
      `
        console.log(string)
        return string;
    }

}

let html_basetest = new BaseTest()