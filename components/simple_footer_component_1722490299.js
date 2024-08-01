/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722490299", {
    template: `
    <div>
        <nav class="bg-white shadow-md dark:bg-gray-800">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                    <img src="./images/logo.svg" class="h-8 mr-3" alt="ProductPulse Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ProductPulse</span>
                </a>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:bg-gray-700">Home</a>
                    <a href="#" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:bg-gray-700">About</a>
                    <a href="#" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:bg-gray-700">Contact Us</a>
                </div>
            </div>
        </nav>
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            ProductPulse
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2023 DiscoverNow. Uncover the latest and greatest products at your fingertips.
                    </div>
                </div>
            </div>
        </footer>
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
