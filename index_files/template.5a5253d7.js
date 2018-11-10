//HEAD 
(function(app) {
try { app = angular.module("templates-app"); }
catch(err) { app = angular.module("templates-app", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("account/account.tpl.html","<div class=\"your-plan-page\">\n" +
    "  <!-- Section info about customer and meal plan -->\n" +
    "  <div class=\"info-section\">\n" +
    "    <div class=\"main-wrapper\">\n" +
    "      <div class=\"self-container\">\n" +
    "        <div class=\"account-info\">\n" +
    "          <p class=\"user-name\">\n" +
    "            <span class=\"text-uppercase user-name-detail\">\n" +
    "              {{user.firstName ? user.firstName + \"'s\" : '' }}\n" +
    "            </span>\n" +
    "            <span class=\"text-uppercase user-name-hash\">\n" +
    "              Green Chef\n" +
    "            </span>\n" +
    "          </p>\n" +
    "          <span ng-click=\"editPlan()\" class=\"hidden-xs text-uppercase edit-sub\" track-click event-name=\"edit-subscription-global\">\n" +
    "            Edit Subscription\n" +
    "          </span>\n" +
    "        </div>\n" +
    "\n" +
    "        <p class=\"visible-xs btn-dropdown view-plan\" ng-click=\"viewPlan = !viewPlan\">\n" +
    "          View Plan\n" +
    "          <span class=\"caret\" ng-class=\"{'open': viewPlan}\"></span>\n" +
    "        </p>\n" +
    "\n" +
    "        <p class=\"plan-space\" ng-hide=\"viewPlan\"> </p>\n" +
    "\n" +
    "        <div class=\"plan-info visible-xs\" ng-show=\"viewPlan\">\n" +
    "          <span ng-click=\"editPlan()\" class=\"visible-xs text-uppercase edit-sub\" track-click event-name=\"edit-subscription-global\">\n" +
    "            Edit Subscription\n" +
    "          </span>\n" +
    "          <div class=\"plan-info-wrapper\">\n" +
    "            <div class=\"plan-item\">\n" +
    "              <p class=\"plan-item-title\">\n" +
    "                Meal Plan\n" +
    "              </p>\n" +
    "              <p class=\"plan-item-info main-info\">\n" +
    "                {{ upcomingSubscription.mealPreference.mealPlan.name }}\n" +
    "                <span class=\"icon-information\"\n" +
    "                     ng-if=\"upcomingSubscription.mealPreference.dietaryOptOuts.length > 0\"\n" +
    "                     ng-click=\"viewOrderSummary = !viewOrderSummary\"\n" +
    "                     ng-mouseover=\"viewOrderSummary = true\"\n" +
    "                     ng-mouseleave=\"viewOrderSummary = false\">\n" +
    "                  <span class=\"view-plan-summary\"\n" +
    "                       ng-show=\"viewOrderSummary\"\n" +
    "                       ng-if=\"upcomingSubscription.mealPreference.dietaryOptOuts.length > 0\">\n" +
    "                    <span class=\"summary-content\">\n" +
    "                      <span class=\"text-uppercase\"\n" +
    "                            ng-repeat=\"optOut in upcomingSubscription.mealPreference.dietaryOptOuts\">\n" +
    "                        no {{ optOut }}{{$last ? '' : ', '}}\n" +
    "                      </span>\n" +
    "                    </span>\n" +
    "                  </span>\n" +
    "                </span>\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"plan-item\">\n" +
    "              <p class=\"plan-item-title\">Servings Per Box</p>\n" +
    "              <p class=\"plan-item-info main-info\">\n" +
    "                <!--Make this into method  -->\n" +
    "                {{\n" +
    "                  upcomingSubscription.mealPreference.mealPlan.numRecipes *\n" +
    "                  upcomingSubscription.mealPreference.mealPlan.numPeople\n" +
    "                }} Servings\n" +
    "              </p>\n" +
    "              <p class=\"plan-item-info\">\n" +
    "                {{ upcomingSubscription.mealPreference.mealPlan.numRecipes }}\n" +
    "                recipes per box\n" +
    "              </p>\n" +
    "              <p class=\"plan-item-info\">\n" +
    "                {{ upcomingSubscription.mealPreference.mealPlan.numPeople }} servings per recipe\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"plan-item\">\n" +
    "              <p class=\"plan-item-title\">Number of Boxes</p>\n" +
    "              <p class=\"plan-item-info main-info\">\n" +
    "                 {{ upcomingSubscription.quantity | formatBoxNum }}\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"plan-item\">\n" +
    "              <p class=\"plan-item-title\">\n" +
    "                Delivery Day\n" +
    "              </p>\n" +
    "              <p class=\"plan-item-info main-info\">\n" +
    "                {{ upcomingSubscription.deliveryWindow }}\n" +
    "              </p>\n" +
    "              <p class=\"plan-item-info\">\n" +
    "                Scheduled every {{ upcomingSubscription.interval/7 | formatWeekNum }}\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"holiday-shipping-note\" ng-if=\"showHolidayBanner && !isSuspended\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <h2 class=\"shipping-note-title\"> Shipping note </h2>\n" +
    "      <p class=\"shipping-note\">Due to holiday shipping, your order for the week of {{ affectedWeek | date: 'MMMM d'}} may arrive on a different weekday than usual. View delivery dates below.</p>\n" +
    "      <p class=\"shipping-note\">Please note: Your corresponding cutoff date will also be affected.\n" +
    "        <a href=\"https://help.greenchef.com/hc/en-us/articles/208245083-When-is-the-weekly-cutoff-time-to-modify-a-delivery-or-subscription-\"\n" +
    "           target=\"_blank\" class=\"about-tooltip\"></a></p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"upcoming-cart-main-content\">\n" +
    "  <div class=\"main-wrapper\">\n" +
    "\n" +
    "    <div ng-include=\"suspendAccountStateTemplate\" class=\"suspend-account-state\" ng-if=\"isSuspended && !$state.includes('my-account.mobile-account-nav')\"></div>\n" +
    "\n" +
    "    <!-- CALENDAR NAV -->\n" +
    "    <gc-calendar-nav carts=\"carts\" select-cart=\"selectCart($event)\" ng-if=\"carts && carts.length > 0\"></gc-calendar-nav>\n" +
    "\n" +
    "    <!-- Section about Your Upcoming Order -->\n" +
    "    <div class=\"upcoming-order\" ng-if=\"upcomingCart\">\n" +
    "      <!-- Order Summary -->\n" +
    "      <div class=\"order-summary\">\n" +
    "        <div class=\"self-container\">\n" +
    "          <div class=\"order-summary-detail\">\n" +
    "            <p class=\"scheduled-time\">\n" +
    "              Your Upcoming Order -\n" +
    "              <span class=\"time\">\n" +
    "                {{ upcomingCart.deliveryDate | date : 'MMM dd'}}\n" +
    "              </span>\n" +
    "            </p>\n" +
    "            <gc-n-w-o-detail ng-show=\"isCartDeliverable()\" order=\"upcomingCart\" meal-plans=\"mealPlans\"></gc-n-w-o-detail>\n" +
    "          </div>\n" +
    "\n" +
    "          <!-- Scheduled Order Icon -->\n" +
    "          <div class=\"order-summary-scheduled\" ng-show=\"isCartDeliverable()\">\n" +
    "            <span class=\"order-summary-scheduled-icon\"></span>\n" +
    "            <span class=\"order-summary-scheduled-label\">Order Scheduled</span>\n" +
    "          </div>\n" +
    "\n" +
    "          <!-- Skipped Order Icon -->\n" +
    "           <div class=\"order-summary-scheduled skipped\" ng-show=\"!isCartDeliverable()\">\n" +
    "            <span class=\"order-summary-scheduled-icon\"></span>\n" +
    "            <span class=\"order-summary-scheduled-label\">Order Skipped</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <gc-cart-detail upcoming-subscription=\"upcomingSubscription\" upcoming-cart=\"upcomingCart\" current-plan=\"currentPlan\" meal-plans=\"mealPlans\" user=\"user\" sort-choice-recipes-callback=\"sortChoiceRecipes\" update-cart-in-scope-callback=\"updateCartInScope\" update-all-carts-in-scope-callback=\"updateAllCartsInScope\"\n" +
    "      navigate-to-recipe-page=\"navigateToRecipePage\"></gc-cart-detail>\n" +
    "\n" +
    "      <!-- Order Something Else -->\n" +
    "      <span ng-show=\"loadingRecipes\">\n" +
    "        <loading-state></loading-state>\n" +
    "      </span>\n" +
    "      <div class=\"order-something-else\" ng-hide=\"availableFlexPlans.length === 0 || cutOff || loadingRecipes\">\n" +
    "        <div class=\"self-container\">\n" +
    "          <!-- Overview about meal of plan to change Order Upcoming -->\n" +
    "          <div class=\"order-something-else-overview\">\n" +
    "            <h3 class=\"order-something-else-title\">Order Something Else?</h3>\n" +
    "            <p class=\"order-something-else-scheduled\">For <span class=\"from-time\">{{menuDate | date:'MMM d'}}</span> - <span class=\"to-time\">{{menuDate | addDays: 7 | date:'MMM d' }}</span></p>\n" +
    "            <p class=\"hidden-xs order-something-else-description\">If you’re not completely in love with your upcoming meals or you simply want to try something new, choose one of the menus below instead. Click “Get This” to replace your upcoming menu with the selected option.</p>\n" +
    "            <p class=\"visible-xs order-something-else-description\">If you’re not completely in love with your upcoming meals or you simply want to try something new, choose one of the menus below instead.</p>\n" +
    "          </div>\n" +
    "\n" +
    "          <!-- List meals of plan to change Order Upcoming -->\n" +
    "          <div class=\"order-meals-change\">\n" +
    "            <!-- Binding mock data -->\n" +
    "            <div class=\"plan-to-change\"\n" +
    "                 ng-repeat=\"plan in availableFlexPlans track by $index\"\n" +
    "                 ng-init=\"selected = false\"\n" +
    "                 ng-hide=\"plan.value === upcomingCart.mealPreference.mealPlan || plan.isHidden\"\n" +
    "            >\n" +
    "              <div class=\"plan-overview\">\n" +
    "                <div class=\"plan-overview-detail\">\n" +
    "                  <p class=\"plan-name\"><span class=\"plan-menu-name\">{{plan.name}}</span> Menu</p>\n" +
    "                  <p class=\"plan-desc\">\n" +
    "                    <span class=\"plan-menu-price\">{{plan.cost | currency}}/serving</span>\n" +
    "                    <span class=\"hidden-xs plan-menu-detail\" ng-bind-html=\"plan.extendedSubtitle\"></span>\n" +
    "\n" +
    "                  </p>\n" +
    "                  <p>\n" +
    "                    <span class=\"visible-xs plan-menu-detail\" ng-bind-html=\"plan.mobileSubtitle\"></span>\n" +
    "                  </p>\n" +
    "                </div>\n" +
    "                <div class=\"plan-overview-edit\" ng-show=\"!isSuspended\">\n" +
    "                  <button id=\"single-button\" type=\"button\" class=\"btn btn-action-white btn-default-green pull-right\" ng-click=\"showReplaceOrder(plan)\">Get This</span>\n" +
    "                  </button>\n" +
    "                </div>\n" +
    "                <span class=\"visible-xs plan-menu-detail\" ng-bind-html=\"plan.descMobile\"></span>\n" +
    "              </div>\n" +
    "\n" +
    "              <!-- At the current, using mock image \"unknown-bg-menu.jpg\" for recipe at here to show correct using -->\n" +
    "              <!-- FIXED ME: Will be updated with binding data later -->\n" +
    "\n" +
    "              <gc-init-owl-when-done mobileitemcount=\"2\" margin=\"20\">\n" +
    "                <div class=\"list-meals list-meals-carousel change-order-meals\" id=\"{{plan.name}}Owl\" ng-class=\"{'family-plan': plan.isFamilyPlan}\">\n" +
    "                  <div class=\"meal-item\" ng-repeat=\"meal in plan.meals.recipes track by $index\">\n" +
    "                    <div ng-if=\"meal.isPublished\">\n" +
    "                      <div class=\"meal-item-wrapper-image\">\n" +
    "                        <a href ng-click=\"navigateToRecipePage(meal, true)\" track-click event-name=\"recipe_{{recipe.recipeVanity}}\">\n" +
    "                          <img class=\"recipe-replace\" src=\"{{meal.thumbnailImageUrl}}\">\n" +
    "                        </a>\n" +
    "                      </div>\n" +
    "                      <div class=\"meal-item-info\">\n" +
    "                        <a href ng-click=\"navigateToRecipePage(meal, true)\">\n" +
    "                          <h4 class=\"meal-item-name\" ng-bind-html=\"meal.mealName\"></h4>\n" +
    "                          <p class=\"meal-item-description\" ng-bind-html=\"meal.mealIntro\"></p>\n" +
    "                        </a>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div ng-if=\"!meal.isPublished\">\n" +
    "                      <div class=\"meal-item-wrapper-image\">\n" +
    "                        <img class=\"recipe-replace\" src=\"{{meal.thumbnailImageUrl}}\">\n" +
    "                      </div>\n" +
    "                      <div class=\"meal-item-info\">\n" +
    "                        <h4 class=\"meal-item-name\" ng-bind-html=\"meal.mealName\"></h4>\n" +
    "                        <p class=\"meal-item-description\" ng-bind-html=\"meal.mealIntro\"></p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </gc-init-owl-when-done>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("address-validation/shipping-validate-address.tpl.html","<div class=\"wrapper\">\n" +
    "  <div class=\"close\" ng-click=\"dismissDialog()\"></div>\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"content-header\">\n" +
    "      <h4 class=\"header-title\">Verify Your Shipping Address</h4>\n" +
    "      <p class=\"header-description\">To ensure accurate delivery, we suggest the changes shown below. Please choose the address you would like to use or edit your original address.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--Suggested Address-->\n" +
    "    <div class=\"option\" ng-class=\"{'suggested-address': selectedAddress == suggestedAddress}\">\n" +
    "      <div class=\"option-header\">\n" +
    "        <h4 class=\"option-title\">Suggested Addresses</h4>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"option-content\">\n" +
    "        <div class=\"address-item\" ng-repeat=\"address in candidateAddresses\">\n" +
    "          <label class=\"label-radio\">{{address.fullText}}\n" +
    "            <input type=\"radio\" name=\"radio\" ng-model=\"$parent.selectedAddress\" ng-value=\"suggestedAddress\">\n" +
    "            <span class=\"label-radio-indicator\"></span>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--Original Address-->\n" +
    "    <div class=\"option original-address\" ng-class=\"{'suggested-address': selectedAddress == originalAddress}\">\n" +
    "      <div class=\"option-header\">\n" +
    "        <h4 class=\"option-title\">Original Address</h4>\n" +
    "        <span class=\"editing\" ng-click=\"dismissDialog()\">Edit</span>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"option-content\">\n" +
    "        <div class=\"address-item\">\n" +
    "          <label class=\"label-radio\">{{originalAddress.fullText}}\n" +
    "            <input type=\"radio\" name=\"radio\" ng-model=\"selectedAddress\" ng-value=\"originalAddress\" track-click event-name=\"original_address\">\n" +
    "            <span class=\"label-radio-indicator\"></span>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <button class=\"btn btn-default btn-shipping\" ng-click=\"selectAddress()\">Ship To This Address</button>\n" +
    "  </div>\n" +
    "</div>")

$templateCache.put("cancel/cancel.tpl.html","<section class=\"cancel-page has-banner-padding\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row inner-container\">\n" +
    "            <div class=\"col-sm-12 col-md-12\">\n" +
    "\n" +
    "                <div ng-show=\"showMonthly == 'yes'\">\n" +
    "                  <h2 class='sorry'>Before you go...</h2>\n" +
    "                  <form class=\"form-horizontal monthly-form\">\n" +
    "                      <h2 class='upper'>Want to try a monthly subscription?</h2>\n" +
    "                      <p class=\"caption\">You have the option to get just 1 delivery every 4 weeks. With a monthly subscription, you can still enjoy delicious organic dinners, at your own pace.</p>\n" +
    "                      <button class=\"btn btn-green btn-big\" type=\"button\" ng-click=\"switchToMonthly()\" track-click event-name=\"monthly_plan\">Switch to monthly plan</button>\n" +
    "                  </form>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-show=\"showMonthly == 'no'\">\n" +
    "                  <h2 class='sorry'>We're sorry to see you go...</h2>\n" +
    "                </div>\n" +
    "\n" +
    "                <form class=\"form-horizontal\"\n" +
    "                      name=\"cancelForm\"\n" +
    "                      novalidate\n" +
    "                      ng-submit=\"submitCancel(cancelForm)\">\n" +
    "                    <div class=\"header\">\n" +
    "                        <h2 class='upper title-red'>Cancel Subscription</h2>\n" +
    "                        <p class=\"caption\">To complete cancellation, fill out the short survey below then click \"Cancel Subscription.\"</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"body\">\n" +
    "                        <div class='form-group'>\n" +
    "                            <div class=\"col-md-12 col-sm-12 reason\">\n" +
    "                                <label for=\"reason\">What is the primary reason for cancelling your subscription with us?</label>\n" +
    "                                <label class='error' ng-show=\"cancelSubmitted\">{{ getError(cancelForm.reason.$error) }}</label>\n" +
    "                                <select id=\"reason\" name=\"reason\" class=\"selectpicker form-control btn-select\"\n" +
    "                                        ng-model=\"survey.reason\"\n" +
    "                                        ng-options=\"reason for reason in cancelData.cancelReasons\"\n" +
    "                                        required>\n" +
    "                                    <option value=\"\">Please choose a reason</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class='form-group'>\n" +
    "                            <div class=\"col-md-12 col-sm-12 comment\">\n" +
    "                                <label for=\"comment\">Is there anything else you want to tell us to help us improve?</label>\n" +
    "                                <textarea id=\"comment\" name=\"comment\"\n" +
    "                                          class=\"form-control\"\n" +
    "                                          rows=\"4\"\n" +
    "                                        ng-model=\"survey.comment\">\n" +
    "\n" +
    "                                </textarea>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"actions\">\n" +
    "                        <div class=\"form-group enable-marketing\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <div class=\"checkbox\">\n" +
    "                                    <input id=\"email\" type=\"checkbox\" class=\"check-item\" ng-model=\"survey.enableMarketing\"/>\n" +
    "                                    <label for=\"email\" class=\"label-check-item\">I'd like to keep receiving the weekly recipe newsletter and announcements.</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"btn-wrapper\" ng-show=\"!cancelForm.$submitted\">\n" +
    "                            <button class=\"btn btn-red btn-big\" type=\"submit\" track-click event-name=\"cancel_sub\">Cancel subscription</button>\n" +
    "                            <button class=\"btn btn-green btn-big btn-change-mind\" type=\"button\" ng-click=\"goToAccount()\" track-click event-name=\"changed_mind\">I changed my mind</button>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"btn-wrapper\" ng-show=\"cancelForm.$submitted\">\n" +
    "                          <loading-state></loading-state>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "")

$templateCache.put("eco/eco.tpl.html","<div class=\"eco-page v3-page\" ng-class=\"{'has-banner': showBanner}\">\n" +
    "\n" +
    "  <section>\n" +
    "    <div class=\"eco-row-item eco-intro\">\n" +
    "      <div class=\"container table-meal\">\n" +
    "        <div class=\"row row-meal-item\">\n" +
    "          <div class=\"col-sm-12 cell-meal invisible-cell-meal\">\n" +
    "            <h2 class=\"title-caption\" ng-bind-html=\"eco.title\"></h2>\n" +
    "            <div class=\"top-intro\">\n" +
    "              <p class=\"intro-content\">\n" +
    "                Green Chef is committed to continuously innovating to provide eco-friendly packaging that protects your food&apos;s quality and safety. We take sustainability seriously, which means we&apos;re always on the lookout for new, more effective practices and materials.\n" +
    "              </p>\n" +
    "              <p class=\"intro-content\">\n" +
    "                Our packaging and services are also designed with efficiency in mind. You skip a trip to the grocery store, and your food gets a shared ride to your home. Green Chef boxes almost never travel alone, which minimizes our fuel use and overall carbon footprint.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"bottom-intro\">\n" +
    "              <p class=\"intro-content\">\n" +
    "                Learn more about our packaging below, including how to reuse, recycle, or compost our packaging materials.\n" +
    "              </p>\n" +
    "              <p class=\"intro-content\">\n" +
    "                The following list includes items commonly found in Green Chef boxes; occasionally, different or additional packaging materials may be used. If the item you&apos;re looking for isn&apos;t listed below, follow the instructions on its packaging or contact help@greenchef.com for more information.\n" +
    "              </p>\n" +
    "              <p class=\"intro-content\">\n" +
    "                The availability of recycling and composting facilities varies depending on where you live. Find your local options <a href=\"http://search.earth911.com/\" target=\"_blank\" title=\"Find you location\">here</a>.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"section in eco.sections\" class=\"eco-row-item item-{{section.anchorName}}\">\n" +
    "      <div class=\"background-overlay\"\n" +
    "           ng-if=\"($index === 1) || ($index === 2) || ($index === 7)\"></div>\n" +
    "      <div class=\"container table-meal\">\n" +
    "        <div class=\"row row-meal-item\">\n" +
    "          <div class=\"col-sm-6 cell-meal invisible-cell-meal\"\n" +
    "                ng-class=\"{'col-sm-push-6': ($index === 3) || ($index === 5) || ($index === 7)}\">\n" +
    "            <img ng-src=\"{{section.imageSrc}}\" ng-srcset=\"{{ section.imageSrcSet}} 2x\" alt=\"\" class=\"meals-image\" ng-if=\"section.imageSrc\" />\n" +
    "          </div>\n" +
    "          <div ng-class=\"{'do-with-top': section.fullWidthDoWith, 'col-sm-pull-6': ($index === 3) || ($index === 5) || ($index === 7)}\"\n" +
    "               class=\"col-sm-6 cell-meal\">\n" +
    "            <div class=\"thumbnail col-sm-12\">\n" +
    "                <div class=\"caption\">\n" +
    "                  <h2 class=\"title-caption\" ng-bind-html=\"section.title\"></h2>\n" +
    "                  <div ng-if=\"!section.madeOfContent2\">\n" +
    "                    <h3>What&apos;s it made of?</h3>\n" +
    "                    <p class=\"section-content\" ng-bind-html=\"section.madeOfContent\"></p>\n" +
    "\n" +
    "                    <div ng-show=\"!section.fullWidthDoWith\">\n" +
    "                      <h3>What can I do with it?</h3>\n" +
    "                      <p class=\"section-content\" ng-bind-html=\"section.doWithContent\"></p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "\n" +
    "                  <!-- For section that has madeOfContent2 -->\n" +
    "                  <div ng-if=\"section.madeOfContent2\">\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                      <h3>What&apos;s it made of?</h3>\n" +
    "                      <p class=\"section-content\" ng-bind-html=\"section.madeOfContent2\"></p>\n" +
    "\n" +
    "                      <div ng-show=\"!section.fullWidthDoWith\">\n" +
    "                        <h3>What can I do with it?</h3>\n" +
    "                        <p class=\"section-content\" ng-bind-html=\"section.doWithContent2\"></p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                      <h3>What&apos;s it made of?</h3>\n" +
    "                      <p class=\"section-content\" ng-bind-html=\"section.madeOfContent\"></p>\n" +
    "\n" +
    "                      <div ng-show=\"!section.fullWidthDoWith\">\n" +
    "                        <h3>What can I do with it?</h3>\n" +
    "                        <p class=\"section-content\" ng-bind-html=\"section.doWithContent\"></p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 cell-meal do-with-bottom\" ng-show=\"section.fullWidthDoWith\">\n" +
    "            <h3>What can I do with it?</h3>\n" +
    "            <p class=\"section-content\" ng-bind-html=\"section.doWithContent\"></p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-clean\">\n" +
    "    <div class=\"background-image\"></div>\n" +
    "    <div class=\"section-info container\">\n" +
    "      <h2 class=\"section-info-title hidden-xs\">Clean plates, clean planet</h2>\n" +
    "      <h2 class=\"section-info-title visible-xs\">\n" +
    "        Clean plates,<br />\n" +
    "        clean planet\n" +
    "      </h2>\n" +
    "      <div class=\"hidden-xs\">\n" +
    "        <p class=\"section-info-desc\">\n" +
    "          It&apos;s right in the name: Green Chef is all about eating and living green.\n" +
    "        </p>\n" +
    "        <p class=\"section-info-desc\">\n" +
    "          Green Chef balances 100% of our carbon emissions, from company operations to shipment of boxes to customers, with sustainable offset programs. So you can feel good, and green, about having Green Chef delivered to your door. It&apos;s more eco-friendly than driving to the grocery store yourself!\n" +
    "        </p>\n" +
    "        <p class=\"section-info-desc\">\n" +
    "          We accomplish this by teaming up with TerraPass. TerraPass helps businesses take responsibility for and reduce their impact on the climate through renewable energy projects and emissions reduction.\n" +
    "        </p>\n" +
    "        <p class=\"section-info-desc\">\n" +
    "          Green Chef and TerraPass have worked together to save trees in the <a href=\"https://www.terrapass.com/project/city-of-arcata-community-forest\" title=\"City of Arcata Community Forest\" target=\"_blank\">City of Arcata Community Forest</a>, and we invested in construction of the <a href=\"https://www.terrapass.com/project/projectbig-smile-dempsey-ridge\" title=\"Big Smile Wind Farm at Dempsey Ridge\" target=\"_blank\">Big Smile Wind Farm at Dempsey Ridge</a>. But we&apos;re just getting started! <a href=\"https://www.terrapass.com/\" title=\"Visit TerraPass\" target=\"_blank\">Visit TerraPass</a> to learn more about combatting climate change.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"visible-xs\">\n" +
    "        <p class=\"section-info-desc\">\n" +
    "          Green Chef is proud to be a carbon-neutral company. We offset 100% of our carbon emissions, from company operations to shipment of boxes to customers.\n" +
    "        </p>\n" +
    "        <p class=\"section-info-desc\">\n" +
    "          We accomplish this by teaming up with TerraPass. TerraPass helps businesses reduce their impact on the climate through renewable energy projects and emissions reduction.\n" +
    "        </p>\n" +
    "        <p class=\"section-info-desc\">\n" +
    "          Green Chef and TerraPass have saved trees in the <a href=\"https://www.terrapass.com/project/city-of-arcata-community-forest\" title=\"City of Arcata Community Forest\" target=\"_blank\">City of Arcata Community Forest</a>, and we invested in the <a href=\"https://www.terrapass.com/project/projectbig-smile-dempsey-ridge\" title=\"Big Smile Wind Farm at Dempsey Ridge\" target=\"_blank\">Big Smile Wind Farm at Dempsey Ridge</a>. But we’re just getting started! <a href=\"https://www.terrapass.com/\" title=\"Visit TerraPass\" target=\"_blank\">Visit TerraPass</a> to learn more.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"terrapass-logo\"></div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("home/v3.home.tpl.html","<div class='home-page v3-page'>\n" +
    "  <section class=\"wrap-intro main home\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-250\"></div>\n" +
    "    <div class=\"section-info\">\n" +
    "      <p class=\"signup free-trial visible-xs\" ng-if=\"enableFreeTrialButton\">\n" +
    "        <a id=\"signup\" href class=\"btn-signup text-uppercase ng-isolate-scope\" track-click event-name=\"free_trial\" ng-click=\"freeTrialSignUp()\">free trial</a>\n" +
    "      </p>\n" +
    "      <div class=\"easy-container center-block\">\n" +
    "        <h2>DELICIOUSLY SIMPLE</h2>\n" +
    "      </div>\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"short-content-container\">\n" +
    "            <p class=\"short-content center-block\">Fresh, organic ingredients. Wholesome, chef&#45;crafted recipes. Right at your doorstep.</p>\n" +
    "\n" +
    "            <span class=\"hidden-xs\">\n" +
    "              <a href class=\"btn btn-green\"\n" +
    "                 track-sign-up track-click event-name=\"getstarted_main\" ng-click=\"goToSignUp();\">Get Started</a>\n" +
    "            </span>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-2\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"section-info-signup-form visible-xs\" ng-if=\"!isSignedIn\">\n" +
    "      <div class=\"container\">\n" +
    "        <gc-email-zip-signup-form click-event=\"getstarted_mainemailzip\"></gc-email-zip-signup-form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro\">\n" +
    "    <gc-press-logos></gc-press-logos>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro wrap-announcements\">\n" +
    "    <h3 class=\"main-title text-uppercase\">Explore new offerings</h3>\n" +
    "\n" +
    "    <div class=\"announcements-list row\">\n" +
    "      <!-- Family Announcement -->\n" +
    "      <div class=\"wrap-announcement col-sm-8\">\n" +
    "        <div class=\"announcement paleo\" ng-click='signUp()' track-click event-name=\"startpaleohome\">\n" +
    "          <!-- fallback for IE -->\n" +
    "          <div class=\"frosted-glass background-image\"></div>\n" +
    "\n" +
    "          <div class=\"caption-overlay\">\n" +
    "            <div class=\"wrap-caption full-width\">\n" +
    "              <p class=\"action-name text-uppercase\">start</p>\n" +
    "              <h2 class=\"plan text-uppercase\">paleo plan</h2>\n" +
    "              <h3 class=\"plan-desc\">Rich in animal proteins and fresh produce</h3>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Vegan Announcement -->\n" +
    "      <div class=\"wrap-announcement col-sm-4\">\n" +
    "        <div class=\"announcement vegan\" ng-click='signUp(\"veg1\")' track-click event-name=\"getveganhome\">\n" +
    "          <!-- fallback for IE -->\n" +
    "          <div class=\"frosted-glass background-image\"></div>\n" +
    "\n" +
    "          <div class=\"caption-overlay\">\n" +
    "            <div class=\"wrap-caption full-width\">\n" +
    "              <p class=\"action-name text-uppercase\">get</p>\n" +
    "              <h2 class=\"plan text-uppercase\">vegan</h2>\n" +
    "              <div class=\"plan-desc\">\n" +
    "                <div>Plant-based deliciousness</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro organic\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"short-content-container\">\n" +
    "          <img class=\"usda-organic\" src=\"//cdn.greenchef.com/assets/Icons/organic_seal@1x.79771cfb.png\" srcset=\"//cdn.greenchef.com/assets/Icons/organic_seal@2x.ffe16c9c.png 2x\" alt=\"USDA Organic\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\"/>\n" +
    "\n" +
    "          <p class=\"title\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\">Organic &amp; sustainable</p>\n" +
    "\n" +
    "          <p class=\"short-content center-block\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\">We carefully select the freshest seasonal ingredients, ensuring that each dinner is good for you &#8212; and the environment.</p>\n" +
    "\n" +
    "          <a href ui-sref=\"suppliers\" class=\"btn btn-yellow btn-supplier\" track-click event-name=\"meet_suppliers\">Meet Our Suppliers</a>\n" +
    "          <a href ui-sref=\"suppliers\" class=\"btn btn-yellow btn-learn-more\" track-click event-name=\"meet_suppliers\">Learn More</a>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro cook\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"short-content-container\">\n" +
    "          <img class=\"easy\" src=\"//cdn.greenchef.com/assets/Home/icon_30min@1x.d7e2d551.png\" srcset=\"//cdn.greenchef.com/assets/Home/icon_30min@2x.bdfb9a3f.png 2x\" alt=\"USDA Organic\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\"/>\n" +
    "\n" +
    "          <p class=\"title\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\">Easy, delicious recipes</p>\n" +
    "\n" +
    "          <p class=\"short-content center-block\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\">A diverse menu catered to your tastes. Just choose the plan that's right for you.</p>\n" +
    "\n" +
    "          <a href ui-sref=\"menus\" class=\"btn btn-red\" track-click event-name=\"whats_menu\">What's on the menu?</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro easy\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3 class=\"col-sm-12\">How we do dinner</h3>\n" +
    "      </div>\n" +
    "      <div class=\"row benefits\">\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box customize\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Pick your preferences</h4>\n" +
    "                <p>\n" +
    "                  Tell us what you like to eat. Vegan? Paleo? No problem.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box deliver\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Skip the store</h4>\n" +
    "                <p>\n" +
    "                  We'll send you fresh, organic ingredients.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box cook\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Cook, share &amp; enjoy</h4>\n" +
    "                <p>\n" +
    "                  Try new flavors and techniques. Done in about 30 minutes.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row get-started\">\n" +
    "        <a href class=\"btn btn-white\" ng-click=\"goToSignUp();\"\n" +
    "           track-sign-up track-click event-name=\"getstarted_how\">Get Started</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro diet\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info easy-container\">\n" +
    "      <p>Name your diet:</p>\n" +
    "\n" +
    "      <div class=\"underline-image\">\n" +
    "        <carousel interval=\"2000\">\n" +
    "          <slide ng-repeat=\"diet in diets\">\n" +
    "            <p class=\"diet-name\">{{diet}}</p>\n" +
    "          </slide>\n" +
    "        </carousel>\n" +
    "      </div>\n" +
    "\n" +
    "      <p class='we-got-it'>We've got it.</p>\n" +
    "\n" +
    "      <div class=\"center-block\">\n" +
    "        <a href ui-sref=\"menus\" class=\"btn btn-green\" track-click event-name=\"view_menu\">View the menu</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("landing/_how-does-gc-work.tpl.html","<section class=\"wrap-intro greenchef-work\">\n" +
    "  <h2 class=\"greenchef-work-title hidden-xs\">How does Green Chef work?</h2>\n" +
    "  <h2 class=\"greenchef-work-title visible-xs\">How does it work?</h2>\n" +
    "  <div class=\"section-info\">\n" +
    "    <div class=\"wrapper-content\">\n" +
    "      <div class=\"step-item\">\n" +
    "        <div class=\"step-item-thumbnail\">\n" +
    "          <img src=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/sign-up@1x.75333b19.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/sign-up@2x.a2af7639.png 2x\" alt=\"Join\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"step-item-info\">\n" +
    "          <h3 class=\"step-item-info-title\">Join</h3>\n" +
    "          <p class=\"step-item-info-desc\">Sign up, choose a delivery day, and that's it! You'll get convenient weekly deliveries right to your door.</p>\n" +
    "        </div>\n" +
    "      </div><!-- Join -->\n" +
    "\n" +
    "      <div class=\"step-item\">\n" +
    "        <div class=\"step-item-thumbnail\">\n" +
    "          <img src=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/skip-store@1x.4964ee4d.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/skip-store@2x.7f898b07.png 2x\" alt=\"Get\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"step-item-info\">\n" +
    "          <h3 class=\"step-item-info-title\">Get</h3>\n" +
    "          <p class=\"step-item-info-desc\">We deliver all you need to cook 3 {{mealPlan}} dinners for 2 people, including recipes and ingredients packed in a chilled box.</p>\n" +
    "        </div>\n" +
    "      </div><!-- Get -->\n" +
    "\n" +
    "      <div class=\"step-item\">\n" +
    "        <div class=\"step-item-thumbnail\">\n" +
    "          <img src=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/cooking@1x.3fe58a15.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/cooking@2x.d6c2b2ff.png 2x\" alt=\"Cook\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"step-item-info\">\n" +
    "          <h3 class=\"step-item-info-title\">Cook</h3>\n" +
    "          <p class=\"step-item-info-desc\">Our step-by-step recipes and pre-measured ingredients make cooking easy and fun. You'll have dinner ready in just about 30 mins.</p>\n" +
    "        </div>\n" +
    "      </div><!-- Cook -->\n" +
    "\n" +
    "      <div class=\"step-item\">\n" +
    "        <div class=\"step-item-thumbnail\">\n" +
    "          <img ng-show=\"$state.includes('vegan-landing')\" src=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/enjoy-vegan@1x.d3f6115e.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/enjoy-vegan@2x.1b7694a0.png 2x\" alt=\"Enjoy\"><!-- vegan -->\n" +
    "          <img ng-show=\"$state.includes('paleo-landing')\" src=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/enjoy-paleo@1x.66210c77.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/HowWorks/enjoy-paleo@2x.ffe1c8ec.png 2x\" alt=\"Enjoy\"><!-- paleo -->\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"step-item-info\">\n" +
    "          <h3 class=\"step-item-info-title\">Enjoy</h3>\n" +
    "          <p class=\"step-item-info-desc\">No explanation necessary—our food speaks for itself!</p>\n" +
    "        </div>\n" +
    "      </div><!-- Enjoy -->\n" +
    "    </div>\n" +
    "    <a href class=\"btn-landing btn-signup\" ng-click=\"getStarted()\" track-click event-name=\"signup{{mealPlan}}\">Sign Up</a>\n" +
    "  </div>\n" +
    "</section>")

$templateCache.put("landing/_why-greenchef.tpl.html","<section class=\"wrap-intro why-greenchef\">\n" +
    "  <h2 class=\"why-greenchef-title\">Why Green Chef is for you.</h2>\n" +
    "  <div class=\"section-info\">\n" +
    "    <div class=\"wrapper-content\">\n" +
    "      <div class=\"reason-item\">\n" +
    "        <div class=\"reason-item-thumbnail\">\n" +
    "          <img class=\"hidden-xs\" src=\"//cdn.greenchef.com/assets/MenusLanding/Whys/convenient@1x.e6e7e5dd.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/Whys/convenient@2x.831ca64a.png 2x\" alt=\"convenient\">\n" +
    "          <img class=\"visible-xs\" src=\"//cdn.greenchef.com/assets/MenusLanding/Whys/convenient_mobile@1x.6e738141.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/Whys/convenient_mobile@2x.255ffeef.png 2x\" alt=\"convenient\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"reason-item-info\">\n" +
    "          <h3 class=\"reason-item-info-title\">convenient</h3>\n" +
    "          <p class=\"reason-item-info-desc\">No shopping, no planning, no guesswork. Everything you need, delivered.</p>\n" +
    "        </div>\n" +
    "      </div><!-- convenient -->\n" +
    "\n" +
    "      <div class=\"reason-item\">\n" +
    "        <div class=\"reason-item-thumbnail\">\n" +
    "          <img class=\"hidden-xs\" src=\"//cdn.greenchef.com/assets/MenusLanding/Whys/healthy@1x.b0e4ab80.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/Whys/healthy@2x.69eb70a9.png 2x\" alt=\"clean\">\n" +
    "          <img class=\"visible-xs\" src=\"//cdn.greenchef.com/assets/MenusLanding/Whys/healthy_mobile@1x.1d914adf.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/Whys/healthy_mobile@2x.d55036ae.png 2x\" alt=\"clean\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"reason-item-info\">\n" +
    "          <h3 class=\"reason-item-info-title\">clean</h3>\n" +
    "          <p class=\"reason-item-info-desc\">Premium ingredients that are organic, GMO-free, and sustainably sourced.</p>\n" +
    "        </div>\n" +
    "      </div><!-- clean -->\n" +
    "\n" +
    "      <div class=\"reason-item\">\n" +
    "        <div class=\"reason-item-thumbnail\">\n" +
    "          <img class=\"hidden-xs\" src=\"//cdn.greenchef.com/assets/MenusLanding/Whys/easy@1x.87ff9fe5.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/Whys/easy@2x.72a07119.png 2x\" alt=\"easy\">\n" +
    "          <img class=\"visible-xs\" src=\"//cdn.greenchef.com/assets/MenusLanding/Whys/easy_mobile@1x.f1715b84.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/Whys/easy_mobile@2x.f6b404ba.png 2x\" alt=\"easy\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"reason-item-info\">\n" +
    "          <h3 class=\"reason-item-info-title\">easy</h3>\n" +
    "          <p class=\"reason-item-info-desc\">Pre-measured ingredients and quick, simple recipes that anyone can cook.</p>\n" +
    "        </div>\n" +
    "      </div><!-- easy -->\n" +
    "\n" +
    "      <div class=\"reason-item\">\n" +
    "        <div class=\"reason-item-thumbnail\">\n" +
    "          <img class=\"hidden-xs\" src=\"//cdn.greenchef.com/assets/MenusLanding/Whys/delicious@1x.551bcaee.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/Whys/delicious@2x.0c75fa73.png 2x\" alt=\"delicious\">\n" +
    "          <img class=\"visible-xs\" src=\"//cdn.greenchef.com/assets/MenusLanding/Whys/delicious_mobile@1x.2ea41fd6.png\" srcset=\"//cdn.greenchef.com/assets/MenusLanding/Whys/delicious_mobile@2x.6b303bb4.png 2x\" alt=\"delicious\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"reason-item-info\">\n" +
    "          <h3 class=\"reason-item-info-title\">delicious</h3>\n" +
    "          <p class=\"reason-item-info-desc\">New and exciting recipes plus house-made sauces infused with flavor.</p>\n" +
    "        </div>\n" +
    "      </div><!-- delicious -->\n" +
    "    </div>\n" +
    "    <a href=\"#\" class=\"btn-landing btn-start hidden-xs text-capitalize\">Start {{mealPlan}} Plan</a>\n" +
    "  </div>\n" +
    "</section>")

$templateCache.put("marketing/faq.tpl.html","<div class=\"frequently-asked-questions\">\n" +
    "  <div class=\"faq-container\">\n" +
    "    <h3 class=\"faq-title\">{{faq.title}}</h3>\n" +
    "    <div class=\"faq-content\">\n" +
    "      <ul class=\"questions-list\">\n" +
    "        <li class=\"question-item\" ng-repeat=\"item in faq.items\">\n" +
    "          <p class=\"item\">\n" +
    "            <span class=\"deital\" track-click event-name=\"{{item.event_name}}\">{{item.question}}</span>\n" +
    "            <button class=\"btn-expand\"\n" +
    "                    track-click event-name=\"{{item.event_name}}\"\n" +
    "                    ng-click=\"item.toggle = !item.toggle\"\n" +
    "                    ng-class=\"{'selected': item.toggle}\"></button>\n" +
    "          </p>\n" +
    "          <div class=\"answers\"\n" +
    "               ng-show=\"item.toggle\"\n" +
    "               ng-bind-html=\"item.answer\"></div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "\n" +
    "      <a href=\"https://help.greenchef.com/hc/en-us\" target=\"_blank\" class=\"btn-read-more-faq\" track-click event-name=\"{{eventNameReadMore}}\">READ MORE FAQs</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("marketing/get-started.tpl.html","<div class=\"get-started\">\n" +
    "  <h4 class=\"get-started-title\" ng-bind-html=\"getStartedTitle\"></h4>\n" +
    "  <button class=\"btn-get-started\" track-click event-name=\"{{eventNameGetStarted}}\" ng-click=\"getStartedOnclick()\">Get Started</button>\n" +
    "</div>\n" +
    "")

$templateCache.put("learn-more/meal-type.tpl.html","<div class=\"text\">\n" +
    "  <div class=\"cell\">\n" +
    "    <div class=\"name text-uppercase\">{{mealType.displayName}}</div>\n" +
    "    <div class=\"subtitle meal-subtitle hidden-xs\">{{mealType.subtitle}}</div>\n" +
    "    <div class=\"subtitle meal-subtitle visible-xs\">{{mealType.subtitle}}</div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"cost cell\">\n" +
    "    <div class=\"price\">${{getDollarAmount(mealType.cost)}}\n" +
    "      <span>{{getCents(mealType.cost)}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <p class=\"subtitle\">Per meal</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("learn-more/v3.learn-more.tpl.html","<div class=\"learn-more v3-page\" ng-class=\"{'has-banner': showBanner}\">\n" +
    "  <section class=\"wrap-learn main\">\n" +
    "    <div class=\"background-image\">\n" +
    "      <div class=\"easy-container\">\n" +
    "        <h2>amazing dinners</h2>\n" +
    "        <p>delivered weekly</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-learn sourcing\">\n" +
    "    <div class=\"background-image\">\n" +
    "      <div class=\"easy-container\">\n" +
    "        <h2>Responsible sourcing</h2>\n" +
    "        <p class=\"content\">Green Chef is a certified organic company by CCOF. From&nbsp;wild-caught salmon to GMO&#45;free soybeans, our ingredients are fresh and sustainably sourced.</p>\n" +
    "        <img src=\"//cdn.greenchef.com/assets/Icons/organic_seal@2x.ffe16c9c.png\" srcset=\"//cdn.greenchef.com/assets/Icons/organic_seal@2x.ffe16c9c.png 2x\" alt=\"USDA Organic\" />\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-learn delivery\">\n" +
    "    <div class=\"delivery-wrapper\">\n" +
    "      <div class=\"easy-container\">\n" +
    "        <h2>Convenient delivery</h2>\n" +
    "        <p>At your doorstep, when you want it.</p>\n" +
    "        <ul class=\"dark\">\n" +
    "          <li>Flexible delivery days you choose.</li>\n" +
    "          <li>No commitments ever. Skip weeks when you want to.</li>\n" +
    "          <li><a href ui-sref=\"eco\">Eco&#45;friendly packaging.</a></li>\n" +
    "          <li>Insulated, refrigerated boxes. No need to be home when it arrives.</li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"box\">\n" +
    "        <img src=\"//cdn.greenchef.com/assets/LearnMore/learnmore_box_image_v3@1x.30e3a035.jpg\" srcset=\"//cdn.greenchef.com/assets/LearnMore/learnmore_box_image_v3@2x.0280eac6.jpg 2x\" class=\"hidden-xs\"/>\n" +
    "        <img src=\"//cdn.greenchef.com/assets/LearnMore/learnmore_box_image_MOBILE_v3.c518f7a6.jpg\" class=\"visible-xs\" />\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-learn preferences\">\n" +
    "    <div class=\"background-image\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-sm-6 col-sm-offset-6 content\">\n" +
    "            <h2>Wholesome dinners, designed for you</h2>\n" +
    "            <p>Just choose your preferences, get your Green Chef box, then start cooking!</p>\n" +
    "            <ul class=\"light\">\n" +
    "              <li>Diverse recipes, thoughtfully crafted by our chefs.</li>\n" +
    "              <li>Tasty, balanced dinners ready in about 30 minutes.</li>\n" +
    "              <li>Menus that fit your lifestyle, including omnivore, carnivore, gluten&#45;free, vegetarian, vegan, paleo, and family&#45;style options.</li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-learn plans text-center\">\n" +
    "    <div class=\"container\">\n" +
    "      <h2>Meal Plans &amp; Pricing</h2>\n" +
    "      <p class=\"bold\">2&#45;Person Plans</p>\n" +
    "      <div ng-repeat=\"plan in twoPersonPlans\">\n" +
    "        <div ng-if=\"$index % rowSize === 0\"\n" +
    "             ng-init=\"rowData = mealTypes.slice($index, $index + rowSize)\">\n" +
    "          <div class=\"row standard-plans\">\n" +
    "            <div ng-repeat=\"mealType in rowData\" class=\"col-sm-4 meal-type\">\n" +
    "              <div ng-include=\"mealTypeUrl\"></div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-if=\"familyMealTypes.length>0\">\n" +
    "        <p class=\"bold\">Family Plans</p>\n" +
    "        <div ng-repeat=\"familyPlan in familyPlans\">\n" +
    "          <div ng-if=\"$index % rowSize === 0\"\n" +
    "               ng-init=\"rowData = familyMealTypes.slice($index, $index + rowSize)\">\n" +
    "            <div class=\"row family-plans\">\n" +
    "              <div ng-repeat=\"mealType in rowData\" class=\"col-sm-6 meal-type\">\n" +
    "                <div ng-include=\"mealTypeUrl\"></div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 get-started\">\n" +
    "          <a href ui-sref=\"sign-up\" class=\"btn btn-green\"\n" +
    "             track-sign-up track-click event-name=\"getstarted_learn\">Get Started</a>\n" +
    "        </div>\n" +
    "        <p class=\"col-sm-12 shipping\" ng-if=\"pricesIncludeShipping\">Shipping included.</p>\n" +
    "        <p class=\"col-sm-12 questions\">Questions? Visit our <a href=\"//help.greenchef.com\">FAQ</a></p>\n" +
    "      </div>\n" +
    "      <div class=\"recipe-image-left hidden-xs\"></div>\n" +
    "      <div class=\"recipe-image-right hidden-xs\"></div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("modal/confirm-modal.tpl.html","<form role=\"form\"\n" +
    "      class=\"form-horizontal confirm-modal\"\n" +
    "      name=\"confirmModal\"\n" +
    "      novalidate>\n" +
    "\n" +
    "    <div class=\"content\">\n" +
    "      <div class=\"container-fluid\" ng-show=\"!image\">\n" +
    "        <h2 class=\"dialog\" ng-html-compile=\"title\"></h2>\n" +
    "        <p class=\"caption\" ng-html-compile=\"caption\"></p>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"container-fluid\" ng-show=\"image\">\n" +
    "        <div class=\"row hidden-xs\">\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <h2 class=\"dialog\" ng-html-compile=\"title\"></h2>\n" +
    "            <p class=\"caption\" ng-html-compile=\"caption\"></p>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-2\">\n" +
    "            <img ng-src=\"{{image}}\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row visible-xs-block\">\n" +
    "          <div class=\"col-xs-12\"><h2 class=\"dialog\" ng-html-compile=\"title\"></h2></div>\n" +
    "          <div class=\"col-xs-8\">\n" +
    "            <p class=\"caption\" ng-html-compile=\"caption\"></p>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <img ng-src=\"{{image}}\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"actions clearfix has-cancel\">\n" +
    "        <button class=\"btn btn-green btn-small btn-ok\" ng-click=\"ok()\" ng-bind-html=\"okLabel\"></button>\n" +
    "        <button class=\"btn btn-green btn-small btn-cancel\" ng-click=\"cancel()\" ng-bind-html=\"cancelLabel\"></button>\n" +
    "    </div>\n" +
    "</form>")

$templateCache.put("modal/raf-modal.tpl.html","<div class=\"raf-modal\">\n" +
    "  <div class=\"btn-close\" ng-click=\"cancel()\" track-click event-name=\"RafPop_Close\">\n" +
    "    <div class=\"sr-only\">close</div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-4 hidden-xs\">\n" +
    "    <img class=\"raf-modal-dish-img\" src=\"//cdn.greenchef.com/assets/dish_image.a4def501.png\"/>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-8 col-xs-12\">\n" +
    "      <div class=\"raf-modal-text-container\">\n" +
    "        <div class=\"raf-modal-lg-text\">Share the Love!</div>\n" +
    "        <div class=\"raf-modal-md-text\">We'll give you $25 when you treat your friends to dinner</div>\n" +
    "        <div class=\"raf-modal-sm-text\">Invite your friends to join GreenChef, and for each one who joins and receives two deliveries we'll give you $25. How cool is that?</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <sharebuttons></sharebuttons>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("paleo/v3.paleo.tpl.html","<div class='home-page v3-page paleo-page'>\n" +
    "  <section class=\"wrap-intro main paleo-main\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-350\"></div>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"easy-container center-block\">\n" +
    "        <h2>Deliciously Paleo</h2>\n" +
    "      </div>\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"short-content-container\">\n" +
    "            <p class=\"short-content center-block\">Fresh, organic ingredients. Nourishing paleo recipes. Right at your doorstep.</p>\n" +
    "            <a href ui-sref=\"sign-up\" class=\"btn btn-green\"\n" +
    "               track-sign-up track-click event-name=\"getstarted_main\">Get Started</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-2\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro organic\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"short-content-container\">\n" +
    "          <img class=\"usda-organic\" src=\"//cdn.greenchef.com/assets/Icons/organic_seal@1x.79771cfb.png\" srcset=\"//cdn.greenchef.com/assets/Icons/organic_seal@2x.ffe16c9c.png 2x\" alt=\"USDA Organic\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\"/>\n" +
    "\n" +
    "          <p class=\"title\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\">Organic, healthy &amp; sustainable</p>\n" +
    "\n" +
    "          <p class=\"short-content center-block\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\">We handpick the freshest seasonal ingredients, ensuring that each meal is good for you &#8212; and the environment.</p>\n" +
    "          <a href ui-sref=\"sign-up\" class=\"btn btn-yellow btn-supplier\">Join Now</a>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro cook\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"short-content-container\">\n" +
    "          <img class=\"easy\" src=\"//cdn.greenchef.com/assets/Home/icon_30min@1x.d7e2d551.png\" srcset=\"//cdn.greenchef.com/assets/Home/icon_30min@2x.bdfb9a3f.png 2x\" alt=\"USDA Organic\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\"/>\n" +
    "\n" +
    "          <p class=\"title\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\">Easy, delicious recipes</p>\n" +
    "\n" +
    "          <p class=\"short-content center-block\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\">Three healthy recipes a week. A diverse menu catered to your tastes. Just choose the plan that's right for you.</p>\n" +
    "\n" +
    "          <a href ui-sref=\"on-the-menu\" class=\"btn btn-red\" track-click event-name=\"whats_menu\">What's on the menu?</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro easy\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3 class=\"col-sm-12\">How we do dinner</h3>\n" +
    "      </div>\n" +
    "      <div class=\"row benefits\">\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box customize\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Pick your preferences</h4>\n" +
    "                <p>\n" +
    "                  Tell us what you like to eat. Vegetarian? Gluten&#45;Free? No problem.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box deliver\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Skip the store</h4>\n" +
    "                <p>\n" +
    "                  We'll send you fresh, organic ingredients.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box cook\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Cook, share &amp; enjoy</h4>\n" +
    "                <p>\n" +
    "                  Try new flavors and techniques. Done in just 30 minutes.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row get-started\">\n" +
    "        <a href ui-sref=\"sign-up\" class=\"btn btn-white\"\n" +
    "           track-sign-up track-click event-name=\"getstarted_how\">Get Started</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"wrap-intro diet\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info easy-container\">\n" +
    "      <p>Name your diet:</p>\n" +
    "\n" +
    "      <div class=\"underline-image\">\n" +
    "        <carousel interval=\"2000\">\n" +
    "          <slide ng-repeat=\"diet in diets\">\n" +
    "            <p class=\"diet-name\">{{diet}}</p>\n" +
    "          </slide>\n" +
    "        </carousel>\n" +
    "      </div>\n" +
    "\n" +
    "      <p class='we-got-it'>We've got it.</p>\n" +
    "\n" +
    "      <div class=\"center-block\">\n" +
    "        <a href ui-sref=\"on-the-menu\" class=\"btn btn-green\" track-click event-name=\"view_menu\">View the menu</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("recipes/nutrition.tpl.html","<div class=\"col-md-4 nutrition-facts-wrapper\">\n" +
    "  <div class=\"nutrition-table\">\n" +
    "    <div class=\"nutrition-table-header\">\n" +
    "      <h3 class=\"nutrition-table-title\">Nutrition Facts</h3>\n" +
    "      <p>{{ ::nutrition.servingsPerContainer }} serving per container\n" +
    "      <p>\n" +
    "        <b>Serving size\n" +
    "          <span class=\"pull-right\"><span ng-if=\"nutrition.servingcup\">{{ ::nutrition.servingcup }} cup </span> ({{ ::nutrition.serving }})</span>\n" +
    "        </b>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <table class=\"nutrition-table-body\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th colspan=\"4\">\n" +
    "            <b>Amount per serving</b>\n" +
    "          </th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td colspan=\"4\" class=\"header-text\">\n" +
    "            <span class=\"pull-left\">\n" +
    "              <b>Calories</b>\n" +
    "            </span>\n" +
    "              <b>{{ ::nutrition.calories }}</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr class=\"thick-row\">\n" +
    "          <td colspan=\"4\">\n" +
    "            <b>% Daily Value*</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td colspan=\"3\">\n" +
    "            <b>Total Fat</b> {{ ::nutrition.totalFat.amount }}\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <b>{{ ::nutrition.totalFat.dailyValue }}</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td class=\"blank-cell\"></td>\n" +
    "          <td colspan=\"2\">\n" +
    "            Saturated Fat {{ ::nutrition.totalFat.items.saturatedFat.amount }}\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <b>{{ ::nutrition.totalFat.items.saturatedFat.dailyValue }}</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td class=\"blank-cell\"></td>\n" +
    "          <td colspan=\"2\">\n" +
    "            <i>Trans</i> Fat\n" +
    "            {{ ::nutrition.totalFat.items.transFat.amount }}\n" +
    "          </td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td colspan=\"3\">\n" +
    "            <b>Cholesterol</b> {{ ::nutrition.cholesterol.amount }}\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <b>{{ ::nutrition.cholesterol.dailyValue }}</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td colspan=\"3\">\n" +
    "            <b>Sodium</b> {{ ::nutrition.sodium.amount }}\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <b>{{ ::nutrition.sodium.dailyValue }}</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td colspan=\"3\">\n" +
    "            <b>Total Carbohydrate</b> {{ ::nutrition.totalCarbonhydrate.amount }}\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <b>{{ ::nutrition.totalCarbonhydrate.dailyValue }}</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td class=\"blank-cell\"></td>\n" +
    "          <td colspan=\"2\">\n" +
    "            Dietary Fiber {{ ::nutrition.totalCarbonhydrate.items.dietaryFiber.amount }}\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <b>{{ ::nutrition.totalCarbonhydrate.items.dietaryFiber.dailyValue }}</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td class=\"blank-cell\"></td>\n" +
    "          <td colspan=\"2\">\n" +
    "            Total Sugars {{ ::nutrition.totalCarbonhydrate.items.sugars.amount }}\n" +
    "          </td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td class=\"blank-cell\"></td>\n" +
    "          <td colspan=\"2\">\n" +
    "            <span class=\"indent-cell\"></span>Includes {{ nutrition.totalCarbonhydrate.items.addedSugars.amount || '0g'}} Added Sugars\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <b>{{ ::nutrition.totalCarbonhydrate.items.addedSugars.dailyValue }}</b>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr class=\"thick-end\">\n" +
    "          <td colspan=\"3\">\n" +
    "            <b>Protein</b> {{ ::nutrition.protein.amount }}\n" +
    "          </td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "          <td colspan=\"3\">\n" +
    "            Vitamin D {{ ::nutrition.vitaminD.amount }}\n" +
    "          </td>\n" +
    "          <td>{{ ::nutrition.vitaminD.dailyValue }}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td colspan=\"3\">\n" +
    "            Calcium {{ ::nutrition.calcium.amount }}\n" +
    "          </td>\n" +
    "          <td>{{ ::nutrition.calcium.dailyValue }}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td colspan=\"3\">\n" +
    "            Iron {{ ::nutrition.iron.amount }}\n" +
    "          </td>\n" +
    "          <td>{{ ::nutrition.iron.dailyValue }}</td>\n" +
    "        </tr>\n" +
    "        <tr class=\"thin-end\">\n" +
    "          <td colspan=\"3\">\n" +
    "            Potassium {{ ::nutrition.potassium.amount }}\n" +
    "          </td>\n" +
    "          <td>{{ ::nutrition.potassium.dailyValue }}</td>\n" +
    "        </tr>\n" +
    "\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "\n" +
    "    <p class=\"help-text thick-row\">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"col-md-8 ingredient-unification-wrapper\">\n" +
    "  <div class=\"unification-ingredient\">\n" +
    "    <p><strong>All Ingredients in this recipe:</strong></p>\n" +
    "    <p ng-bind-html=\"unificationIngredients\"></p>\n" +
    "  </div>\n" +
    "  <div class=\"allergens-info\">\n" +
    "    <p><strong>Allergen information:</strong></p>\n" +
    "    <p>{{ allergensInfo ? 'Contains ' + allergensInfo : 'No Allergens' }}</p>\n" +
    "    <p>\n" +
    "      <span ng-repeat=\"allergen in unificationAllergen\">\n" +
    "        <strong>{{ allergen.acronym | uppercase }} </strong>\n" +
    "        = <span class=\"text-capitalize\">{{ ::allergen.name }}{{$last ? '' : ', '}}</span>\n" +
    "      </span>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("recipes/recipes.tpl.html","<gc-discount-banner></gc-discount-banner>\n" +
    "<div class=\"container\">\n" +
    "  <div ng-repeat=\"alert in alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "    {{alert.msg}}\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"recipe-page-wrapper\" ng-show=\"recipePage\" itemscope itemtype=\"http://schema.org/Recipe\">\n" +
    "  <section class=\"recipe-page-summary\" ng-if=\"recipePage\">\n" +
    "    <div ui-view=\"summary\"></div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"recipe-page-nutrition\">\n" +
    "    <div class=\"container section-shadow\" ui-view=\"nutrition\"></div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"recipe-page-related-recipes\">\n" +
    "    <div class=\"container\" ui-view=\"relatedRecipes\"></div>\n" +
    "  </section>\n" +
    "\n" +
    "</div>\n" +
    "")

$templateCache.put("recipes/related-recipes.tpl.html","<!-- Related Recipes -->\n" +
    "<div class=\"related-list section-shadow\" ng-if=\"relatedRecipes.length\">\n" +
    "  <h3 class=\"related-title subheading\" >More recipes you&rsquo;ll love</h3>\n" +
    "  <ul class=\"related-recipes\">\n" +
    "    <li ng-repeat='recipe in relatedRecipes' class=\"related-item\">\n" +
    "      <a ng-href=\"recipes/{{recipe.recipeVanity}}\" ng-click=\"moreRecipes()\" itemprop=\"relatedItem\">\n" +
    "        <div class=\"thumbnail wrap-thumbnail-related-item\">\n" +
    "          <img ng-src=\"{{recipe.thumbnailImageUrl}}\"\n" +
    "               alt=\"{{recipe.shortName}}\"\n" +
    "               class=\"img-responsive related-photo\"/>\n" +
    "\n" +
    "          <div class=\"caption caption-realted-item\">\n" +
    "            <div class=\"wrap-content\">\n" +
    "              <h4 class=\"meal-name\">{{recipe.shortName}}</h4>\n" +
    "              <p class=\"meal-intro\">{{recipe.mealIntro}}</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<!-- End Related Recipes -->\n" +
    "\n" +
    "<!-- Facebook comments -->\n" +
    "<div class=\"community-tips section-shadow\" ng-class=\"{ 'full-width': relatedRecipes.length == 0 }\">\n" +
    "  <h3 class=\"community-title subheading\">Green Chef Community tips</h3>\n" +
    "  <div fb-comments class=\"fb-comments\" data-width=\"100%\" data-numposts=\"5\" data-colorscheme=\"light\"></div>\n" +
    "</div>\n" +
    "<!-- End Facebook comments -->")

$templateCache.put("recipes/summary.tpl.html","<div class=\"container section-shadow\">\n" +
    "  <!-- Recipe Page Header -->\n" +
    "  <div class=\"container recipe-page-header\">\n" +
    "    <div class=\"recipe-page-header-row\">\n" +
    "      <div class=\"wrap-recipe-page-title\">\n" +
    "        <h2 class=\"recipe-page-title\">\n" +
    "          <span data-fittext data-fittext-max=\"34\" itemprop=\"name\">\n" +
    "            {{recipePage.shortName}}\n" +
    "          </span>\n" +
    "        </h2>\n" +
    "        <p class=\"recipe-page-sub-title\">{{recipePage.mealIntro}}</p>\n" +
    "      </div>\n" +
    "      <div class=\"wrap-get-recipe\" ng-if=\"recipePage.pdfUrl\">\n" +
    "        <a target=\"_blank\" href=\"{{recipePage.pdfUrl || '#'}}\" class=\"btn btn-default-green btn-action-white\">View Recipe Card</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!-- End Recipe Page Header -->\n" +
    "\n" +
    "  <!-- Recipe Page Introduction -->\n" +
    "  <div class=\"container recipe-page-introduction\">\n" +
    "    <!-- Recipe Page Photo -->\n" +
    "    <div class=\"row wrap-plated-photo\">\n" +
    "      <img class=\"img-responsive\" ng-src=\"{{recipePage.platedPhoto}}\" alt=\"{{recipePage.shortName}}\" itemprop=\"image\">\n" +
    "    </div>\n" +
    "    <!-- End Recipe Page Photo -->\n" +
    "\n" +
    "    <div class=\"row wrap-description\">\n" +
    "      <!-- Social Links -->\n" +
    "      <div class=\"col-xs-12 col-md-6 wrap-social-list\">\n" +
    "        <div class=\"wrap-collapse\" collapse-list>\n" +
    "          <a class=\"collapse-button visible-xs\"></a>\n" +
    "          <ul class=\"social-list\">\n" +
    "            <li>\n" +
    "              <a class=\"social-link share-email\"\n" +
    "                href=\"mailto:?subject=Subject&body={{socialShareText}}\"\n" +
    "                ng-click=\"shareEmail()\"\n" +
    "                  ></a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a class=\"social-link fb\"\n" +
    "                 socialshare\n" +
    "                 socialshare-provider=\"facebook\"\n" +
    "                 socialshare-url=\"{{socialShareUrl}}\"\n" +
    "                 ng-click=\"shareFacebook()\"></a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a class=\"social-link twitter\"\n" +
    "                 socialshare\n" +
    "                 socialshare-provider=\"twitter\"\n" +
    "                 socialshare-text=\"I'm cooking {{ recipePage.shortName }} with @GreenChef \"\n" +
    "                 socialshare-url=\"{{socialShareUrl}}\"\n" +
    "                 ng-click=\"shareTwitter()\"></a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a class=\"social-link google-plus\"\n" +
    "                 socialshare\n" +
    "                 socialshare-provider=\"google+\"\n" +
    "                 socialshare-url=\"{{socialShareUrl}}\"\n" +
    "                 ng-click=\"shareGoogle()\"></a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <a class=\"social-link pinterest\"\n" +
    "                 pinterest-share\n" +
    "                 socialshare-text=\"socialShareText\"\n" +
    "                 socialshare-url=\"socialShareUrl\"\n" +
    "                 socialshare-media=\"recipePage.platedPhoto\"\n" +
    "                 ng-click=\"sharePinterest()\"></a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- End Social Links -->\n" +
    "\n" +
    "\n" +
    "    <!-- Meal Introduction -->\n" +
    "    <div class=\"col-xs-12 col-md-6 wrap-meal-intro\">\n" +
    "      <p class=\"meal-intro\" ng-read-more data=\"recipePage.blurb\" callback=\"readMoreCallback\">\n" +
    "        {{recipePage.blurb}}\n" +
    "      </p>\n" +
    "\n" +
    "        <div class=\"diet-tags\" ng-show=\"recipePage.dietTags.length\">\n" +
    "          <span class=\"tag-title\">Diets: </span>\n" +
    "          <span class=\"tag-value\" ng-repeat=\"tag in recipePage.dietTags\">{{tag}}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- End Meal Introduction -->\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Stats information -->\n" +
    "    <div class=\"stats-infos\">\n" +
    "      <ul class=\"stats-list\">\n" +
    "        <li>\n" +
    "          <p class=\"stats-value\">\n" +
    "            <span class=\"clock-icon\"></span><time datetime=\"{{ 'PT' + (recipePage.stats.minutes || 0) + 'M' }}\" itemprop=\"cookTime\">{{ recipePage.stats.minutes || 0 }}</time>\n" +
    "          </p>\n" +
    "          <p class=\"stats-name\">Minutes</p>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <p class=\"stats-value\">\n" +
    "            <span class=\"servings-icon\"></span>\n" +
    "            <span itemprop=\"recipeYield\">{{ recipePage.stats.servings || 0 }}</span>\n" +
    "          </p>\n" +
    "          <p class=\"stats-name\">Servings</p>\n" +
    "        </li>\n" +
    "        <li itemprop=\"nutrition\" itemscope itemtype=\"http://schema.org/NutritionInformation\">\n" +
    "          <p class=\"stats-value\" itemprop=\"calories\">{{ recipePage.stats.calories || 0 }}</p>\n" +
    "          <p class=\"stats-name\">Calories<span class=\"hidden-xs\"> Per Serving</span></p>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <!-- End Stats information -->\n" +
    "\n" +
    "    <div class=\"hidden\">\n" +
    "      <a ng-href=\"{{ socialShareUrl }}\" itemprop=\"url\"></a>\n" +
    "      <span itemprop=\"author\" itemscope itemtype=\"http://schema.org/Person\">\n" +
    "        <span itemprop=\"name\">green chef</span>\n" +
    "      </span>\n" +
    "      <span itemprop=\"recipeCategory\">dinner</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("password-reset/0-send-reset-email.tpl.html","<div class='wrap-reset-password v3-page' ng-class=\"{'has-banner-padding': showBanner}\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"inner-container\">\n" +
    "      <form id=\"reset-password-form\"\n" +
    "            name='resetPasswordForm'\n" +
    "            ng-submit=\"submitReset(resetPasswordForm)\"\n" +
    "            class=\"form-horizontal col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2 reset-password-form v3-form\"\n" +
    "            ng-class=\"resetSubmitted ? 'validate' : ''\"\n" +
    "            novalidate>\n" +
    "        <h2 class=\"upper\">Reset Password</h2>\n" +
    "        <p class='extra-emphasis'>Enter the email associated with your account and click Next.\n" +
    "          We will send you a link to change your password.</p>\n" +
    "\n" +
    "\n" +
    "        <div>\n" +
    "          <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2\" ng-class=\"alert.type\">\n" +
    "            <button type=\"button\" class=\"close\" ng-click=\"closeAlert()\">x</button>\n" +
    "            {{alert.msg}}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-sm-12\">\n" +
    "            <label for=\"email\">Email</label>\n" +
    "            <label class='error' ng-show=\"resetSubmitted\">{{ getError(resetPasswordForm.email.$error) }}</label>\n" +
    "            <input type=\"email\" placeholder=\"Email\" name=\"email\" ng-model='email' class=\"form-control\" required />\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group button-group\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "            <button class=\"btn btn-green btn-signin\">Next</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("password-reset/1-reset-email-sent.tpl.html","<div class='wrap-reset-password v3-page' ng-class=\"{'has-banner-padding': showBanner}\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"inner-container\">\n" +
    "      <form id=\"reset-password-form\"\n" +
    "            name='resetPasswordForm'\n" +
    "            ng-submit=\"submitReset(resetPasswordForm)\"\n" +
    "            class=\"form-horizontal col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2 reset-password-form v3-form\"\n" +
    "            ng-class=\"resetSubmitted ? 'validate' : ''\"\n" +
    "            novalidate>\n" +
    "        <h2 class=\"upper\">Reset Password</h2>\n" +
    "        <p class='extra-emphasis'>We have emailed you instructions on how to reset your password.</p>\n" +
    "        <p class='extra-emphasis'>If you did not receive an email from us, please email support at <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>.</p>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("password-reset/2-enter-new-password.tpl.html","<div class='wrap-reset-password v3-page' ng-class=\"{'has-banner-padding': showBanner}\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"inner-container\">\n" +
    "      <form id=\"reset-password-form\"\n" +
    "            name='changePasswordForm'\n" +
    "            ng-submit=\"submitPassword(changePasswordForm)\"\n" +
    "            class=\"form-horizontal col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2 reset-password-form v3-form\"\n" +
    "            ng-class=\"changeSubmitted ? 'validate' : ''\"\n" +
    "            novalidate>\n" +
    "        <h2 class=\"upper\">Reset Password</h2>\n" +
    "        <p class='extra-emphasis'>Select a new password.</p>\n" +
    "\n" +
    "\n" +
    "        <div>\n" +
    "          <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2\" ng-class=\"alert.type\">\n" +
    "            <button type=\"button\" class=\"close\" ng-click=\"closeAlert()\">x</button>\n" +
    "            {{alert.msg}}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-md-12 col-sm-12\">\n" +
    "            <label for=\"password\">New Password</label>\n" +
    "            <label class='error' ng-show=\"changeSubmitted\">{{ getError(changePasswordForm.password.$error) }}</label>\n" +
    "            <input id=\"password\"\n" +
    "                   name=\"password\" ng-model='password' class=\"form-control\"\n" +
    "                   type=\"password\" required/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-md-12 col-sm-12\">\n" +
    "            <label for=\"passwordConfirm\">Confirm Password</label>\n" +
    "            <label class='error' ng-show=\"changeSubmitted\">{{ getError(changePasswordForm.passwordConfirm.$error) }}</label>\n" +
    "            <input id=\"passwordConfirm\"\n" +
    "                   name=\"passwordConfirm\" ng-model='passwordConfirm'\n" +
    "                   match=\"password\"\n" +
    "                   class=\"form-control\"\n" +
    "                   type=\"password\"/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group button-group\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "            <button class=\"btn btn-green btn-signin\">Set New Password</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("password-reset/3-reset-redirects-preferences.tpl.html","<form class=\"v3-form\">\n" +
    "  <div class=\"close\" ng-click=\"closeResumeModal()\"></div>\n" +
    "  <p class=\"note text-center\">Your email doesn't have a password yet, please continue signing up by clicking the button below. Thanks!</p>\n" +
    "  <div class=\"text-center\">\n" +
    "    <button class=\"btn btn-general btn-green\" ng-click=\"resumeSignUpModal()\">Resume Sign Up</button>\n" +
    "  </div>\n" +
    "</form>\n" +
    "")

$templateCache.put("referral/referral-landing.tpl.html","<div class='referral-landing'>\n" +
    "  <gc-discount-banner></gc-discount-banner>\n" +
    "  <section class=\"referral-landing-header-banner\">\n" +
    "  </section>\n" +
    "  <section class=\"treat-friends\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "          <div class=\"treat-friends-banner\">\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7 invite-friends\">\n" +
    "          <h2>Invite Friends, Earn $25</h2>\n" +
    "          <p class=\"give-meals\">Give meals to earn meals.\n" +
    "            We'll credit your account $25 for every friend who signs up and gets their second delivery.*</p>\n" +
    "          <p class=\"see-terms\">See <a href ui-sref=\"terms\">Terms of Service</a> for full program details.</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-5 get-started-column\">\n" +
    "          <a class=\"btn btn-green btn-small\" href ui-sref=\"sign-up\">Get Started</a>\n" +
    "          <p class=\"sign-up-info\"><span class=\"sign-up-notify\">Already have an account?</span> <a ui-sref=\"sign-in\" class=\"sign-in-here\">Sign in here</a></p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"more-info\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <article class=\"col-sm-4 more-info-blurb\">\n" +
    "          <div class='measuring-cup home-icon'></div>\n" +
    "          <div class='title'><h2>Organic recipes,<br/>designed for you</h2></div>\n" +
    "          <p>Let us do the shopping and planning. We send you all you need to make 3&nbsp;chef-crafted dinners each week:\n" +
    "            pre&#8209;measured, prepped ingredients with recipes catered to your preferences. </p>\n" +
    "\n" +
    "        </article>\n" +
    "        <article class=\"col-sm-4 more-info-blurb\">\n" +
    "          <div class='truck home-icon'></div>\n" +
    "          <div class='title'><h2>Convenient delivery</h2></div>\n" +
    "          <p>Delivered when and where you want it. Your ingredients come in a refrigerated box,\n" +
    "            so they stay fresh even if you're not home when the package arrives.</p>\n" +
    "\n" +
    "        </article>\n" +
    "        <article class=\"col-sm-4 more-info-blurb\">\n" +
    "          <div class='calendar home-icon'></div>\n" +
    "          <div class='title'><h2>No commitment</h2></div>\n" +
    "          <p>No minimum subscription. Skip any week, for any reason, with our easy account controls. </p>\n" +
    "\n" +
    "        </article>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "</div>\n" +
    "")

$templateCache.put("share-buttons/share-buttons.tpl.html","<div class=\"share-button-container\">\n" +
    "  <div class=\"share-buttons share-buttons-desktop hidden-xs clearfix\">\n" +
    "    <a class=\"share-btn facebook\" ng-click=\"shareFacebook()\" track-click event-name=\"RaFPop_FB\">Share</a>\n" +
    "    <a class=\"share-btn twitter\" ng-click=\"shareTwitter()\" track-click event-name=\"RaFPop_Twt\">Tweet</a>\n" +
    "    <a class=\"share-btn google\" ng-click=\"shareGoogle()\" track-click event-name=\"RaFPop_G\">Share</a>\n" +
    "    <a class=\"share-btn email\" ng-click=\"shareEmail()\" track-click event-name=\"RaFPop_Email\">Email</a>\n" +
    "    <a class=\"share-btn nextdoor\"\n" +
    "        href=\"http://nextdoor.com\"\n" +
    "        target=\"_blank\"\n" +
    "        ng-click=\"goToNextdoor()\" track-click event-name=\"RafPop_Next\">Nextdoor</a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"share-buttons share-buttons-mobile visible-xs-block clearfix\">\n" +
    "    <a class=\"share-btn facebook\" ng-click=\"shareFacebook()\" track-click event-name=\"RaFPop_FB\">Facebook</a>\n" +
    "    <a class=\"share-btn twitter\" ng-click=\"shareTwitter()\" track-click event-name=\"RaFPop_Twt\">Twitter</a>\n" +
    "    <a class=\"share-btn google\" ng-click=\"shareGoogle()\" track-click event-name=\"RaFPop_G\">Google+</a>\n" +
    "    <a class=\"share-btn email\" ng-click=\"shareEmail()\" track-click event-name=\"RaFPop_Email\">Email</a>\n" +
    "    <a class=\"share-btn nextdoor\"\n" +
    "        href=\"http://nextdoor.com\"\n" +
    "        target=\"_blank\"\n" +
    "        ng-click=\"goToNextdoor()\" track-click event-name=\"RafPop_Next\">Nextdoor</a>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"share-link-container\">\n" +
    "    <div class=\"share-link-label\">OR SHARE YOUR LINK</div>\n" +
    "\n" +
    "    <input class=\"share-link-input\"\n" +
    "        onClick=\"this.setSelectionRange(0, this.value.length)\"\n" +
    "        value=\"{{linkData.linkUrl}}\"\n" +
    "        id=\"referralLink\" readonly/>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("shared/debug-panel.tpl.html","<div class=\"debug-panel\"\n" +
    "     ng-show=\"showDebugPanel\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">User</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table>\n" +
    "        <tr>\n" +
    "          <td>Name</td>\n" +
    "          <td>{{user.firstName}} {{user.lastName}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Email</td>\n" +
    "          <td>{{user.email}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Signup State</td>\n" +
    "          <td>{{user.signupState}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Delivery State</td>\n" +
    "          <td>{{user.deliveryState}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Orgunit</td>\n" +
    "          <td>{{user.orgunit.orgunitCode }}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Pricing Sheet</td>\n" +
    "          <td>{{user.pricingSheet.name}}</td>\n" +
    "        </tr>\n" +
    "        <tr ng-if=\"user.signupCoupon.code\">\n" +
    "          <td>Signup Coupon</td>\n" +
    "          <td>{{user.signupCoupon.code}} ({{user.signupCoupon.claimMethod}})</td>\n" +
    "        </tr>\n" +
    "        <tr ng-if=\"user.referralProgram.signupRedemption\">\n" +
    "          <td>Referral Redeemed From</td>\n" +
    "          <td>{{user.referralProgram.signupRedemption.sender.email}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Meal Preference</td>\n" +
    "          <td>{{user.order.mealPreference}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td># of Meals</td>\n" +
    "          <td>{{user.order.numMeals}} (for {{user.order.numPeople}} people)</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>First Delivery Date</td>\n" +
    "          <td>{{user.order.firstDeliveryDate | amDateFormat: \"dddd, MMMM Do\"}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Delivery Window</td>\n" +
    "          <td>{{user.order.deliveryWindow | capitalizeFirst }}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>Shipping Day</td>\n" +
    "          <td>{{user.order.shippingDay | capitalizeFirst }}</td>\n" +
    "        </tr>\n" +
    "        <tr ng-if=\"user.order.frequencyEnabled\">\n" +
    "          <td>Frequency</td>\n" +
    "          <td>Every {{user.order.frequency}} weeks, starting {{user.order.frequencyStartDate}}</td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-primary\" ng-if=\"!!user.testGroups\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">A/B Test Groups</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table>\n" +
    "        <tr ng-repeat=\"(key, value) in user.testGroups.tests\">\n" +
    "          <td>{{key}}</td>\n" +
    "          <td>{{value}}</td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-primary\" ng-if=\"hasCookieTests()\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">A/B Test Cookies</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table>\n" +
    "        <tr ng-repeat=\"(key, value) in cookieTests\">\n" +
    "          <td>{{key}}</td>\n" +
    "          <td>{{value}}</td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "      <input type=\"button\" class=\"btn btn-warning\" ng-click=\"clearCookies()\" value=\"Clear\"></input>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">URL Params</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table>\n" +
    "        <tr ng-repeat=\"(key, value) in urlParams\">\n" +
    "          <td>{{key}}</td>\n" +
    "          <td>{{value}}</td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-primary\" ng-if=\"recentEvents.length > 0\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">Recent Log Events</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table>\n" +
    "        <tr ng-repeat=\"event in recentEvents\">\n" +
    "          <td>{{event.event}}</td>\n" +
    "          <td>{{event.data.name}}</td>\n" +
    "          <td>{{event.data.url}}</td>\n" +
    "          <td>{{event.data.userId}}</td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"debug-panel-toggle\"\n" +
    "     ng-click=\"togglePanel()\"\n" +
    "     ng-if=\"enableDebugPanel\"></div>\n" +
    "")

$templateCache.put("shared/loading-state.tpl.html","<div class=\"wrap-working-state clearfix\">\n" +
    "  <div class=\"working-state text-uppercase\">\n" +
    "    <img class=\"spin-loader\" src=\"//cdn.greenchef.com/assets/Icons/spin_circle.f7fe4187.png\">\n" +
    "    <span>{{text || 'Working...'}}</span>\n" +
    "  </div>\n" +
    "</div>")

$templateCache.put("shared/press-logos.tpl.html","<div class=\"press-logos press-logos-desktop\">\n" +
    "  <span class=\"logo logo-{{logo.name}}\" ng-repeat=\"logo in pressLogos\">\n" +
    "    <img ng-src=\"{{logo.url}}\" ng-srcset=\"{{ logo.urlRetina}} 2x\" alt=\"{{logo.name}}\" />\n" +
    "  </span>\n" +
    "</div>\n" +
    "<div class=\"press-logos press-logos-mobile\">\n" +
    "  <span class=\"logo logo-{{logo.name}}\" ng-hide=\"logo.name === 'yahoo'\" ng-repeat=\"logo in pressLogos\">\n" +
    "    <img ng-src=\"{{logo.urlMobile}}\" ng-srcset=\"{{ logo.urlMobileRetina}} 2x\" alt=\"{{logo.name}}\" />\n" +
    "  </span>\n" +
    "</div>")

$templateCache.put("shared/v2.email-capture-banner.tpl.html","<section class=\"v2 v2-page banner email-capture-banner\" ng-if=\"showBanner\">\n" +
    "  <div class=\"banner-content container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <div ng-switch=\"page\">\n" +
    "          <div class=\"start\" ng-switch-when=\"start\">\n" +
    "            <h2>Pandora Listeners</h2>\n" +
    "            <p>\n" +
    "              Enter your email<br/>\n" +
    "              To receive a coupon for <em>4 meals free</em>!\n" +
    "            </p>\n" +
    "            <form id=\"email-capture-form\"\n" +
    "                  name=\"emailCaptureForm\"\n" +
    "                  ng-submit=\"submitEmail(emailCaptureForm)\"\n" +
    "                  ng-show=\"!inSignup\"\n" +
    "                  novalidate\n" +
    "                >\n" +
    "\n" +
    "              <div>\n" +
    "                <div ng-repeat=\"alert in alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "                  <button type=\"button\" class=\"close\" ng-click=\"closeAlert()\">x</button>\n" +
    "                  <span ng-html-compile=\"alert.msg\"></span>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <input type=\"email\"\n" +
    "                     id=\"email\" name=\"email\"\n" +
    "                     ng-model=\"params.email\"\n" +
    "                     required\n" +
    "                     placeholder=\"Email address\"\n" +
    "                     class=\"form-control\"/>\n" +
    "              <button class=\"btn\" type=submit>Go</button>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"congrats\" ng-switch-when=\"congrats\" ng-if=\"!inSignup\">\n" +
    "            <h2>Congratulations</h2>\n" +
    "            <p>\n" +
    "              You're getting 4 free meals!<br/>\n" +
    "              Check your email, or redeem it now:\n" +
    "            </p>\n" +
    "            <a class=\"btn btn-green\"\n" +
    "               ng-click=\"redeemNow()\">Redeem Now</a>\n" +
    "\n" +
    "          </div>\n" +
    "          <div class=\"no-delivery\" ng-switch-when=\"no-delivery\">\n" +
    "            <h2>Pandora Listeners</h2>\n" +
    "            <p>\n" +
    "              Unfortunately we do not currently serve your area.\n" +
    "              </p>\n" +
    "            <p>\n" +
    "              We're working hard to expand our delivery range and will be sure to reach out\n" +
    "              when we are in your area.\n" +
    "            </p>\n" +
    "            <a class=\"btn btn-green\" ng-click=\"close()\">Close</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>")

$templateCache.put("shared/v3.discount-banner.tpl.html","<section class=\"v3 v3-page discount-banner banner\"\n" +
    "         ng-if=\"showBanner\"\n" +
    "         ng-class=\"{\n" +
    "            notext: notext\n" +
    "          }\"\n" +
    "         ng-click=\"clickBanner()\">\n" +
    "  <div class=\"banner-content\">\n" +
    "    <span ng-show=\"!signupBanner\" ng-bind-html=\"message\" class=\"message\"></span>\n" +
    "    <span ng-show=\"signupBanner\" ng-bind-html=\"signupMessage\" class=\"message\"></span>\n" +
    "    <span ng-if=\"!coupon.valid\">\n" +
    "      <span>Get a new deal by signing up.</span>\n" +
    "      <span class=\"get-started-arrow\"></span>\n" +
    "    </span>\n" +
    "    <a ng-if=\"showButton && !signupBanner\"\n" +
    "       href ui-sref='sign-up'\n" +
    "       track-sign-up>\n" +
    "      <span class=\"hidden-xs\">Get Started</span>\n" +
    "      <span class=\"get-started-arrow\"></span>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</section>\n" +
    "")

$templateCache.put("shared/v3.fixed-header.tpl.html","<header class=\"navbar v3 main-header\">\n" +
    "  <gc-discount-banner class=\"discount-banner-desktop\"></gc-discount-banner>\n" +
    "  <gc-discount-banner class=\"discount-banner-mobile\"\n" +
    "    spark-scroll-animate=\"{\n" +
    "      60: {'downAddClass,upRemoveClass': 'scroll-down'}\n" +
    "    }\"></gc-discount-banner>\n" +
    "  <hr class=\"line-main-navbar\" ng-show=\"!navCollapsed\">\n" +
    "  <!-- hide navigation bar in sign-up v2 flow -->\n" +
    "  <div ng-show=\"showDefaultNavBars\">\n" +
    "    <div class=\"floater-nav marketing-floater\" spark-scroll-animate=\"{\n" +
    "                  120: {'downAddClass,upRemoveClass': 'floater-has-banner'}\n" +
    "                }\"\n" +
    "                ng-include=\"navbarInnerUrl\" ng-show=\"showBanner\">\n" +
    "    </div>\n" +
    "    <div class=\"floater-nav has-no-banner marketing-floater\" spark-scroll-animate=\"{\n" +
    "                  86: {'downAddClass,upRemoveClass': 'floater-has-no-banner'}\n" +
    "                }\"\n" +
    "                ng-include=\"navbarInnerUrl\" ng-show=\"!showBanner\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- logo section header, show in sign-up v2, vegan landing -->\n" +
    "  <div class=\"header-logo-section\" ng-show=\"!showDefaultNavBars\" ng-class=\"{'has-banner': showBanner}\">\n" +
    "    <a href ui-sref=\"home\" class=\"logo-brand\" ng-class=\"{'horizontal-logo': isFloater}\"></a>\n" +
    "  </div>\n" +
    "</header>\n" +
    "")

$templateCache.put("shared/v3.footer.tpl.html","\n" +
    "<!-- hide sitemap in sign-up v2 flow -->\n" +
    "<div class=\"footer-links\" ng-if=\"showSiteMap\">\n" +
    "  <div class=\"container inner-container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-3 about-us\">\n" +
    "        <div class=\"title\"><h2 class=\"headline upper\">About Green Chef</h2></div>\n" +
    "        <ul class=\"footer-nav-list option-title\">\n" +
    "          <li>\n" +
    "            <a href ui-sref=\"menus.main\">This Week's Recipes</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href ui-sref=\"eco\">Eco-Friendly Packaging</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a target=\"_blank\" href=\"http://blog.greenchef.com\">Blog</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a target=\"_blank\" href=\"https://www.hellofresh.com/careers/locations\">Careers</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a target=\"_blank\" href=\"https://blog.greenchef.com/affiliate-program\">Affiliate</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-sm-3\">\n" +
    "        <div class=\"title\"><h2 class=\"headline upper\">Account</h2></div>\n" +
    "        <ul class=\"footer-nav-list option-title\">\n" +
    "          <li>\n" +
    "            <a href ui-sref=\"sign-up\">Sign Up</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href ng-click=\"goToMyAccount()\">My Account</a>\n" +
    "          </li>\n" +
    "\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-sm-3\">\n" +
    "        <div class=\"title\"><h2 class=\"headline upper\">Support</h2></div>\n" +
    "        <ul class=\"footer-nav-list option-title\">\n" +
    "          <li>\n" +
    "            <a target=\"_blank\" href=\"//help.greenchef.com/hc\">FAQs</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a target=\"_blank\" href=\"//help.greenchef.com/hc/en-us/requests/new\">Contact Us</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-sm-3 find-us-on\">\n" +
    "        <div class=\"title\"><h2 class=\"headline upper\">Find Us On</h2></div>\n" +
    "        <a href=\"https://twitter.com/GreenChef\" target=\"_blank\" class=\"social-link twitter\"></a>\n" +
    "        <a href=\"https://www.pinterest.com/green_chef/\" target=\"_blank\" class=\"social-link pinterest\"></a>\n" +
    "        <a href=\"https://instagram.com/greenchef/\" target=\"_blank\" class=\"social-link instagram\"></a>\n" +
    "        <a href=\"https://www.facebook.com/GreenChefPage\"target=\"_blank\" class=\"social-link fb\"></a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"footer-terms\" ng-if=\"showFooter\">\n" +
    "  <div class=\"container inner-container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"text-center\">\n" +
    "        <span class=\"copyright\">\n" +
    "            &copy; {{ currentYear }} Green Chef Corporation - Certified Organic by CCOF. All Rights Reserved\n" +
    "        </span>\n" +
    "        <span class=\"privacy\">\n" +
    "          <a href ui-sref=\"privacy\">Privacy Policy</a>\n" +
    "        </span>\n" +
    "        <span class=\"terms\">\n" +
    "          <a href ui-sref=\"terms\">Terms of Service</a>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"footer-person-landing\" ng-if=\"showFooterLanding\">\n" +
    "  <div class=\"container inner-container\">\n" +
    "    <div class=\"row\">\n" +
    "      <ul class=\"list-inline footer-landing-list\">\n" +
    "        <li>\n" +
    "          <p>(888) 236-7295</p>\n" +
    "        </li>\n" +
    "        <li class=\"hidden-xs\" track-click event-name=\"footerhelp\">\n" +
    "          <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>\n" +
    "        </li>\n" +
    "        <li track-click event-name=\"footerfaq\">\n" +
    "          <a target=\"_blank\" href=\"//help.greenchef.com/hc\">FAQ</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a href ng-if=\"$state.current.name === 'vegan-landing'\" track-click event-name=\"footerveganmenu\" ui-sref=\"menus.vegan\">Vegan Menu</a>\n" +
    "          <a href ng-if=\"$state.current.name === 'paleo-landing'\" track-click event-name=\"footerpaleomenu\" ui-sref=\"menus.choice-paleo\">Paleo Menu</a>\n" +
    "        </li>\n" +
    "        <li class=\"visible-xs\" track-click event-name=\"footerhelp_mobile\">\n" +
    "          <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("shared/v3.navbar-default.tpl.html","<!-- Navbar default -->\n" +
    "<div class=\"navbar-inner marketing-page-navbar\" ng-class=\"{ 'navbar-sticky-top' : !isAuthenticated }\" ng-include=\"'shared/v3.navbar-inner.tpl.html'\"></div>\n" +
    "")

$templateCache.put("shared/v3.navbar-inner.tpl.html","<div class=\"container\" ng-class=\"{ 'not-signed-in': !isAuthenticated, 'signed-in': isAuthenticated }\">\n" +
    "  <div class=\"navbar-header\">\n" +
    "    <button type=\"button\" class=\"navbar-toggle\"\n" +
    "            ng-init=\"openMobileNav(true)\"\n" +
    "            ng-click=\"openMobileNav(false)\" ng-show=\"navCollapsed\">\n" +
    "      <span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n" +
    "\n" +
    "    <button type=\"button\" class=\"btn-close-menu visible-xs\"\n" +
    "            ng-click=\"openMobileNav(true)\" ng-show=\"!navCollapsed\">\n" +
    "    </button>\n" +
    "\n" +
    "    <!-- Gift Icon: Mobile Only -->\n" +
    "    <div class=\"visible-xs right reverse-ordered gift-icon\" ng-if=\"isAuthenticated && !isCancelled\">\n" +
    "      <a href ng-click=\"goToInviteFriend('invite-friends'); openMobileNav(true)\"\n" +
    "         track-click event-name=\"hi-25-off\">\n" +
    "        <img src=\"//cdn.greenchef.com/assets/gift.e1e15cf1.png\" />\n" +
    "        <div class=\"gift-badge\" ng-if=\"referralData.referralsAvailable > 0\">{{referralData.referralsAvailable}}</div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- non mobile nav -->\n" +
    "  <div collapse=\"navCollapsed\" class=\"collapse navbar-collapse bg-collapse\" spark-scroll-animate=\"sparkScrollObj\"\n" +
    "       navbar-collapse-height ng-model=\"sparkScrollObj\">\n" +
    "    <ul class=\"nav navbar-nav main-navbar\" ng-class=\"{'yourplannav': isAuthenticated}\">\n" +
    "\n" +
    "      <li ui-sref-active=\"active\" class=\"left\" ng-hide=\"isAuthenticated\">\n" +
    "        <a id=\"menu\" href ui-sref=\"menus.main\"\n" +
    "           ng-click=\"openMobileNav(true)\"\n" +
    "           track-click event-name=\"menu_nav\"\n" +
    "           class='has-badge'>\n" +
    "          <span class='link-text'>Menu</span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "      <li ui-sref-active=\"active\" class=\"left\" ng-hide=\"isAuthenticated\">\n" +
    "        <a id=\"how-it-works\" href ui-sref=\"how-it-works\"\n" +
    "           ng-click=\"openMobileNav(true)\"\n" +
    "           track-click event-name=\"howitworks\">\n" +
    "          <span class=\"link-text\">\n" +
    "            How It Works\n" +
    "          </span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "      <li ui-sref-active=\"active\" class=\"left\" ng-hide=\"isAuthenticated\">\n" +
    "        <a id=\"why-green-chef\" href ui-sref=\"why-green-chef\"\n" +
    "           ng-click=\"openMobileNav(true)\"\n" +
    "           track-click event-name=\"whygreenchef\">\n" +
    "          <span class=\"link-text\">\n" +
    "            Why Green Chef\n" +
    "          </span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "\n" +
    "      <!-- not signed in -->\n" +
    "      <li class=\"signup right\" ng-if=\"!isAuthenticated\">\n" +
    "        <a id=\"signup\" href class=\"btn-signup\" ng-click=\"openMobileNav(true); goToSignUp(signupButtonData.mealPlan);\"\n" +
    "           track-sign-up track-click event-name=\"{{signupButtonData.clickEvent}}\">\n" +
    "          {{signupButtonData.buttonCta}}</a>\n" +
    "      </li>\n" +
    "      <li class=\"signin right\" ng-if=\"!isAuthenticated\">\n" +
    "        <a id=\"signin\" href ui-sref=\"sign-in\" ng-click=\"openMobileNav(true); goToSignIn();\">\n" +
    "          Sign In</a>\n" +
    "      </li>\n" +
    "\n" +
    "    <!-- signed in and new your plan page -->\n" +
    "      <li class=\"right sign-up-account hidden-xs\" ng-if=\"isAuthenticated\">\n" +
    "        <div class=\"btn-group dropdown-list-action dropdown\"  ng-mouseover=\"showDropDown=true\"\n" +
    "             ng-mouseleave=\"showDropDown=false\" ng-class=\"{'active': showDropDown, 'open': showDropDown}\">\n" +
    "          <button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle ng-disabled=\"disabled\">Hi {{ userName }}<span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n" +
    "            <button ng-class=\"{'active': true}\" type=\"button\" class=\"btn btn-primary\" ng-disabled=\"disabled\" ng-mouseover=\"showDropDown=false\" ng-mouseleave=\"showDropDown=true\">Hi {{ userName }}<span class=\"caret\"></span></button>\n" +
    "            <li role=\"menuitem\" ng-if=\"!isCancelled\"><a href ng-click=\"goToEditSubscription('hi-edit-sub')\">Edit Subscription</a></li>\n" +
    "            <li role=\"menuitem\" ng-if=\"!isCancelled\"><a href ng-click=\"goToInviteFriend('hi-refer-friend'); openMobileNav(true)\">Refer Friend</a></li>\n" +
    "            <li role=\"menuitem\" ng-if=\"!isCancelled\"><a ui-sref=\"my-account.account-info\" track-click event-name=\"hi-account-info\">Account info</a></li>\n" +
    "            <li role=\"menuitem\" ng-if=\"!isCancelled\"><a href ui-sref=\"my-account.order-history\" track-click event-name=\"hi-order-history\">Order History</a></li>\n" +
    "            <li role=\"menuitem\"><a href ui-sref=\"menus.main\" track-click event-name=\"hi-menu\">Menu</a></li>\n" +
    "            <li role=\"menuitem\"><a href ng-click=\"signOut(); openMobileNav(true)\" track-click event-name=\"hi-sign-out\">Sign Out</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "      <li class=\"reverse-ordered\" ng-if=\"isAuthenticated && !isCancelled\">\n" +
    "        <a class=\"visible-xs\" ui-sref=\"my-account.order-history\" ng-click=\"openMobileNav(true)\">Order History</a>\n" +
    "      </li>\n" +
    "      <li class=\"right reverse-ordered\" ng-if=\"isAuthenticated && !isCancelled\" ng-class=\"{active: $state.includes('account')}\">\n" +
    "        <a href ui-sref=\"account\" ng-click=\"openMobileNav(true)\">Your Plan</a>\n" +
    "      </li>\n" +
    "      <li class=\"right reverse-ordered hidden-xs\" ng-if=\"isRegistered && !isOptOutSubscription && isAuthenticated && !isCancelled\">\n" +
    "        <button class=\"btn btn-default-green btn-action-white hi-25-off\"\n" +
    "                ng-click=\"goToInviteFriend('invite-friends-navbar'); openMobileNav(true)\"\n" +
    "        >\n" +
    "          {{ giftCTA }}\n" +
    "        </button>\n" +
    "      </li>\n" +
    "\n" +
    "      <!-- Gift Icon: Larger than Mobile -->\n" +
    "      <li class=\"hidden-xs right reverse-ordered gift-icon\" ng-if=\"isAuthenticated && !isCancelled\">\n" +
    "        <a href ng-click=\"goToInviteFriend('gifticon'); openMobileNav(true)\">\n" +
    "          <img src=\"//cdn.greenchef.com/assets/gift.e1e15cf1.png\" />\n" +
    "          <div class=\"gift-badge\" ng-if=\"referralData.referralsAvailable > 0\">{{referralData.referralsAvailable}}</div>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "\n" +
    "      <div class=\"visible-xs\" ng-if=\"isAuthenticated\">\n" +
    "        <li ng-if=\"!isCancelled\"><a ui-sref=\"my-account.account-info\" ng-click=\"openMobileNav(true)\">Account Info</a></li>\n" +
    "        <li ng-if=\"isRegistered && !isOptOutSubscription && !isCancelled\">\n" +
    "          <a id=\"invite-friend\" href ng-click=\"goToInviteFriend('invite-friends'); openMobileNav(true)\">Get $25</a>\n" +
    "        </li>\n" +
    "        <li><a href ui-sref=\"menus.main\" ng-click=\"openMobileNav(true)\">Menu</a></li>\n" +
    "        <li><a href ng-click=\"signOut(); openMobileNav(true)\">Sign Out</a></li>\n" +
    "      </div>\n" +
    "\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- mobile top level nav -->\n" +
    "  <span>\n" +
    "    <a href ui-sref=\"home\" class=\"logo-brand\" ng-class=\"{'horizontal-logo': isFloater}\"></a>\n" +
    "\n" +
    "    <a class=\"mobile-sign-in\" href ng-if=\"!isAuthenticated\" ng-click=\"signupButtonData.clickAction()\"\n" +
    "       track-click event-name=\"{{signupButtonData.clickEvent}}_mobile\">\n" +
    "      {{signupButtonData.buttonCta}}\n" +
    "    </a>\n" +
    "  </span>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-in/sign-in.tpl.html","<div class=\"wrap-join-sign-up v3-common-bg\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"inner-container\">\n" +
    "      <form id=\"sign-in-form\" name=\"signInForm\" class=\"form-horizontal main-form sign-in-form\">\n" +
    "        <h2 class=\"work-header header-sign-in\">Sign In</h2>\n" +
    "        <div>\n" +
    "            <div ng-repeat=\"alert in alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "                <button type=\"button\" class=\"close\" ng-click=\"closeAlert()\">x</button>\n" +
    "                {{alert.msg}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-sm-12\">\n" +
    "            <label>email</label>\n" +
    "            <input type=\"email\" placeholder=\"Email\" name=\"email\" ng-model=\"authInfo.email\" class=\"form-control\" required />\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-sm-12\">\n" +
    "            <label>password</label>\n" +
    "            <input type=\"password\" placeholder=\"Password\" name=\"password\" ng-model=\"authInfo.password\" class=\"form-control\" required />\n" +
    "          </div>\n" +
    "        </div>\n" +
    "          <!--<a class=\"pull-right forgot-password\">Forgot password</a>-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "            <div ng-show=\"!signInForm.$submitted\">\n" +
    "              <!-- Button sign in for desktop -->\n" +
    "              <button class=\"btn btn-green btn-signin hidden-xs\" ng-disabled=\"signInForm.$invalid\" ng-click=\"signIn(signInForm, 'desktop')\">Sign In</button>\n" +
    "\n" +
    "              <!-- Button sign in for mobile -->\n" +
    "              <button class=\"btn btn-green btn-signin visible-xs\" ng-disabled=\"signInForm.$invalid\" ng-click=\"signIn(signInForm, 'mobile')\">Sign In</button>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- loading UI -->\n" +
    "            <loading-state ng-show=\"signInForm.$submitted\"></loading-state>\n" +
    "\n" +
    "            <p class=\"form-notify forgot-password\"><a href ui-sref=\"recover-password\">Forgot your password?</a></p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"divider\"></div>\n" +
    "        <!--<div class=\"form-group\">-->\n" +
    "          <!--<div class=\"col-sm-6\">-->\n" +
    "            <!--<div class=\"checkbox remember-me-checkbox\">-->\n" +
    "              <!--<input id=\"remember-me\" type=\"checkbox\" class=\"check-item\" ng-model=\"remember\"/>-->\n" +
    "              <!--<label for=\"remember-me\" class=\"label-check-item\">Remember me</label>-->\n" +
    "            <!--</div>-->\n" +
    "          <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <p class=\"form-notify no-account\"><span>Don't have an account?</span><a ui-sref=\"sign-up\">Sign up here</a></p>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("terms/privacy.tpl.html","<section class=\"terms-and-privacy\" ng-class=\"{'has-banner-padding': showBanner}\">\n" +
    "    <div class=\"container\">\n" +
    "        <p class=\"policy-header\" ng-if=\"vm.version === vm.LegalUpdate.currentChange\">\n" +
    "            We have updated the Green Chef Privacy Policy that apply to your use of the Green Chef\n" +
    "            Site and your purchase of Green Chef Products and Services. We are also updating the\n" +
    "            Green Chef Terms of Service. For new subscribers, the Terms of Service and Privacy\n" +
    "            Policy will both be effective as of July 28th, 2017. For existing subscribers, these\n" +
    "            changes will be effective as of August 28th, 2017.\n" +
    "        </p>\n" +
    "        <hr>\n" +
    "        <current-privacy ng-if=\"vm.version === vm.LegalUpdate.currentChange\"></current-privacy>\n" +
    "        <previous-privacy ng-if=\"vm.version === vm.LegalUpdate.previousChange\"></previous-privacy>\n" +
    "    </div>\n" +
    "</section>\n" +
    "")

$templateCache.put("terms/terms.tpl.html","<section class=\"terms-and-privacy\" ng-class=\"{'has-banner-padding': showBanner}\">\n" +
    "    <div class=\"container\">\n" +
    "        <p class=\"policy-header\" ng-if=\"vm.version === vm.LegalUpdate.currentChange\">\n" +
    "            We have updated the Green Chef Terms of Service that apply to your use of the\n" +
    "            Green Chef Site and your purchase of Green Chef Products and Services. We are\n" +
    "            also updating the Green Chef Privacy Policy. For new subscribers, the Terms of Service\n" +
    "            and Privacy Policy will both be effective as of July 28th, 2017. For existing\n" +
    "            subscribers, these changes will be effective as of August 28th, 2017.\n" +
    "        </p>\n" +
    "        <hr>\n" +
    "        <current-terms ng-if=\"vm.version === vm.LegalUpdate.currentChange\"></current-terms>\n" +
    "        <previous-terms ng-if=\"vm.version === vm.LegalUpdate.previousChange\"></previous-terms>\n" +
    "    </div>\n" +
    "</section>\n" +
    "")

$templateCache.put("sign-up/order-summary.tpl.html","<div class=\"order-summary summary\">\n" +
    "  <h2 class=\"section-header text-uppercase\">Order summary</h2>\n" +
    "  <div class=\"plan-info\">\n" +
    "    <div class=\"info-row\">\n" +
    "      <div class=\"title text-uppercase\">{{ mealType.name }}</div>\n" +
    "      <div class=\"title\">{{ mealType.subtitle2 }}</div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"info-row\">\n" +
    "      <div class=\"title text-uppercase\">{{ planInfo.planName }}</div>\n" +
    "      <div class=\"title\"><span class=\"text-uppercase\">{{ planInfo.recipeNum }} Recipes per week ({{ planInfo.mealNum }} meals)</span><span class=\"boxNum\" ng-if=\"!showNumBoxLink\">x{{ planInfo.boxNum }} {{ planInfo.boxNum > 1 ? 'boxes' : 'box' }}</span></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"info-row\" ng-if=\"showShippingAddress\">\n" +
    "      <div class=\"title text-uppercase\">shipping address</div>\n" +
    "      <div ng-show=\"!order.addressLine2\" class=\"info address\">{{ order.addressLine1 }}, {{ order.city }}, {{ order.state }} {{ order.zipCode }}</div>\n" +
    "      <div ng-show=\"order.addressLine2\" class=\"info address\">{{ order.addressLine1 }} {{ order.addressLine2 }}, {{ order.city }}, {{ order.state }} {{ order.zipCode }}</div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"info-row first-delivery\">\n" +
    "      <div class=\"title text-uppercase\">first delivery\n" +
    "        <p class=\"info\">{{ order.firstDeliveryDate | amDateFormat:'dddd, MMMM Do' }}</p>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"text-uppercase\" ng-if=\"!showNumBoxLink\">\n" +
    "        <a class=\"date-picker\" ng-click=\"changeFirstDelivery()\">Change</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"info-row box-number\" ng-if=\"showNumBoxLink\">\n" +
    "      <div class=\"title text-uppercase\">No. of {{ getBoxNum() > 1 ? 'boxes' : 'box' }} : {{getBoxNum()}}\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"text-uppercase\">\n" +
    "        <a class=\"box-picker\" ng-click=\"changeServingSize()\">Change</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"order-total\">\n" +
    "    <h4 class=\"text-uppercase\">Order Total<span ng-if=\"termsSignupFlow\">*</span></h4>\n" +
    "    <div class=\"total-info table\">\n" +
    "      <div class=\"table-row\">\n" +
    "        <div class=\"name table-cell text-uppercase\">Subtotal</div>\n" +
    "        <div class=\"value table-cell right\">\n" +
    "          <span ng-if=\"!invoice.available()\">...</span>\n" +
    "          <span ng-if=\"invoice.available()\">${{ invoice.subtotal | number: 2 }}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"table-row\" ng-if=\"invoice.available()\" ng-repeat=\"discount in invoice.discounts\">\n" +
    "        <div class=\"name table-cell text-uppercase\">{{ discount.item }}</div>\n" +
    "        <div class=\"value table-cell right\">\n" +
    "          <span>-${{ discount.price | number: 2 }}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"table-row\">\n" +
    "        <div class=\"name table-cell text-uppercase hidden-xs\">Delivery</div>\n" +
    "        <div class=\"name table-cell text-uppercase left visible-xs\">Delivery and tax</div>\n" +
    "        <div ng-if=\"invoice.shipping && invoice.shipping !== 0\" class=\"value table-cell text-uppercase right\">\n" +
    "          <span ng-if=\"!invoice.available()\">...</span>\n" +
    "          <span ng-if=\"invoice.available()\">${{ invoice.shipping | number: 2 }}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"total table\">\n" +
    "    <div class=\"table-row\">\n" +
    "      <div class=\"name table-cell left text-uppercase\">Total</div>\n" +
    "      <div class=\"value table-cell right\">\n" +
    "        <span ng-if=\"!invoice.available()\">...</span>\n" +
    "        <span ng-if=\"invoice.available()\">${{ invoice.total | number: 2 }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"buttons-group\" ng-show=\"!formSubmitting\">\n" +
    "    <button type=\"submit\" class=\"btn btn-green btn-place-order\"\n" +
    "          ng-if=\"showCompleteButton\">Complete order</button>\n" +
    "\n" +
    "    <button type=\"submit\" class=\"btn btn-green btn-place-order\"\n" +
    "          ng-if=\"!showCompleteButton\">Continue</button>\n" +
    "  </div>\n" +
    "\n" +
    "    <!-- loading UI -->\n" +
    "  <div class=\"buttons-group clearfix\" ng-show=\"formSubmitting\">\n" +
    "    <div class=\"working-state text-uppercase\">\n" +
    "      <img class=\"spin-loader\" src=\"//cdn.greenchef.com/assets/Icons/spin_circle.f7fe4187.png\">\n" +
    "      <span>Working...</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"info bottom-message\">\n" +
    "    <span>Green Chef is proud to be a Certified Organic company. All produce is organic unless otherwise labeled.</span>\n" +
    "  </div>\n" +
    "  <div ng-if=\"termsSignupFlow\" class=\"info bottom-message\">\n" +
    "    <span>*</span><span ng-html-compile=\"orderFutureTerms\"></span>\n" +
    "  </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/sign-up.tpl.html","<section class=\"sign-up-v2 v3-page\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"inner-container\">\n" +
    "      <!-- signup progress nav -->\n" +
    "      <ul ng-hide=\"currentStep === 'sign-up-v2.thank-you'\"\n" +
    "          class=\"signup-progress\">\n" +
    "        <li ng-repeat=\"signupState in breadcrumb\"\n" +
    "            ng-click=\"handleClickBreadcrumb(signupState.stateName, signupState.clickable)\"\n" +
    "            ng-class=\"{active: signupState.active, clickable: signupState.clickable}\"\n" +
    "            class=\"col-xs-{{12 / breadcrumb.length}} col-sm-{{12 / breadcrumb.length}} col-md-{{12 / breadcrumb.length}}\">\n" +
    "          <div class=\"content text-uppercase text-center\">\n" +
    "            <div class=\"inner\">{{signupState.name}}</div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "\n" +
    "    <div class=\"main-content\" ui-view='sign-up'></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "")

$templateCache.put("unskip/recipe-card.tpl.html","<div class=\"recipe-card text-center\">\n" +
    "  <div class=\"recipe-image\">\n" +
    "    <img ng-src=\"{{recipe.thumbnailImageUrl}}\"/>\n" +
    "  </div>\n" +
    "  <div class=\"recipe-name\">\n" +
    "    {{recipe.mealName}}\n" +
    "  </div>\n" +
    "  <div class=\"recipe-intro\">\n" +
    "    {{recipe.mealIntro}}\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("unskip/unskip-popup.tpl.html","<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"popupCloseX()\" aria-label=\"Close\"></button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12\">\n" +
    "      <p class=\"header-text text-center\">\n" +
    "        Hey, {{firstName}}!\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12 call-to-action-text-wrap\">\n" +
    "      <p class=\"call-to-action-text text-center\">\n" +
    "        You&apos;re scheduled to skip these dinners. But look how tasty they are!\n" +
    "        <br>Order now for delivery on {{date}}.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row visible-xs text-center\">\n" +
    "    <button type=\"button\" class=\"btn btn-green btn-unskip\" ng-click=\"popupUnskipButton()\">Order now</button>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"menu-container\">\n" +
    "      <div ng-repeat=\"recipe in recipes\" class=\"recipe-container\" ng-class=\"recipes.length === 2 ? 'col-sm-6': 'col-sm-4'\">\n" +
    "        <recipecard data=\"recipe\"></recipecard>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12\">\n" +
    "      <div class=\"buttons-container text-center\">\n" +
    "        <div class=\"row\">\n" +
    "          <button type=\"button\" class=\"btn btn-green btn-unskip\" ng-click=\"popupUnskipButton()\">Order now</button>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <button type=\"button\" class=\"btn btn-default btn-cancel\" ng-click=\"popupCancelButton()\">Cancel</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("unskip/unskip-success-popup.tpl.html","<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"popupCloseX()\" aria-label=\"Close\"></button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <p class=\"header-text text-center\">\n" +
    "        Success!\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <p class=\"success-message text-center\">\n" +
    "        Your delievery for {{date}} has been unskipped\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div class=\"button-container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary btn-block\" ng-click=\"viewPlanClick()\">View Plan</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("unsubscribe/unsubscribe.tpl.html","<div class=\"wrap-unsubscribe v3-page\" ng-class=\"{'has-banner': showBanner}\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"inner-container row\">\n" +
    "      <div class=\"logo\"></div>\n" +
    "      <div class=\"text text-center\">\n" +
    "        <p ng-show=\"!unsubscribeSuccessful\">In order to unsubscribe, <br> please confirm email address below:</p>\n" +
    "        <div ng-show=\"unsubscribeSuccessful\" class=\"col-md-8 col-md-offset-2\">\n" +
    "          <p>We're sorry to see you go!</p>\n" +
    "          <p>If you are having second thoughts or want to see what we are cooking up this week, please come back and check out the <a ui-sref=\"menus\" ng-click=\"onTheMenu()\">menu</a> or <a ui-sref=\"learn-more\" ng-click=\"learnMore()\">learn more</a> about our service.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <form name=\"unsubscribeForm\" class=\"unsubscribe-form\" ng-show=\"!unsubscribeSuccessful\" ng-submit=\"unsubscribe(unsubscribeForm)\" novalidate>\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"email\" ng-model-options=\"{ allowInvalid: true }\" autofocus required>\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-green\" ng-show=\"!unsubscribeForm.$submitted\">Unsubscribe</button>\n" +
    "        <loading-state ng-show=\"unsubscribeForm.$submitted\"></loading-state>\n" +
    "      </form>\n" +
    "      <div class=\"error\" ng-show=\"isError\">\n" +
    "        <span class=\"circle-exclamation\">!</span>\n" +
    "        <span class=\"error-text\">The email entered is not valid. Please try again.</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>")

$templateCache.put("vegan/v3.family-landing.tpl.html","<div class=\"v3-page vegan-page family-landing-page\">\n" +
    "  <section class=\"main text-center\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"main-title\"></div>\n" +
    "      <p class=\"intro\">\n" +
    "        <span>Organic, sustainably sourced ingredients.</span><br class=\"hidden-xs\" />\n" +
    "        <span>Nourishing recipes for the whole family. Delivered.</span><br class=\"hidden-xs\" />\n" +
    "        <span>Our Family plan is almost here! <br class=\"visible-xs\" />\n" +
    "        Be first to know when it&#8217;s ready.</span>\n" +
    "      </p>\n" +
    "      <a href=\"https://greenchef.typeform.com/to/zJGSqW\" target=\"_blank\" class=\"btn btn-green btn-notified\" track-click event-name=\"family_get_notified\">tell me when</a>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"how-we-dinner text-center\">\n" +
    "    <div class=\"container\">\n" +
    "      <h3 class=\"hidden-xs text-uppercase\">how green chef does dinner</h3>\n" +
    "      <h3 class=\"visible-xs text-uppercase\">how does green chef work?</h3>\n" +
    "      <div class=\"row row-items\">\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/pick-preference@1x.dae80e96.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/pick-preference@2x.64eeb46a.jpg 2x\" />\n" +
    "            </div>\n" +
    "            <h4 class=\"text-uppercase\">pick your preferences</h4>\n" +
    "            <p class=\"desc\">Tell us how you like to eat. Family of omnivores? Carnivores? No problem.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@1x.c3955568.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@2x.920802be.jpg 2x\" />\n" +
    "            </div>\n" +
    "            <h4 class=\"text-uppercase\">skip the store</h4>\n" +
    "            <p class=\"desc\">We&#8217;ll send fresh, organic, pre-measured ingredients to your door.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@1x.852921e2.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@2x.fef1e1e6.jpg 2x\" />\n" +
    "            </div>\n" +
    "            <h4 class=\"text-uppercase\">cook, share &amp; enjoy</h4>\n" +
    "            <p class=\"desc\">Try new flavors and techniques. Dinner&#8217;s ready in just 30 minutes.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("vegan/v3.press-vegan.tpl.html","<div class=\"v3-page vegan-page press-vegan\">\n" +
    "  <section class=\"main press-main text-center\">\n" +
    "    <div class=\"container\">\n" +
    "      <h1 class=\"text-uppercase\">Vegan <span>at your doorstep</span></h1>\n" +
    "      <img class=\"usda-organic\" src=\"//cdn.greenchef.com/assets/Icons/organic_seal@1x.79771cfb.png\" srcset=\"//cdn.greenchef.com/assets/Icons/organic_seal@2x.ffe16c9c.png 2x\" alt=\"USDA Organic\" />\n" +
    "      <p class=\"intro\">\n" +
    "        <span>Organic, sustainably sourced ingredients.</span>\n" +
    "        <span>Nourishing vegan recipes. Delivered.</span>\n" +
    "        <span>Our vegan menu is almost here!</span> <br class=\"hidden-xs\" />\n" +
    "        <span>Be first to know when it&#8217;s ready and get a special offer.</span>\n" +
    "      </p>\n" +
    "      <a href=\"https://greenchef.typeform.com/to/Bxl8gw\" target=\"_blank\" class=\"btn btn-green btn-notified\" track-click event-name=\"thisisvegan_get_notified\">tell me when</a>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"how-we-dinner text-center\">\n" +
    "    <div class=\"container\">\n" +
    "      <h3 class=\"hidden-xs text-uppercase\">how green chef does dinner</h3>\n" +
    "      <h3 class=\"visible-xs text-uppercase\">how does green chef work?</h3>\n" +
    "      <div class=\"row row-items\">\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/pick-preference@1x.dae80e96.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/pick-preference@2x.64eeb46a.jpg 2x\" />\n" +
    "            </div>\n" +
    "            <h4 class=\"text-uppercase\">pick your preferences</h4>\n" +
    "            <p class=\"desc\">Tell us how you like to eat. Vegan? Gluten-Free? Paleo? No problem.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@1x.c3955568.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@2x.920802be.jpg 2x\" />\n" +
    "            </div>\n" +
    "            <h4 class=\"text-uppercase\">skip the store</h4>\n" +
    "            <p class=\"desc\">We&#8217;ll send fresh, organic, pre-measured ingredients to your door.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@1x.852921e2.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@2x.fef1e1e6.jpg 2x\" />\n" +
    "            </div>\n" +
    "            <h4 class=\"text-uppercase\">cook, share &amp; enjoy</h4>\n" +
    "            <p class=\"desc\">Try new flavors and techniques. Dinner&#8217;s ready in just 30 minutes.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("vegan/v3.vegan.tpl.html","<div class=\"v3-page vegan-page\">\n" +
    "  <section class=\"main-common main-vegan text-center\">\n" +
    "    <div class=\"container\">\n" +
    "      <h1 class=\"text-uppercase\">Vegan <span>at your doorstep</span></h1>\n" +
    "      <p class=\"intro\">\n" +
    "        <span>Organic, sustainably sourced ingredients.</span>\n" +
    "        <span>Nourishing vegan recipes. Delivered.</span>\n" +
    "        <span>Our vegan menu is almost here!</span>\n" +
    "        <span>Be first to know when it&#8217;s ready.</span>\n" +
    "      </p>\n" +
    "      <a href=\"https://greenchef.typeform.com/to/TLZLhW\" target=\"_blank\" class=\"btn btn-green btn-notified\" track-click event-name=\"vegan_get_notified\">tell me when</a>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"how-we-dinner text-center\">\n" +
    "    <div class=\"container\">\n" +
    "      <h3 class=\"hidden-xs text-uppercase\">how green chef does dinner</h3>\n" +
    "      <h3 class=\"visible-xs text-uppercase\">how does green chef work?</h3>\n" +
    "      <div class=\"row row-items\">\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/pick-preference@1x.dae80e96.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/pick-preference@2x.64eeb46a.jpg 2x\"/>\n" +
    "            </div>\n" +
    "            <h4 class=\"text-uppercase\">pick your preferences</h4>\n" +
    "            <p class=\"desc\">Tell us how you like to eat. Vegan? Gluten-Free? Paleo? No problem.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@1x.c3955568.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@2x.920802be.jpg 2x\" />\n" +
    "              <h4 class=\"text-uppercase\">skip the store</h4>\n" +
    "              <p class=\"desc\">We&#8217;ll send fresh, organic, pre-measured ingredients to your door.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"box\">\n" +
    "            <div class=\"thumb\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@1x.852921e2.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@2x.fef1e1e6.jpg 2x\" />\n" +
    "            </div>\n" +
    "            <h4 class=\"text-uppercase\">cook, share &amp; enjoy</h4>\n" +
    "            <p class=\"desc\">Try new flavors and techniques. Dinner&#8217;s ready in just 30 minutes.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("home/emailZipSignup/email-zip-signup-form.tpl.html","<div ng-if=\"showPopUp\">\n" +
    "  <div class=\"modal fade in\" ng-click=\"togglePopup()\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "      <div class=\"modal-content\">\n" +
    "        <button class=\"close\" type=\"button\" ng-click=\"togglePopup()\"></button>\n" +
    "        <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2 welcome-alert\" ng-class=\"alert.type\">\n" +
    "          <span ng-html-compile=\"alert.msg\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"modal-backdrop fade in\"></div><!-- Bootstrap overlay -->\n" +
    "</div>\n" +
    "\n" +
    "<form class=\"form-inline clearfix v3-form\"\n" +
    "name=\"form\"\n" +
    "ng-submit=\"submitStart(form)\"\n" +
    "ng-class=\"startSubmitted ? 'validate' : ''\"\n" +
    "novalidate>\n" +
    "\n" +
    "<div class=\"form-group form-email\" ng-class=\"{error: form.email.$invalid}\">\n" +
    "  <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"email\" ng-model=\"signUpInfo.email\" required >\n" +
    "  <label class=\"error-msg upper\">&#42;please enter a valid email</label>\n" +
    "</div>\n" +
    "<div class=\"form-group form-zipcode\" ng-class=\"{error: form.zipCode.$invalid}\">\n" +
    "  <!--zipcode type is text to handle values starting with 0 which gets auto trimmed-->\n" +
    "  <input id=\"zip-code\" class=\"form-control\" type=\"text\" name=\"zipCode\" placeholder=\"zip code\" ng-model=\"signUpInfo.zipCode\" ng-pattern=\"/^\\d{5}$/\" required>\n" +
    "  <label class=\"error-msg upper\">&#42;please enter a valid zip code</label>\n" +
    "</div>\n" +
    "\n" +
    "<button type=\"submit\" ng-show=\"!formSubmitting\" class=\"btn btn-general btn-green\" track-sign-up track-click event-name=\"{{clickEvent}}\">Get Started</button>\n" +
    "<!-- loading UI -->\n" +
    "<div class=\"btn button-replace\" ng-show=\"formSubmitting\">\n" +
    "  <div class=\"working-state text-uppercase\">\n" +
    "    <img class=\"spin-loader\" src=\"//cdn.greenchef.com/assets/Icons/spin_circle.f7fe4187.png\">\n" +
    "    <span>Working...</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</form>\n" +
    "")

$templateCache.put("landing/tv/tv-landing-modal.tpl.html","<div class=\"close\" ng-click=\"cancel()\" track-click event-name=\"playbutton_tv_closeout\"></div>\n" +
    "<a href ui-sref=\"home\" class=\"logo-brand\" ng-click=\"cancel()\"></a>\n" +
    "<p class=\"title-header\">I Am Green Chef</p>\n" +
    "<div class=\"content\">\n" +
    "  <div class=\"iframe-wrapper\">\n" +
    "    <iframe id=\"player\" type=\"text/html\" width=\"640\" height=\"390\"\n" +
    "      src=\"https://www.youtube.com/embed/GYCquDthwTI?autoplay=1&rel=0\"\n" +
    "      frameborder=\"0\" allowfullscreen>\n" +
    "    </iframe>  \n" +
    "  </div>\n" +
    "  <a href ui-sref=\"sign-up\" class=\"btn btn-lg btn-green\"\n" +
    "    track-sign-up track-click event-name=\"playbutton_tv_get_started\"\n" +
    "    ng-click=\"cancel()\">Get Started</a>\n" +
    "</div>\n" +
    "\n" +
    "")

$templateCache.put("landing/tv/v3.tv-landing.tpl.html","<div class=\"v3-page home-page tv-landing\">\n" +
    "  <!-- DELICIOUSLY SIMPLE section -->\n" +
    "  <section class=\"wrap-intro main-section\">\n" +
    "    <div class=\"background-image\"\n" +
    "         data-stellar-ratio=\"0.8\"\n" +
    "         data-stellar-vertical-offset=\"-250\"></div>\n" +
    "\n" +
    "    <video-player val='isFullScreen'></video-player>\n" +
    "\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"short-content-container\">\n" +
    "            <h2>DELICIOUSLY SIMPLE</h2>\n" +
    "            <p class=\"short-content center-block\">Fresh, organic ingredients. Healthy, chef-crafted recipes. Right at your doorstep.</p>\n" +
    "            <a href ui-sref=\"sign-up\" class=\"btn btn-lg btn-green\"\n" +
    "               track-sign-up track-click event-name=\"getstarted_main\">Get Started</a>\n" +
    "          </div>\n" +
    "          <button class=\"btn btn-play\" ng-click=\"showFullScreen()\" track-click event-name=\"playbutton_tv\">\n" +
    "            <span class=\"triangle\"></span>\n" +
    "          </button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- EASY DINNER section -->\n" +
    "  <section class=\"wrap-intro organic-ingredients\">\n" +
    "    <div class=\"background-image\"\n" +
    "         data-stellar-ratio=\"0.8\"\n" +
    "         data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"short-content-container\">\n" +
    "            <img class=\"usda-organic\" src=\"//cdn.greenchef.com/assets/Icons/organic_seal@1x.79771cfb.png\" srcset=\"//cdn.greenchef.com/assets/Icons/organic_seal@2x.ffe16c9c.png 2x\" alt=\"USDA Organic\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\"/>\n" +
    "            <h2>Easy dinners with fresh, organic ingredients</h2>\n" +
    "            <p class=\"short-content center-block\">We add an extra helping of quality time.</p>\n" +
    "            <a href ui-sref=\"learn-more\" class=\"btn btn-lg btn-yellow\"\n" +
    "               track-sign-up track-click event-name=\"learnmore_cta\">Learn More</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- WEEKLY MENU section -->\n" +
    "  <section class=\"wrap-intro fitness\">\n" +
    "    <div class=\"background-image\"\n" +
    "         data-stellar-ratio=\"0.8\"\n" +
    "         data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"short-content-container\">\n" +
    "            <h2>Mix it up with new menus every week</h2>\n" +
    "            <p class=\"short-content center-block\">Want to try vegan? Paleo? It’s easy to choose and change your plan.</p>\n" +
    "            <a ref ui-sref=\"menus\" class=\"btn btn-lg btn-red\"\n" +
    "               track-sign-up track-click event-name=\"whats_menu\">What's on the menu?</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- WEEKLY MENU section -->\n" +
    "  <section class=\"wrap-intro convinience-urban\">\n" +
    "    <div class=\"background-image\"\n" +
    "        data-stellar-ratio=\"0.8\"\n" +
    "         data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"short-content-container\">\n" +
    "            <img class=\"easy\" src=\"//cdn.greenchef.com/assets/Home/icon_30min@1x.d7e2d551.png\" srcset=\"//cdn.greenchef.com/assets/Home/icon_30min@2x.bdfb9a3f.png 2x\" alt=\"USDA Organic\" spark-scroll=\"{\n" +
    "            'centerTop-550': {downAddClass: 'animate'}\n" +
    "          }\"/>\n" +
    "            <h2>Quick, delicious recipes, faster than delivery</h2>\n" +
    "            <p class=\"short-content center-block\">Don’t order out. Enjoy home-cooked dinners in no time.</p>\n" +
    "            <a href ui-sref=\"sign-up\" class=\"btn btn-lg btn-green\"\n" +
    "               track-sign-up track-click event-name=\"getstarted_thirty\">GET STARTED</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- EXPLORE OFFERING section -->\n" +
    "  <section class=\"wrap-intro wrap-announcements\">\n" +
    "    <h3 class=\"main-title text-uppercase\">Explore new offerings</h3>\n" +
    "\n" +
    "    <div class=\"announcements-list row\">\n" +
    "      <!-- Family Announcement -->\n" +
    "      <div class=\"wrap-announcement col-sm-8\">\n" +
    "        <div class=\"announcement paleo\" ng-click='signUp()'>\n" +
    "          <!-- fallback for IE -->\n" +
    "          <div class=\"frosted-glass background-image\"></div>\n" +
    "\n" +
    "          <div class=\"caption-overlay\">\n" +
    "            <div class=\"wrap-caption full-width\">\n" +
    "              <p class=\"action-name text-uppercase\">start</p>\n" +
    "              <h2 class=\"plan text-uppercase\">paleo plan</h2>\n" +
    "              <h3 class=\"plan-desc\">Rich in animal proteins and fresh produce</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Vegan Announcement -->\n" +
    "      <div class=\"wrap-announcement col-sm-4\">\n" +
    "        <div class=\"announcement vegan\" ng-click='signUp(\"veg1\")'>\n" +
    "          <!-- fallback for IE -->\n" +
    "          <div class=\"frosted-glass background-image\"></div>\n" +
    "\n" +
    "          <div class=\"caption-overlay\">\n" +
    "            <div class=\"wrap-caption full-width\">\n" +
    "              <p class=\"action-name text-uppercase\">get</p>\n" +
    "              <h2 class=\"plan text-uppercase\">vegan</h2>\n" +
    "              <div class=\"plan-desc\">\n" +
    "                <div>Plant-based deliciousness</div>\n" +
    "                <div>(Available on the 2-Person Plan)</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- HOW WE DINNER section -->\n" +
    "  <section class=\"wrap-intro easy\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3 class=\"col-sm-12\">How we do dinner</h3>\n" +
    "      </div>\n" +
    "      <div class=\"row benefits\">\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box customize\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Pick your preferences</h4>\n" +
    "                <p>\n" +
    "                  Tell us what you like to eat. Vegetarian? Gluten&#45;Free? No problem.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box deliver\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Skip the store</h4>\n" +
    "                <p>\n" +
    "                  We'll send you fresh, organic ingredients.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"box cook\" spark-scroll=\"{\n" +
    "            'topTop-550': {downAddClass: 'animate'}\n" +
    "          }\">\n" +
    "            <div class=\"image\"></div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4>Cook, share &amp; enjoy</h4>\n" +
    "                <p>\n" +
    "                  Try new flavors and techniques. Done in just 30 minutes.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row get-started\">\n" +
    "        <a href ui-sref=\"sign-up\" class=\"btn btn-white\"\n" +
    "           track-sign-up track-click event-name=\"getstarted_how\">Get Started</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- DIET section -->\n" +
    "  <section class=\"wrap-intro diet\">\n" +
    "    <div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-300\"></div>\n" +
    "    <div class=\"section-info easy-container\">\n" +
    "      <p>Name your diet:</p>\n" +
    "\n" +
    "      <div class=\"underline-image\">\n" +
    "        <carousel interval=\"2000\">\n" +
    "          <slide ng-repeat=\"diet in diets\">\n" +
    "            <p class=\"diet-name\">{{diet}}</p>\n" +
    "          </slide>\n" +
    "        </carousel>\n" +
    "      </div>\n" +
    "\n" +
    "      <p class='we-got-it'>We've got it.</p>\n" +
    "\n" +
    "      <div class=\"center-block\">\n" +
    "        <a href ui-sref=\"menus\" class=\"btn btn-green\" track-click event-name=\"view_menu\">View the menu</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("marketing/how-it-works/how-it-works-marketing.tpl.html","<div class=\"marketing-page how-it-works\">\n" +
    "  <!-- Section HOW WE DO IT -->\n" +
    "  <section class=\"how-we-do-it\">\n" +
    "    <div class=\"wrap-intro\">\n" +
    "      <div class=\"background-image\"></div>\n" +
    "      <div class=\"content\">\n" +
    "        <h2 class=\"content-title\" ng-bind-html=\"howWeDoIt.title\"></h2>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- Section CHOOSE THE PLAN -->\n" +
    "  <section class=\"choose-the-plan\">\n" +
    "    <div class=\"wrap-intro\">\n" +
    "      <div class=\"background-image\"></div>\n" +
    "      <div class=\"overlay\"></div>\n" +
    "      <div class=\"content\">\n" +
    "        <h2 class=\"content-title\" ng-bind-html=\"chooseThePlan.title\"></h2>\n" +
    "        <div class=\"hidden-mobile\">\n" +
    "          <p class=\"content-desc\" ng-repeat=\"desc in chooseThePlan.desc\" ng-bind-html=\"desc\"></p>\n" +
    "          <a href=\"{{ chooseThePlan.link.url }}\" title=\"{{ chooseThePlan.link.title }}\" class=\"content-link\" track-click event-name=\"{{ chooseThePlan.link.loggingEvent }}\">{{ chooseThePlan.link.text }}</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"content visible-mobile\">\n" +
    "      <p class=\"content-desc\" ng-repeat=\"desc in chooseThePlan.desc\" ng-bind-html=\"desc\"></p>\n" +
    "      <a href=\"{{ chooseThePlan.link.url }}\" title=\"{{ chooseThePlan.link.title }}\" class=\"content-link\">{{ chooseThePlan.link.text }}</a>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- Section GET DINNER -->\n" +
    "  <section class=\"get-dinner\">\n" +
    "    <div class=\"wrap-intro\">\n" +
    "      <div class=\"background-image\"></div>\n" +
    "      <div class=\"content\">\n" +
    "        <h2 class=\"content-title\" ng-bind-html=\"getDinner.title\"></h2>\n" +
    "        <h3 class=\"content-title-small\" ng-bind-html=\"getDinner.secondTitle\"></h3>\n" +
    "        <p class=\"content-desc\" ng-repeat=\"desc in getDinner.desc\" ng-bind-html=\"desc\"></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- Section WHAT'S IN THE BOX -->\n" +
    "  <section class=\"whats-in-the-box\">\n" +
    "    <div class=\"whats-in-the-box-content\">\n" +
    "      <h2 class=\"title\" ng-bind-html=\"whatsInBox.title\"></h2>\n" +
    "      <ul class=\"row meal-list\">\n" +
    "        <li class=\"col-md-3 meal\" ng-repeat=\"meal in whatsInBox.meals track by $index\">\n" +
    "          <div class=\"whats-in-the-box-expanded visible-mobile\" ng-show=\"(expanded.index === $index)\" ng-click=\"expandedBox($index)\">\n" +
    "            <div ng-bind-html=\"expanded.text\"></div>\n" +
    "            <div class=\"meal-expanded\">\n" +
    "              <span class=\"meal-expanded-btn meal-expanded-btn-close\"></span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"whats-in-the-box-unexpanded\" ng-class=\"{'hidden-mobile' : expanded.index === $index}\" ng-click=\"expandedBox($index)\" track-click event-name=\"{{ meal.loggingEvent }}\">\n" +
    "            <div class=\"meal-thumb\">\n" +
    "              <img ng-src=\"{{ meal.imageSrc }}\" ng-srcset=\"{{ meal.imageSrcSet}} 2x\" alt=\"{{ meal.title }}\" class=\"hidden-mobile\" />\n" +
    "              <img ng-src=\"{{ meal.imageMobileSrc }}\" ng-srcset=\"{{ meal.imageMobileSrcSet}} 2x\" alt=\"{{ meal.title }}\" class=\"visible-mobile\" />\n" +
    "            </div>\n" +
    "            <div class=\"meal-content\">\n" +
    "              <h3 class=\"meal-title\" ng-bind-html=\"meal.title\"></h3>\n" +
    "              <p class=\"meal-desc\" ng-bind-html=\"meal.desc\"></p>\n" +
    "              <div class=\"meal-expanded\">\n" +
    "                <span class=\"meal-expanded-btn\" ng-class=\"{'meal-expanded-btn-close' : expanded.index == $index}\"></span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"whats-in-the-box-expanded hidden-mobile\" ng-show=\"(expanded.index >= 0)\" ng-bind-html=\"expanded.text\"></div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- Section TAP INTO YOUR INNER CHEF -->\n" +
    "  <section class=\"inner-chef\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6 thumb\">\n" +
    "        <img ng-src=\"{{ innerChef.imageSrc }}\" ng-srcset=\"{{ innerChef.imageSrcSet}} 2x\" alt=\"{{ innerChef.title }}\" />\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6 content\">\n" +
    "        <h2 class=\"content-title\" ng-bind-html=\"innerChef.title\"></h2>\n" +
    "        <p class=\"content-desc\" ng-bind-html=\"innerChef.desc\"></p>\n" +
    "        <a href=\"{{ innerChef.link.url }}\" title=\"{{ innerChef.link.title }}\" class=\"content-link\" track-click event-name=\"{{ innerChef.link.loggingEvent }}\">{{ innerChef.link.text }}</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- Section TAKE A BITE OUT OF AMAZING -->\n" +
    "  <section class=\"out-of-amazing\">\n" +
    "    <div class=\"wrap-intro\">\n" +
    "      <div class=\"background-image\"></div>\n" +
    "      <div class=\"overlay\"></div>\n" +
    "      <div class=\"content\">\n" +
    "        <h2 class=\"content-title\" ng-bind-html=\"outOfAmazing.title\"></h2>\n" +
    "        <p class=\"content-desc\" ng-bind-html=\"outOfAmazing.desc\"></p>\n" +
    "        <a href=\"{{ outOfAmazing.link.url }}\" title=\"{{ outOfAmazing.link.title }}\" class=\"content-link\" track-click event-name=\"{{ outOfAmazing.link.loggingEvent }}\">{{ outOfAmazing.link.text }}</a>\n" +
    "      </div>\n" +
    "      <div class=\"promotion\">\n" +
    "        <h2 class=\"promotion-title\" ng-bind-html=\"outOfAmazing.promotionTitle\"></h2>\n" +
    "        <div class=\"promotion-logo\">\n" +
    "          <img ng-src=\"{{ outOfAmazing.promotionLogoSrc }}\" ng-srcset=\"{{ outOfAmazing.promotionLogoSrcSet}} 2x\" alt=\"{{ outOfAmazing.title }}\" class=\"hidden-mobile usatoday-logo\" />\n" +
    "          <img ng-src=\"{{ outOfAmazing.promotionLogoMobileSrc }}\" ng-srcset=\"{{ outOfAmazing.promotionLogoMobileSrcSet}} 2x\" alt=\"{{ outOfAmazing.title }}\" class=\"visible-mobile usatoday-logo\" />\n" +
    "        </div>\n" +
    "        <p class=\"promotion-desc\" ng-bind-html=\"outOfAmazing.promotionDesc\"></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- Section FAQ -->\n" +
    "  <frequently-asked-questions\n" +
    "    event-name-read-more=\"eventNameReadMore\"\n" +
    "    event-prefix=\"'how'\"\n" +
    "    plan-prices=\"planPrices\">\n" +
    "  </frequently-asked-questions>\n" +
    "\n" +
    "  <!--section Get Started-->\n" +
    "  <get-started get-started-title=\"getStartedTitle\" event-name-get-started=\"eventNameGetStarted\" get-started-onclick=\"getStartedOnclick()\"></get-started>\n" +
    "</div>\n" +
    "")

$templateCache.put("marketing/keto-plan/keto-plan.tpl.html","<div class=\"marketing-page keto-plan\">\n" +
    "  <div class=\"keto-plan-wrapper\">\n" +
    "    <!-- Section Introduction -->\n" +
    "    <section class=\"introduction\">\n" +
    "      <div class=\"background-image\"></div>\n" +
    "      <div class=\"introduction-content\">\n" +
    "        <h2 class=\"plan-name\">Keto</h2>\n" +
    "        <p class=\"plan-intro\">Is On The Menu</p>\n" +
    "        <p class=\"meal-name\">Salsa Verde Chicken</p>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <!-- Navbar indicator content page -->\n" +
    "    <div class=\"keto-plan-navbar\">\n" +
    "      <ul class=\"list-content-indicator\">\n" +
    "        <li class=\"indicator-item\" ng-repeat=\"item in navbarIndicator\">\n" +
    "          <a href=\"\" track-click event-name=\"{{item.eventName}}\" ng-click=\"scrollTo(item.eventName)\">{{item.sectionName}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Section New Keto Plan -->\n" +
    "    <section class=\"keto-plan-content\" id=\"new-keto-plan\">\n" +
    "      <div class=\"sefl-container\">\n" +
    "        <div class=\"keto-plan-main-content\">\n" +
    "          <div class=\"plan-wrapper-image\">\n" +
    "            <img src=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/keto_plan@1x.ca58d834.jpg\" srcset=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/keto_plan@2x.9a458134.jpg 2x\" class=\"plan-image\" alt=\"keto_plan\">\n" +
    "          </div>\n" +
    "          <div class=\"plan-description\">\n" +
    "            <p class=\"plan-text\">The All-New Green Chef</p>\n" +
    "            <h3 class=\"plan-name\">Keto Plan</h3>\n" +
    "            <p class=\"plan-description-detail\">Green Chef’s keto-friendly plan offers satisfying dinners designed for low-carb lifestyles. Our meals are also gluten-free. If you are following a ketogenic diet, our dinners will keep you on track and wow you with flavor.</p>\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-get-started\" track-click event-name=\"keto-getstarted\" ng-click=\"getStartedOnclick()\">Get Started</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"preview-recipes\">\n" +
    "          <p class=\"preview-recipes-title\">A Preview Of Recipes To Come</p>\n" +
    "          <ul class=\"preview-recipes-list\" id=\"preview-recipes\" ng-init=\"initOwl()\">\n" +
    "            <li class=\"recipe-item\">\n" +
    "              <div class=\"recipe-wrapper-image\">\n" +
    "                <img class=\"hidden-xs recipe-image\" src=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/merguez_chicken@1x.66b98a5b.jpg\" srcset=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/merguez_chicken@2x.760d4672.jpg 2x\" alt=\"merguez_chicken\">\n" +
    "                <img class=\"visible-xs recipe-image\" src=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/merguez_chicken_mobile@1x.13696bd7.jpg\" srcset=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/merguez_chicken_mobile@2x.6e373697.jpg 2x\" alt=\"merguez_chicken\">\n" +
    "              </div>\n" +
    "              <h4 class=\"recipe-name\">Merguez Chicken</h4>\n" +
    "            </li>\n" +
    "            <li class=\"recipe-item\">\n" +
    "              <div class=\"recipe-wrapper-image\">\n" +
    "                <img class=\"hidden-xs recipe-image\" src=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/mustard_fork@1x.972cf95e.jpg\" srcset=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/mustard_fork@2x.8fb03d78.jpg 2x\" alt=\"mustard_fork\">\n" +
    "                <img class=\"visible-xs recipe-image\" src=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/mustard_fork_mobile@1x.9080e2f1.jpg\" srcset=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/mustard_fork_mobile@2x.8fb03d78.jpg 2x\" alt=\"mustard_fork\">\n" +
    "              </div>\n" +
    "              <h4 class=\"recipe-name\">Mustard Pork</h4>\n" +
    "            </li>\n" +
    "            <li class=\"recipe-item\">\n" +
    "              <div class=\"recipe-wrapper-image\">\n" +
    "                <img class=\"hidden-xs recipe-image\" src=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/sesame_tuna@1x.a2c9c0cf.jpg\" srcset=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/sesame_tuna@2x.7ccbf83f.jpg 2x\" alt=\"sesame_tuna\">\n" +
    "                <img class=\"visible-xs recipe-image\" src=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/sesame_tuna_mobile@1x.5a6475ba.jpg\" srcset=\"//cdn.greenchef.com/assets/Marketing/KetoPlan/sesame_tuna_mobile@2x.3d1e025f.jpg 2x\" alt=\"sesame_tuna\">\n" +
    "              </div>\n" +
    "              <h4 class=\"recipe-name\">Sesame Tuna</h4>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <p class=\"preview-recipes-interesting\">Who says keto food is bland? You could be dining on crisp coconut-breaded chicken fingers with curry aïoli, juicy pork chops seasoned with rosemary and mustard-caraway spices, or savory sole roulade served alongside bacon-roasted green beans. Yes, bacon! And that’s just for starters.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <!-- Section What is Keto? -->\n" +
    "    <section class=\"keto-plan-meaning\" id=\"what-is-keto\">\n" +
    "      <div class=\"sefl-container\">\n" +
    "        <div class=\"expand-content\">\n" +
    "          <h3 class=\"keto-plan-meaning-title\">What is Keto?</h3>\n" +
    "          <p class=\"keto-plan-meaning-detail\">A ketogenic diet is high in good fats, moderate in protein, and low in sugars and carbohydrates. This diet helps the body achieve a metabolic state called ketosis, using ketones produced in the liver for energy rather than glucose from carbs. The body works harder to break down ketones and burns more fat.</p>\n" +
    "          <p class=\"keto-plan-meaning-advice\">Always seek the advice of your physician or a qualified health care provider with any questions regarding your health, diet, or fitness. Green Chef does not provide medical, dietary, or fitness advice.</p>\n" +
    "          <p class=\"keto-plan-meaning-question\">Is Green Chef Keto Right For Me?</p>\n" +
    "          <button class=\"btn-expand\"\n" +
    "                ng-click=\"toggleReason = !toggleReason\"\n" +
    "                ng-class=\"{'selected': toggleReason}\"\n" +
    "                track-click event-name=\"keto-plus\"></button>\n" +
    "        </div>\n" +
    "        <div class=\"reason-choosing\" ng-show=\"toggleReason\">\n" +
    "          <p class=\"reason-item\">Green Chef Keto can be for anybody looking to limit carbs. If you follow a ketogenic lifestyle and want to add delicious variety to the mix, this is the perfect fit. Or if you’re simply keto-curious, Green Chef Keto can offer you a taste of eating ketogenic.</p>\n" +
    "          <p class=\"reason-item\">You’re sure to love Green Chef Keto if you’re already a fan of our paleo dinners. Like paleo, our delicious keto-friendly meals have no wheat, gluten, or grains.</p>\n" +
    "          <p class=\"reason-item\">We make it easy to switch between meal plans week to week and encourage you to experience Green Chef Keto yourself. After all, variety is the&hellip;well, you know!</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <!-- Section FAQs -->\n" +
    "    <div id=\"keto-faq\">\n" +
    "      <frequently-asked-questions\n" +
    "        event-name-read-more=\"eventNameReadMore\"\n" +
    "        event-prefix=\"'how'\"\n" +
    "        faq-config=\"faqConfig\",\n" +
    "        plan-prices=\"planPrices\">\n" +
    "      </frequently-asked-questions>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("marketing/why-gc/why-gc.tpl.html","<div class=\"marketing-page why-green-chef\">\n" +
    "  <!--section banner-->\n" +
    "  <section class=\"main-why-greenchef\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <div class=\"background-image\"></div>\n" +
    "      <div class=\"main-why-greenchef-content\">\n" +
    "        <div class=\"main-why-greenchef-title\">\n" +
    "          <h2>More Flavor.<br>\n" +
    "            More Options.\n" +
    "          </h2>\n" +
    "          <div class=\"certify\">\n" +
    "            <span class=\"usda-organic\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--section consumer reports-->\n" +
    "  <div class=\"consumer-reports\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <a href=\"http://www.consumerreports.org/food/consumer-reports-reviews-green-chef/\" target=\"_blank\" class=\"cr-icon\"></a>\n" +
    "      <p class=\"consumer-reports-note\">See what the most trusted consumer review publication has to say about Green Chef.</p>\n" +
    "      <a href=\"http://www.consumerreports.org/food/consumer-reports-reviews-green-chef/\" target=\"_blank\" class=\"link-button\" track-click event-name=\"{{consumerreports}}\"></a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--section comments by partner-->\n" +
    "  <section class=\"comments vogue\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <h3 class=\"comments-desc\" ng-bind-html=\"comments.vogue\"></h3>\n" +
    "      <span class=\"logo\"></span>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--section you can trust the food you eat-->\n" +
    "  <section class=\"trusting-food\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <div class=\"expand-content\">\n" +
    "        <h3 class=\"trusting-food-heading\">{{trustingFood.title}}</h3>\n" +
    "        <p class=\"trusting-food-desc\">{{trustingFood.desc1}}</p>\n" +
    "        <p class=\"trusting-food-desc\">{{trustingFood.desc2}}</p>\n" +
    "        <ul class=\"reasons\">\n" +
    "          <li class=\"reason-item\" ng-repeat=\"reason in trustingFood.reasons\"\n" +
    "              ng-class=\"{\n" +
    "                'gmo': reason.type === 'gmo',\n" +
    "                'usda': reason.type === 'usda',\n" +
    "                'sustainable': reason.type === 'sustainable'}\">\n" +
    "              <span class=\"reason-item-icon\"></span>\n" +
    "              <h4 class=\"reason-item-heading\" ng-bind-html=\"reason.title\" ng-if=\"reason.title\"></h4>\n" +
    "              <h4 class=\"no-reason-item-heading\" ng-bind-html=\"reason.title\" ng-if=\"!reason.title\"></h4>\n" +
    "              <p class=\"reason-item-desc\">{{reason.description}}</p>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "        <a class=\"link-call-to-action see-why-choosing\" track-click event-name=\"{{trustingFood.event_name_text}}\">{{trustingFood.text_more}}</a>\n" +
    "        <button class=\"btn-expand\"\n" +
    "                track-click event-name=\"{{trustingFood.event_name_plus}}\"\n" +
    "                ng-click=\"trustingFood.toggle = !trustingFood.toggle\"\n" +
    "                ng-class=\"{'selected': trustingFood.toggle}\">\n" +
    "        </button>\n" +
    "      </div>\n" +
    "      <div class=\"reason-choosing\" ng-show=\"trustingFood.toggle\">\n" +
    "        <p>{{trustingFood.reasons_choosing1}}</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--section comments by partner-->\n" +
    "  <section class=\"comments forbes\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <h3 class=\"comments-desc\" ng-bind-html=\"comments.forbes\"></h3>\n" +
    "      <span class=\"logo\"></span>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--section we do hard parts-->\n" +
    "  <section class=\"hard-parts\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <h3 class=\"hard-parts-title\">{{hardParts.title}}</h3>\n" +
    "      <p class=\"hard-parts-desc\">{{hardParts.description}}</p>\n" +
    "      <ul class=\"hard-parts-list\">\n" +
    "        <li class=\"part-item\" ng-repeat=\"part in hardParts.parts\">\n" +
    "          <h4 class=\"why-hard-title\" ng-bind-html=\"part.title\"></h4>\n" +
    "          <p class=\"why-hard-detail\">{{part.content}}</p>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--section comments by partner-->\n" +
    "  <section class=\"comments self\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <h3 class=\"comments-desc\" ng-bind-html=\"comments.self\"></h3>\n" +
    "      <span class=\"logo\"></span>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--section discovery greenchef-->\n" +
    "  <div class=\"discover-greenchef\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <div class=\"discover-item\" ng-repeat=\"item in discoverGreenchef\"\n" +
    "        ng-class=\"{\n" +
    "          'yoga': item.type === 'yoga',\n" +
    "          'tokyo': item.type === 'tokyo'\n" +
    "        }\">\n" +
    "        <div class=\"discover-item-info information-detail\">\n" +
    "          <h3 class=\"heading\" ng-bind-html=\"item.title\"></h3>\n" +
    "          <p class=\"desc-detail\">{{item.description}}</p>\n" +
    "          <a href=\"{{item.href_url}}\" target=\"_blank\" class=\"link-call-to-action see-the-menu\" track-click event-name=\"{{item.event_name}}\">{{item.content_url}}</a>\n" +
    "        </div>\n" +
    "        <div class=\"discover-item-info placeholder\">\n" +
    "          <div class=\"background-image\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--section be a greenchef-->\n" +
    "  <section class=\"be-a-greenchef\">\n" +
    "    <div class=\"self-container\">\n" +
    "      <div class=\"background-image\"></div>\n" +
    "      <div class=\"information\">\n" +
    "        <h3 class=\"be-a-greenchef-title\">{{beAGreenChef.title}}</h3>\n" +
    "        <p class=\"desc-detail\" ng-bind-html=\"beAGreenChef.desc1\"></p>\n" +
    "        <p class=\"desc-detail\" ng-bind-html=\"beAGreenChef.desc2\"></p>\n" +
    "        <a href=\"{{beAGreenChef.href_url}}\" target=\"_blank\" class=\"link-call-to-action see-the-packaging hidden-xs\" track-click event-name=\"{{beAGreenChef.event_name}}\">{{beAGreenChef.content_url_desktop}}</a>\n" +
    "        <a href=\"{{beAGreenChef.href_url}}\" target=\"_blank\" class=\"link-call-to-action see-the-packaging visible-xs\" ng-bind-html=\"beAGreenChef.content_url_mobile\" track-click event-name=\"{{beAGreenChef.event_name}}\"></a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--section FAQs-->\n" +
    "  <frequently-asked-questions\n" +
    "    event-name-read-more=\"eventNameReadMore\"\n" +
    "    event-prefix=\"'why'\"\n" +
    "    plan-prices=\"planPrices\">\n" +
    "  </frequently-asked-questions>\n" +
    "\n" +
    "  <!--section Get Started-->\n" +
    "  <get-started\n" +
    "    get-started-title=\"getStartedTitle\"\n" +
    "    event-name-get-started=\"eventNameGetStarted\"\n" +
    "    get-started-onclick=\"getStartedOnclick()\">\n" +
    "  </get-started>\n" +
    "</div>\n" +
    "")

$templateCache.put("on-the-menu/directives/join-now.tpl.html","<div class=\"join-group\">\n" +
    "    <p class=\"intro\">Get a delicious variety of premium ingredients and chef-crafted recipes delivered weekly.</p>\n" +
    "    <a href ui-sref=\"sign-up-v2.welcome\"\n" +
    "       track-sign-up track-click event-name=\"{{logEvents}}\"\n" +
    "       class=\"join-now btn btn-join-now-v2\"\n" +
    "    >\n" +
    "        Join Now\n" +
    "    </a>\n" +
    "</div>\n" +
    "")

$templateCache.put("on-the-menu/main/v3.on-the-menu.tpl.html","<div class=\"on-the-menu v2-page menu-v2\">\n" +
    "  <div ui-view=\"menu-specific\"></div>\n" +
    "</div>\n" +
    "")

$templateCache.put("shared/legal-changes/legal-changes.tpl.html"," <div class=\"v3 legal-changes-banner\" ng-if=\"vm.shouldDisplay\">\n" +
    "   <span ng-if=\"vm.v1\">\n" +
    "    On August 28, 2017, we will be updating our <span class=\"link\" ui-sref=\"terms({version: {{vm.LegalUpdate.currentChange}}})\">Terms of Service</span> and <span class=\"link\" ui-sref=\"privacy({version: {{vm.LegalUpdate.currentChange}}})\">Privacy Policy</span>. Please click on the links to review.\n" +
    "  </span>\n" +
    "\n" +
    "  <span ng-if=\"vm.v2\">\n" +
    "    On August 28, 2017, we updated our <span class=\"link\" ui-sref=\"terms({version: {{vm.LegalUpdate.currentChange}}})\">Terms of Service</span> and <span class=\"link\" ui-sref=\"privacy({version: {{vm.LegalUpdate.currentChange}}})\">Privacy Policy</span>.  By clicking the checkmark, you agree to the terms of the new Terms of Service and Privacy Policy.\n" +
    "  </span>\n" +
    "\n" +
    "  <span ng-if=\"vm.v3\">\n" +
    "    On August 28, 2017 we updated our <span class=\"link\" ui-sref=\"terms({version: {{vm.LegalUpdate.currentChange}}})\">Terms of Service</span> and <span class=\"link\" ui-sref=\"privacy({version: {{vm.LegalUpdate.currentChange}}})\">Privacy Policy</span>. Your continued use of Green Chef, including this site, indicates you agree to our new Terms of Service and Privacy Policy.\n" +
    "  </span>\n" +
    "  <div class=\"pull-right\" track-click event-name=\"ToS20170828\" ng-click=\"vm.acceptTerms()\">\n" +
    "    <span class=\"checkbox\"></span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("terms/directives/20150511.privacy.tpl.html","<p>If you signed up for Green Chef on or after 7/28/17, click  <a href ui-sref=\"privacy({version: {{vm.LegalUpdate.currentChange}}})\">here</a></p>\n" +
    "\n" +
    "<h1>Green Chef Privacy Policy</h1>\n" +
    "\n" +
    "<b>Last Updated as of 11th August 2015</b>\n" +
    "\n" +
    "<p>\n" +
    "    We at Green Chef Corporation (&ldquo;<span class=\"term\">Green Chef</span>,&rdquo; &ldquo;<span class=\"term\">we</span>,&rdquo; &ldquo;<span class=\"term\">us</span>,&rdquo; or &ldquo;<span class=\"term\">our</span>&rdquo;) have created this privacy policy ( &ldquo;<span class=\"term\">Privacy Policy</span>&rdquo;) because we know that you care about how the information you provide to us is used and shared.  This Privacy Policy relates to Green Chef&#x2019;s information collection, use, and sharing practices in connection with our online services (the &ldquo;<span class=\"term\">Services</span>&rdquo;), which are made available to you through a variety of platforms, including our website http://www.greenchef.com (the &ldquo;<span class=\"term\">Site</span>&rdquo;).\n" +
    "</p>\n" +
    "<p>\n" +
    "    By visiting our Site and/or using our Services, you are agreeing to the terms of this Privacy Policy and the accompanying <a href ui-sref=\"terms({version: {{vm.LegalUpdate.previousChange}}})\">Terms of Use</a>. Capitalized terms not defined in this Privacy Policy shall have the meaning set forth in our\n" +
    "    <a href ui-sref=\"terms({version: {{vm.LegalUpdate.previousChange}}})\">Terms of Use</a>.\n" +
    "</p>\n" +
    "<!-- Table of Contents -->\n" +
    "<ul>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"the-information-we-collect\" y-offset='140'>The Information We Collect</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"cookies-and-other-tracking-mechanisms\" y-offset='140'>Cookies and Other Tracking Mechanisms</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"do-not-track-disclosures\" y-offset='140'>Do Not Track Disclosures</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"accessing-and-modifying-personal-information-and-communication-preferences\" y-offset='140'>Accessing and Modifying Personal Information and Communication Preferences</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"how-we-use-your-information\" y-offset='140'>How We Use and Share your Information</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"how-we-use-your-information\" y-offset='140'>How We Use Your Information</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"how-we-share-your-information\" y-offset='140'>How We Share Your Information</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"security\" y-offset='140'>Security</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"children\" y-offset='140'>Children</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"special-information-for-california-consumers\" y-offset='140'>Special Information for California Consumers</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"external-websites\" y-offset='140'>External Websites</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"changes-to-this-privacy-policy\" y-offset='140'>Changes to this Privacy Policy</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"how-to-contact-us\" y-offset='140'>How to Contact Us</a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "\n" +
    "<p>\n" +
    "<h3 id=\"the-information-we-collect\">\n" +
    "    The Information We Collect\n" +
    "</h3>\n" +
    "</p>\n" +
    "\n" +
    "<ol>\n" +
    "    <li>\n" +
    "        <span class=\"term\">Information We Collect Directly from You</span>\n" +
    "        <p>\n" +
    "            We may collect information about you when you use our Site, such as when you sign up to become a Subscriber, order a gift subscription, enter a contest, promotion, or sweepstakes, sign up to receive our recipes, or otherwise voluntarily provide us with information. Such information may include your name, e-mail address, mailing address, password, username, phone number, credit or debit card number, and billing information. We will also collect any other information that you voluntarily provide to us, such as your dietary preferences, hobbies, personal interests, and demographics (e.g., gender) or other information that you provide as part of a survey, contest, or promotion or through interactive area of the Site. We may combine the information we collect directly from you with information that we collect from third parties or automatically collect about you.\n" +
    "        </p>\n" +
    "\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <span class=\"term\">Information We Collect from Third Parties</span>\n" +
    "        <p>\n" +
    "            We may collect information about you from third parties. For example, we may collect information about you from social networking platforms, such as your user name. Please see our <a href=\"#external-websites\">External Websites</a> section below for more information about the privacy practices of third parties.\n" +
    "        </p>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <span class=\"term\">Information We Collect Automatically</span>\n" +
    "        <p>\n" +
    "            In addition to the information noted above, we may collect additional information about you, such as your IP addresses, browser type and language, referring and exit pages and URLs, date and time, amount of time spent on particular pages, what sections of the Site you visit, device identification, the content you post or share, order information, screen resolution, and similar information concerning your use of the Services.\n" +
    "        </p>\n" +
    "</ol>\n" +
    "\n" +
    "<h3 id=\"cookies-and-other-tracking-mechanisms\">\n" +
    "    Cookies and Other Tracking Mechanisms\n" +
    "</h3>\n" +
    "\n" +
    "We and our service providers use cookies and other tracking mechanisms to track your use of our Site, or Services.\n" +
    "\n" +
    "<ol>\n" +
    "    <li>\n" +
    "        <span class=\"term\">Cookies</span>. Information that we collect using &ldquo;<span class=\"term\">cookie</span>&rdquo; technology and pixel tags (also called web beacons or clear gifs). Cookies are small packets of data that a website stores on your computer&#x2019;s hard drive so that your computer will &ldquo;<span class=\"term\">remember</span>&rdquo; information about your visit. We use cookies to help us collect Other Information and to enhance your experience using the Services.\n" +
    "\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <span class=\"term\">Session Cookies</span>. Session cookies exist only during an online session. They disappear from your computer when you close your browser or turn off your computer. We use session cookies to allow our systems to uniquely identify you during a session or while you are logged into the Site. This allows us to process your online transactions and requests and verify your identify, after you have logged in, and as you move through our Site.\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <span class=\"term\">Persistent Cookies</span>. Persistent cookies remain on your computer after you have closed your browser or turned off your computer. We use persistent cookies to track aggregate and statistical information about user activity, and to display advertising both on our Site and on third-party websites.\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        Most web browsers automatically accept cookies, but if you prefer, you can edit your browser options to block them in the future. Please consult your Internet browser&#x2019;s documentation for information on how to do this. However, if you decide not to accept cookies from us, certain areas of the Site and some of the Services may not function properly.\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "        <span class=\"term\">Clear GIFs, pixel tags and other technologies</span>. Clear GIFs are tiny graphics with a unique identifier, similar in function to cookies, which are embedded invisibly on web pages. We or our service providers may use clear GIFs (also known as web beacons, web bugs or pixel tags), in connection with our Site to track the activities of visitors to our Site, help us manage content, and compile statistics about usage of our Site. We or our service providers may also use clear GIFs in HTML emails to our users, to help us track email response rates, identify when our emails are viewed, and track whether our emails are forwarded.\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "        <span class=\"term\">Third-party analytics</span>. We use service providers, such as <a href=\"http://www.google.com/intl/en/policies/privacy/\">Google Analytics</a> and <a href=\"https://www.appdynamics.com/privacy-policy/\">AppDynamics</a>, to evaluate the use of our Site and our Services. We or our service providers use automated devices and applications to evaluate use of our Site and Services. We or our service providers use these tools to help us improve our Site, Services, performance, and user experiences. These third parties may use cookies, pixel tags (also called web beacons or clear gifs), and/or other technologies to collect such Other Information for such purposes. Pixel tags enable us, and these third-party advertisers, to recognize a browser&#x2019;s cookie when a browser visits the site on which the pixel tag is located in order to learn which advertisement brings a user to a given site.\n" +
    "    </li>\n" +
    "</ol>\n" +
    "\n" +
    "<h3 id=\"do-not-track-disclosures\">\n" +
    "    Do Not Track Disclosures\n" +
    "</h3>\n" +
    "\n" +
    "Our Site does not respond to Do Not Track (DNT) signals and may track your activity after you leave our Site.\n" +
    "\n" +
    "<h3 id=\"accessing-and-modifying-personal-information-and-communication-preferences\">\n" +
    "    Accessing and Modifying Personal Information and Communication Preferences\n" +
    "</h3>\n" +
    "\n" +
    "If you have registered for the Services, you may access, review, and make changes to certain information by following the instructions found on the Site. In addition, you may manage your receipt of marketing communications by clicking on the &ldquo;<span class=\"term\">unsubscribe</span>&rdquo; link located on the bottom of any Green Chef marketing email. Subscribers cannot opt out of receiving administrative or transactional emails related to their account or use of our Services. We will use commercially reasonable efforts to process such requests in a timely manner. You should be aware, however, that it is not always possible to completely remove or modify information in our subscription databases.\n" +
    "\n" +
    "<h3 id=\"how-we-use-your-information\">\n" +
    "    How We Use Your Information\n" +
    "</h3>\n" +
    "\n" +
    "We use the information we collect about you to process transactions; provide you the Services; communicate with you, including to solicit your feedback; tailor the content and information that we may send or display to you; advertise or market to you, including to inform you about our products, services, upcoming events, recipes, and special promotions and those of our third-party marketing partners; administer and process contests, promotions, and sweepstakes; analyze and improve our Site and Services; comply with legal or regulatory obligations or cooperate with a law enforcement or other governmental investigation; and protect our rights and interests and those of others.\n" +
    "\n" +
    "<h3 id=\"how-we-share-your-information\">\n" +
    "    How We Share Your Information\n" +
    "</h3>\n" +
    "\n" +
    "Also, we may share your information as described below.\n" +
    "<ul>\n" +
    "    <li>When we employ other companies and individuals to perform functions on our behalf, such as, food services, delivery services, marketing assistance, information technology support, and customer service.\n" +
    "    </li>\n" +
    "    <li>\n" +
    "    For promotional or marketing purposes. For example, we may share your information with our third-party promotional and marketing partners in order to administer our contests, promotions, and sweepstakes.\n" +
    "    </li>\n" +
    "    <li>\n" +
    "    In an ongoing effort to better understand our users and our Services, we might analyze the information we collect about you in order to operate, maintain, manage, and improve the Services, and to develop additional products or services. We may also share aggregate or de-identified data about users with our affiliates, agents, business partners, and other third parties for marketing, advertising, research and analysis or similar purposes. We may also disclose aggregated user statistics in order to describe our products and Services to current and prospective business partners and to other third parties for other lawful purposes.\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "    As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution, bankruptcy, or similar event, your information may be part of the transferred assets.\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "    With any current or future affiliates, parent companies, or subsidiaries.\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "    To the extent permitted by law, we may also disclose your information when required by law, court order, or other government or law enforcement authority or regulatory agency, or whenever we believe that disclosing the such information is necessary or advisable, for example, to protect the rights, property, or safety of Green Chef or others.\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "    We may disclose your information to other unaffiliated third parties, such as our marketing partners. These third parties may use such information for their own marketing purposes. Please see our <a href=\"#special-information-for-california-consumers\">Special Information for California Consumers</a> section below with regard to such disclosures.\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "    We may disclose aggregate, anonymous, or de-identified information about users for marketing, advertising, research, or other purposes.\n" +
    "    </li>\n" +
    "</ul>\n" +
    "\n" +
    "<h3 id=\"security\">\n" +
    "    Security\n" +
    "</h3>\n" +
    "<p>\n" +
    "We take steps to help protect your information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no security measures can guarantee 100% security.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "For example, we cannot guarantee that the information you supply will not be intercepted while being transmitted to and from us over the Internet.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "You should take steps to protect against unauthorized access to your password, phone, and computer by, among other things, signing off after using a shared computer, choosing a robust password that nobody knows or can easily guess, and keeping your log-in and password private. We are not responsible for any lost, stolen, or compromised passwords or for any activity on your account via unauthorized password activity.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "Please note email sent to or from the Site may not be secure, and you should therefore take special care in deciding what information you send to us via email. Emails sent through the Internet may be viewed, altered, or copied by potentially anyone on the Internet. We are not responsible for the security of confidentiality of email communications you send to us.\n" +
    "</p>\n" +
    "\n" +
    "<h3 id=\"children\">\n" +
    "    Children\n" +
    "</h3>\n" +
    "Our Services are not targeted to or designed for children. We do not knowingly collect Personal Information from children under the age of 13 through the Services. If you have reason to believe that a child under the age of 13 has provided Personal Information to us, please contact us, and we will endeavor to delete that information from our databases.\n" +
    "\n" +
    "<h3 id=\"special-information-for-california-consumers\">\n" +
    "    Special Information for California Consumers\n" +
    "</h3>\n" +
    "\n" +
    "California residents may request a list of certain third parties to which we have disclosed personally identifiable information about you for their own direct marketing purposes. You may make one request per calendar year. In your request, please attest to the fact that you are a California resident and provide a current California address for your response. You may request this information in writing by contacting us at: <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>. Please allow up to thirty (30) days for a response.\n" +
    "\n" +
    "<h3 id=\"external-websites\">\n" +
    "    External Websites\n" +
    "</h3>\n" +
    "\n" +
    "The Site may contain links to third-party websites. Green Chef has no control over the privacy practices or the content of any of our business partners, advertisers, sponsors, or other websites to which we provide links. As such, we are not responsible for the content or the privacy policies of those third-party websites. You should check the applicable third-party privacy policy and terms of use when visiting any other websites.\n" +
    "\n" +
    "<h3 id=\"changes-to-this-privacy-policy\">\n" +
    "    Changes to This Privacy Policy\n" +
    "</h3>\n" +
    "\n" +
    "This Privacy Policy is effective as of the date set forth above. We may change this Privacy Policy from time to time, and will post any changes on the Site. By accessing the Site, or using the Services after we make any such changes to this Privacy Policy, you are deemed to have accepted such changes. Please refer back to this Privacy Policy on a regular basis.\n" +
    "\n" +
    "<h3 id=\"how-to-contact-us\">\n" +
    "    How to Contact Us\n" +
    "</h3>\n" +
    "\n" +
    "If you have questions about this Privacy Policy, please contact us at <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>.\n" +
    "")

$templateCache.put("terms/directives/20150511.tos.tpl.html","<p>If you signed up for Green Chef on or after 7/28/17, click  <a href ui-sref=\"terms({version: {{vm.LegalUpdate.currentChange}}})\">here</a></p>\n" +
    "\n" +
    "<h1>Green Chef Terms of Use</h1>\n" +
    "\n" +
    "<h2>Last Updated: May 11, 2015</h2>\n" +
    "\n" +
    "<p>\n" +
    "    THESE TERMS OF USE (THE &ldquo;<span class=\"term\">TERMS</span>&rdquo; OR THE &ldquo;<span class=\"term\">AGREEMENT</span>&rdquo;) ARE A LEGAL CONTRACT BETWEEN YOU AND GREEN CHEF CORPORATION (&ldquo;<span class=\"term\">GREEN CHEF,</span>&rdquo; &ldquo;<span class=\"term\">WE,</span>&rdquo; &ldquo;<span class=\"term\">US,</span>&rdquo; OR &ldquo;<span class=\"term\">OUR</span>&rdquo;).  THE TERMS EXPLAIN HOW YOU ARE PERMITTED TO USE THE SITE LOCATED AT THE URL:\n" +
    "    <a href=\"/\">WWW.GREENCHEF.COM</a> AS WELL AS ALL ASSOCIATED SITES LINKED TO\n" +
    "    <a href=\"/\">WWW.GREENCHEF.COM</a> BY THE COMPANY, ITS SUBSIDIARIES AND AFFILIATED COMPANIES (COLLECTIVELY, THE &ldquo;<span class=\"term\">SITE</span>&rdquo;).  UNLESS OTHERWISE SPECIFICED, ALL REFERENCES TO &ldquo;<span class=\"term\">SITE</span>&rdquo; INCLUDE ANY SOFTWARE THAT GREEN CHEF PROVIDES TO YOU THAT ALLOWS YOU TO ACCESS THE SITE FROM A MOBILE DEVICE (A &ldquo;<span class=\"term\">MOBILE APPLICATION</span>&rdquo;).  BY USING THIS SITE, YOU ARE AGREEING TO ALL THE TERMS; IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, DO NOT ACCESS OR OTHERWISE USE THIS SITE OR ANY INFORMATION CONTAINED ON THIS SITE.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Please review our <a href ui-sref=\"privacy({version: {{vm.LegalUpdate.previousChange}}})\">Privacy Policy</a> (the &ldquo;<span class=\"term\">Privacy Policy</span>&rdquo;) which explains how we use information that you submit to the Company.  Capitalized terms not defined in these Terms of Use shall have the meaning set forth in our <a href ui-sref=\"privacy({version: {{vm.LegalUpdate.previousChange}}})\">Privacy Policy</a>.\n" +
    "</p>\n" +
    "\n" +
    "<h2>1. DESCRIPTION AND USE OF THE SERVICES</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef is a new concept in grocery delivery, built around incredible cooking experiences.  Through the services provided by us through the Site and described in these Terms (collectively the &ldquo;<span class=\"term\">Services</span>&rdquo;), we offer our unique once-a-week subscription, where we deliver all the fresh ingredients you need to make meals, in exactly the right proportions.  We've designed our Services to teach you fun new recipes, save prep time, and also reduce unnecessary waste.  By letting us shop for you, we can bring you fresher and higher-quality food than you can get on your own in the supermarket, often for better prices!\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    We provide visitors and subscribers with access to our Site and Services as described in this Agreement.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    <span class=\"term\">Visitors</span>.  Visitors, as the term implies, are people who do not register with us, but want to view all publicly-accessible Content (as defined below).  You need not register with us to simply visit and view the Site.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    <span class=\"term\">Subscribers</span>.  Registration and login is required for all subscribers (each a &ldquo;<span class=\"term\">Subscriber</span>&rdquo; and, collectively, the &ldquo;<span class=\"term\">Subscribers</span>&rdquo;).  In addition to viewing all publicly-accessible Content, by becoming a Subscriber you can use the Site to: (i) select the type of plan you want, the number of people and begin receiving our fresh ingredients and delicious recipes; (ii) provide us feedback in our online forum and upload content, including text, videos, and photos (collectively, &ldquo;<span class=\"term\">User Content</span>&rdquo;); (iii) sign up for alerts, other notifications, and our newsletter; and (iv) sign up for our contests, promotions, and sweepstakes.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    We are under no obligation to accept any individual as a Subscriber, and may accept or reject any registration in our sole and complete discretion.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    By using this Site, you represent, acknowledge and agree that you are at least 18 years of age, or if you are under 18 years of age but are at least 13 years old (a &ldquo;<span class=\"term\">Minor</span>&rdquo;), that you are using the Site with the consent of your parent or legal guardian and that you have received your parent's or legal guardian's permission to use the Site and agree to its Terms.  If you are a parent or legal guardian of a Minor, you hereby agree to bind the Minor to these Terms and to fully indemnify and hold harmless Green Chef if the Minor breaches any of these Terms.  If you are not at least 13 years old, you may not use the Site at any time or in any manner or submit any information to Green Smith or the Site.\n" +
    "</p>\n" +
    "\n" +
    "<h2>2. MOBILE APPLICATIONS</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef makes available Mobile Applications to access the Site via a mobile device.  To use the Mobile Application you must have a mobile device that is compatible with the mobile service.  Green Chef does not warrant that the Mobile Application will be compatible with your mobile device.  Green Chef hereby grants to you a non-exclusive, non-transferable, revocable license to use an object code copy of the Mobile Application for one registered account on one mobile device owned or leased solely by you, for your personal use.  You may not: (i) modify, disassemble, decompile or reverse engineer the Mobile Application, except to the extent that such restriction is expressly prohibited by law; (ii) rent, lease, loan, resell, sublicense, distribute or otherwise transfer the Mobile Application to any third-party or use the Mobile Application to provide time sharing or similar services for any third-party; (iii) make any copies of the Mobile Application; (iv) remove, circumvent, disable, damage or otherwise interfere with security-related features of the Mobile Application, features that prevent or restrict use or copying of any content accessible through the Mobile Application, or features that enforce limitations on use of the Mobile Application; or (v) delete the copyright and other proprietary rights notices on the Mobile Application.  You acknowledge that Green Chef may from time to time issue upgraded versions of the Mobile Application, and may automatically electronically upgrade the version of the Mobile Application that you are using on your mobile device.  You consent to such automatic upgrading on your mobile device, and agree that these Terms will apply to all such upgrades.  The foregoing license grant is not a sale of the Mobile Application or any copy thereof, and Green Chef and its third-party licensors or suppliers retain all right, title, and interest in and to the Mobile Application (and any copy of the Mobile Application).  Standard carrier data charges may apply to your use of the Mobile Application.\n" +
    "    The following additional terms and conditions apply with respect to any Mobile Application that Green Chef provides to you designed for use on an Apple iOS-powered mobile device (an &ldquo;<span class=\"term\">iOS App</span>&rdquo;):\n" +
    "</p>\n" +
    "\n" +
    "<ul>\n" +
    "    <li>You acknowledge that these Terms are between you and Green Chef only, and not with Apple, Inc. (&ldquo;<span class=\"term\">Apple</span>&rdquo;).\n" +
    "    </li><li>Your use of Green Chef's iOS App must comply with Apple's then-current App Store Terms of Service.\n" +
    "</li><li>Green Chef, and not Apple, are solely responsible for our iOS App and the Services and Content available thereon.  You acknowledge that Apple has no obligation to provide maintenance and support services with respect to our iOS App.  To the maximum extent permitted by applicable law, Apple will have no warranty obligation whatsoever with respect to our iOS App.\n" +
    "</li><li>You agree that Green Chef, and not Apple, are responsible for addressing any claims by you or any third-party relating to our iOS App or your possession and/or use of our iOS App, including, but not limited to: (i) product liability claims; (ii) any claim that the iOS App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation, and all such claims are governed solely by these Terms and any law applicable to us as provider of the iOS App.\n" +
    "</li><li>You agree that Green Chef, and not Apple, shall be responsible, to the extent required by these Terms, for the investigation, defense, settlement and discharge of any third-party intellectual property infringement claim related to our iOS App or your possession and use of our iOS App.\n" +
    "</li><li>You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &ldquo;<span class=\"term\">terrorist supporting</span>&rdquo; country; and (ii) You are not listed on any U.S. Government list of prohibited or restricted parties.\n" +
    "</li><li>You agree to comply with all applicable third-party terms of agreement when using our iOS App (e.g., you must not be in violation of your wireless data service terms of agreement when using the iOS App).\n" +
    "</li>\n" +
    "</ul>\n" +
    "\n" +
    "<p>\n" +
    "    The parties agree that Apple and Apple's subsidiaries are third-party beneficiaries to these Terms as they relate to your license of Green Chef's iOS App.  Upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as they relate to your license of the iOS App as a third-party beneficiary thereof.\n" +
    "\n" +
    "</p>\n" +
    "\n" +
    "<h2>3. USAGE GUIDELINES</h2>\n" +
    "<p>\n" +
    "    By accessing and/or using the Site or our Services, you hereby agree to the following:\n" +
    "<ul>\n" +
    "    <li>You will not use the Site or our Services for any unlawful purpose;\n" +
    "    </li><li>Subscribers may not use the Services to engage in any commercial activities, including, without limitation, raising money; advertising or promoting a product, service, or company; or engaging in any pyramid or other multi-tiered marketing scheme;\n" +
    "</li><li>You will not upload, post, e-mail, transmit, or otherwise make available any User Content that:\n" +
    "    <ul>\n" +
    "</li><li>is false, deceptive, misleading, deceitful, or misinformative;\n" +
    "</li><li>infringes any copyright, trademark, trade secret, right of publicity, or other proprietary rights of any person or entity;\n" +
    "</li><li>is threatening, tortious, defamatory, libelous, indecent, obscene, pornographic, invasive of another's privacy, or promotes violence; or\n" +
    "</li><li>discloses any sensitive information about another person, including that person's e-mail address, postal address, phone number, credit card information, or any similar information;\n" +
    "</li>\n" +
    "</ul>\n" +
    "</li><li>You will not access or use the Site or our Services to collect any market research for a competing business;\n" +
    "</li><li>You will not impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity;\n" +
    "</li><li>You will not take any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our technical infrastructure;\n" +
    "</li><li>You will not use automated means, including spiders, robots, crawlers, data mining tools, or the like to download or scrape data from the Site or Services, except for Internet search engines (e.g., Google) and non-commercial public archives (e.g., archive.org) that comply with our robots.txt file;\n" +
    "</li><li>You will not cover, obscure, block, or in any way interfere with any advertisements and/or safety features (e.g., report abuse button) on the Site or within the Services; and\n" +
    "</li><li>You will not interfere with or attempt to interrupt the proper operation of the Site or the Services through the use of any virus, device, information collection or transmission mechanism, software or routine, or access or attempt to gain access to any data, files, or passwords through hacking, password or data mining, or any other means.\n" +
    "</li>\n" +
    "</ul>\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Please let us know about inappropriate content.  If you find something that violates our community guidelines, let us know, and we'll review it.  We reserve the right, in our sole and absolute discretion, to deny you access to the Site, or any portion of the Services, without notice, and remove any User Content that does not adhere to these guidelines.\n" +
    "</p>\n" +
    "\n" +
    "<h2>4. REGISTRATION FOR SUBSCRIBERS</h2>\n" +
    "<p>\n" +
    "    During the registration process for Subscribers, we will ask you to create an account, which includes a sign-in name (&ldquo;<span class=\"term\">Sign-In Name</span>&rdquo;), a password (&ldquo;<span class=\"term\">Password</span>&rdquo;), and perhaps certain additional information that will assist in authenticating your identity when you log-in in the future (&ldquo;<span class=\"term\">Unique Identifiers</span>&rdquo;).  When creating your account, you must provide true, accurate, current, and complete information.  Each Sign-In Name and corresponding Password can be used by only one Subscriber.  You are solely responsible for the confidentiality and use of your Sign-In Name, Password, and Unique Identifiers, as well as for any use, misuse, or communications entered through the Site using one or more of them.  You will promptly inform us of any need to deactivate a Password or Sign-In Name, or change any Unique Identifier.  We reserve the right to delete or change your Password, Sign-In Name, or Unique Identifier at any time and for any reason.  Green Chef will not be liable for any loss or damage caused by any unauthorized use of your account.\n" +
    "</p>\n" +
    "<h2>5. PAYMENT</h2>\n" +
    "<p>\n" +
    "    You agree that Green Chef may immediately authorize your credit card (or other approved payment method) for payment for any charges incurred under your account.\n" +
    "</p>\n" +
    "<p>\n" +
    "    You are fully responsible for all activities that occur under your account, and you agree to be personally liable for all charges incurred under your account.  Your liability for such charges shall continue after termination of this Agreement.\n" +
    "</p>\n" +
    "<p>\n" +
    "    If you have a question about any Green Chef charge on your credit card statement, please follow the instructions found on the Site to contact customer service.\n" +
    "</p>\n" +
    "<h2>6. ORDERING AND DELIVERY</h2>\n" +
    "<p>\n" +
    "    Green Chef does not deliver to every location, so please check our map to see if our Services are available in your area.  If we currently do not deliver to your area, but you would like us to, please let us know.  We are expanding the reach of our Services, so we recommend that you create an account, and we will use reasonable efforts to notify you when we launch in your zip code.\n" +
    "</p>\n" +
    "<p>\n" +
    "    When you sign up to become a Subscriber, your subscription will automatically renew until you cancel it.  You can skip a delivery or cancel your membership at any time.\n" +
    "    Please visit the &ldquo;<span class=\"term\"><a href ng-click=\"gotoMyAccount()\">My Account</a></span>&rdquo; or &ldquo;<span class=\"term\"><a href=\"//help.greenchef.com\">Frequently Asked Questions</a></span>&rdquo; section(s) of the Site on instructions on how to do so.  Please be aware, however, that because we plan, purchase, and prepare our meals in advance, both the skipping service and cancellation request require advanced notice to Green Chef, as set forth more specifically on the Site.  If you miss these deadlines, you will be responsible for paying the applicable amount, and the cancellation will take effect the next week.\n" +
    "</p>\n" +
    "<p>\n" +
    "    To provide flexibility to our valued customers, we offer different options as to when our deliveries will arrive to you.\n" +
    "    Please visit the &ldquo;<span class=\"term\"><a href ng-click=\"gotoMyAccount()\">My Account</a></span>&rdquo; or &ldquo;<span class=\"term\"><a href=\"//help.greenchef.com\">Frequently Asked Questions</a></span>&rdquo; section(s)\n" +
    "    of the Site on these options and how to change your selection.\n" +
    "</p>\n" +
    "<p>\n" +
    "    Green Chef uses reliable third-party delivery companies such as FedEx to deliver your meals.  Each box is carefully packaged to stay fresh until at least 10pm on the day of delivery. However, to maintain the highest quality and integrity of the meals after delivery, we recommend that you immediately refrigerate the items when you receive them.  Furthermore, you should inspect your package to ensure the contents arrive in a cool, refrigerated condition.  The best way to do this is to check the meat and fish with a thermometer to ensure their internal temperatures are 41F or below.  If a fresh food product arrives at above 41F, you should contact our customer service and discard the item.\n" +
    "</p>\n" +
    "<p>\n" +
    "    If you are not home when a delivery arrives, our delivery person will leave the package for you at your door; or at an apartment it could be an entryway, front desk or mailroom.  Again, since our food is packaged with insulated liners and gel packs, it is intended to remain cold and fresh until at least 10pm.\n" +
    "</p>\n" +
    "<p>\n" +
    "    If you would prefer that someone have to sign for the delivery, please let us know the specific instructions by contacting us. In such cases, if you, your doorman, your neighbor, or your alternate receiver is not present at the time of delivery, we will use commercially reasonable efforts to contact you and reschedule the delivery (in which case our standard redelivery fee shall apply).  If we are unable to reschedule the order for any reason, the order will be canceled and you will be charged the applicable fee for the order and the redelivery fee.\n" +
    "</p>\n" +
    "<p>\n" +
    "    Anyone at the delivery address who receives the delivery is conclusively presumed to be authorized to receive the delivery.  In cases in which you have designated an alternative receiver, such person shall accept the meals under all of the same terms and conditions that would apply had you accepted the delivery yourself.\n" +
    "</p>\n" +
    "<p>\n" +
    "    In the case of inclement weather, we will deliver your order as soon as reasonably possible when the conditions permit.  If your designated delivery location is inaccessible, rendering us unable to make the delivery, we will contact you to determine the best alternate location and/or date for the delivery.\n" +
    "</p>\n" +
    "\n" +
    "<h2>7. REFERRALS</h2>\n" +
    "\n" +
    "<p>\n" +
    "Green Chef members may receive credits by participating in one of Green Chef&rsquo;s referral\n" +
    "\n" +
    "programs. In order to receive credits, you must be a Subscriber of Green Chef and meet the\n" +
    "\n" +
    "requirements of one of the referral programs detailed below. You may only send referral\n" +
    "\n" +
    "invitations to friends or individuals who consent to receiving this type of message. You must\n" +
    "\n" +
    "comply with any applicable local laws.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "Subscribers can earn rewards by inviting friends or individuals to place orders at Green Chef.  If\n" +
    "\n" +
    "an individual who registered for Green Chef using the unique referral link you sent (your\n" +
    "\n" +
    "&ldquo;<span class=\"term\">Invitation</span>&rdquo;) places an order (a &ldquo;<span class=\"term\">Qualifying Purchase</span>&rdquo;) you will receive a twenty-five dollar (USD\n" +
    "\n" +
    "$25) credit in your Green Chef account (each a &ldquo;<span class=\"term\">Referral Credit</span>&rdquo;).  You may receive a Referral\n" +
    "\n" +
    "Credit for each of your friends (i.e. referrals) who makes a Qualifying Purchase, without\n" +
    "\n" +
    "limitation to the amount of Referral Credits you can earn. To Qualify, your friends must have\n" +
    "\n" +
    "created a new account with Green Chef by using the authorized link provided by your Invitation\n" +
    "\n" +
    "and place under such account an order that does not have any promotional discounts applied to\n" +
    "\n" +
    "it. Please be advised that orders under &lsquo;Free Trials&rsquo; do not give rise to Referral Credits.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "Your Referral Credit is a credit toward a future delivery. You understand and agree that only one\n" +
    "\n" +
    "Referral Credit can be used per single order, and not in combination with any other discounts,\n" +
    "\n" +
    "except for Customer Service Credits previously allocated to you.  A &ldquo;<span class=\"term\">Customer Service Credit</span>&rdquo; is\n" +
    "\n" +
    "a credit (or discount) on a future order issued by Green Chef as a result of a customer service\n" +
    "\n" +
    "issue. Green Chef always honors Customer Service Credits.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "Upon your friend's first Qualifying Purchase, you will receive your Referral Credit in the form of\n" +
    "\n" +
    "an automatic credit on your next purchase order, unless you have another Referral Credit\n" +
    "\n" +
    "already attached to your order, in which case the Referral Credit(s) will accumulate.  For a\n" +
    "\n" +
    "Referral Credit to be attributable to you, your friend must place the order in response to an invite\n" +
    "\n" +
    "from you via an authorized referral method or link. If your friend does not click on the personal\n" +
    "\n" +
    "referral link in their invite email or other invite mechanism to accept your invitation, you may not\n" +
    "\n" +
    "receive a Referral Credit and we will have no liability to you because there is no discernible way\n" +
    "\n" +
    "to identify that the purchase resulted from your referral.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "\n" +
    "If two people refer the same friend, the friend who sent the link that is used to create the new\n" +
    "\n" +
    "member's account will be considered the referring friend, regardless of which link was sent to\n" +
    "\n" +
    "the new member first.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "Referral Credits are valid for twelve (12) months from issuance. Your Referral Credits are\n" +
    "\n" +
    "automatically applied to your purchases at checkout in the order in which they expire (i.e., first\n" +
    "\n" +
    "to expire will be applied first).\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "You can track your Referral Credits easily online by visiting the\n" +
    "  &ldquo;<span class=\"term\"><a href ui-sref=\"my-account.friends\">Invite Friends</a></span>&rdquo; section in your\n" +
    "\n" +
    "account. You can track the amount of Referral Credits you have earned and their associated\n" +
    "\n" +
    "expiration dates at any time.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "You may not use spam or send unsolicited emails to people you don't personally know to collect\n" +
    "\n" +
    "Referral Credits and you may not collect Referral Credits by posting on message boards,\n" +
    "\n" +
    "forums or other online venues in violation of such venues' terms of use.\n" +
    "\n" +
    "Referral Credits are issued to a single Green Chef Subscriber at our discretion and cannot be\n" +
    "\n" +
    "transferred between accounts or between users. Credits cannot be bartered, exchanged or sold.\n" +
    "\n" +
    "Referral Credits are a promotional offer and are not a payment instruments. Referral Credits are\n" +
    "\n" +
    "issued without any exchange of money or value from you and you have no vested property right\n" +
    "\n" +
    "or interest in them.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "Referral Credits have no cash value by themselves; they are only deemed to have a notional\n" +
    "\n" +
    "cash value of $25 if they are used in connection with an eligible purchase on our Site.\n" +
    "\n" +
    "We reserve the right to limit or cancel your Referral Credits in our sole discretion if we determine\n" +
    "\n" +
    "that you have violated these Terms, including through fraudulent or misleading referral activity\n" +
    "\n" +
    "(for example, by inviting fake people, using false names, using multiple email accounts or email\n" +
    "\n" +
    "addresses, impersonating another person or otherwise providing false or misleading information\n" +
    "\n" +
    "to us) or if we terminate your account for any reason. You may also be liable for civil and/or\n" +
    "\n" +
    "criminal penalties under applicable law.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "\n" +
    "We reserve the right in our sole discretion at any time and without prior notice to you, to add to,\n" +
    "\n" +
    "remove or otherwise change the terms applicable to the issuance and use of Referral Credits.\n" +
    "\n" +
    "Such changes may include, without limitation, how you may earn and spend Referral Credits,\n" +
    "\n" +
    "how long Referral Credits last, minimum purchase amounts with which Referral Credits may be\n" +
    "\n" +
    "used and the lifetime maximum amount of Referral Credits that you may earn.\n" +
    "</p>\n" +
    "\n" +
    "\n" +
    "<h2>8. LIMITED WARRANTY AND RETURN POLICY</h2>\n" +
    "<p>\n" +
    "    All of our meals are backed by a 100% customer satisfaction guarantee.  If you are dissatisfied with a meal for any reason, please contact us via the Services within seven (7) days after delivery, and we'll either replace the meal at our expense or credit you the purchase price for that meal. Each meal is individually guaranteed through its use-by designation on the front of its respective recipe card.\n" +
    "</p>\n" +
    "\n" +
    "<h2>9. INTELLECTUAL PROPERTY</h2>\n" +
    "<p>\n" +
    "    The Site contains material, such as software, text, graphics, images, sound recordings, audiovisual works, and other material provided by or on behalf of Green Chef (collectively referred to as the &ldquo;<span class=\"term\">Content</span>&rdquo;).\n" +
    "</p>\n" +
    "<p>\n" +
    "    &ldquo;<span class=\"term\">Green Chef</span>&rdquo; is a trademark of Green Chef in the United States.  Other trademarks, names and logos on this Site are the property of their respective owners.  Other company, product, and service names located on the Site may be trademarks or service marks owned by others (the &ldquo;<span class=\"term\">Third-Party Trademarks</span>&rdquo;, and, collectively with Green Chef Trademarks, the &ldquo;<span class=\"term\">Trademarks</span>&rdquo;).  Nothing in this Agreement should be construed as granting, by implication, estoppel, or otherwise, any license or right to use the Trademarks, without our prior written permission specific for each such use.  Use of the Trademarks as part of a link to or from any site is prohibited unless establishment of such a link is approved in advance by us in writing.  All goodwill generated from the use of Green Chef Trademarks inures to our benefit.\n" +
    "    Elements of the Site and the Services are protected by trade dress, trademark, unfair competition, and other state, federal, and national laws and may not be copied or imitated, in whole or in part, by any means, including but not limited to the use of framing or mirrors.\n" +
    "</p>\n" +
    "<p>\n" +
    "    Unless otherwise specified in these Terms, all information and screens appearing on this Site, including documents, services, site design, text, graphics, logos, images and icons, as well as the arrangement thereof, are the sole property of Green Chef or its licensors, Copyright © 2014 Green Chef Corporation.  All rights not expressly granted herein are reserved.  Except as otherwise required or limited by applicable law, any reproduction, distribution, modification, retransmission, or publication of any copyrighted material is strictly prohibited without the express written consent of the copyright owner or an applicable license.\n" +
    "</p>\n" +
    "<p>\n" +
    "    The Mobile Application software that may be provided to you through the Site and Services and related documentation are &ldquo;<span class=\"term\">Commercial Items</span>&rdquo;, as that term is defined at 48 C.F.R. §2.101, consisting of &ldquo;<span class=\"term\">Commercial Computer Software</span>&rdquo; and &ldquo;<span class=\"term\">Commercial Computer Software Documentation</span>&rdquo;, as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, if You are a government entity, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein.  Unpublished-rights reserved under the copyright laws of the United States.\n" +
    "</p>\n" +
    "<h2>10. COMMUNICATIONS TO US; USER CONTENT</h2>\n" +
    "<p>\n" +
    "    Although we encourage you to e-mail us, we do not want you to, and you should not, e-mail us any content that contains confidential information.  With respect to all e-mails you send to us, including but not limited to, feedback, questions, comments, suggestions, and the like, we shall be free to use any ideas, concepts, know-how, or techniques contained in your communications for any purpose whatsoever, including, but not limited to, the development, production and marketing of products and services that incorporate such information, without compensation to you.\n" +
    "</p>\n" +
    "<p>\n" +
    "    As noted above, the Services provide Subscribers the ability to post and upload User Content to the Site.  You expressly acknowledge and agree that once you submit your User Content, unless you designate it as &ldquo;<span class=\"term\">private,</span>&rdquo; it will be accessible by others, and that there is no confidentiality or privacy with respect to such User Content, including, without limitation, any personally identifying information that you may make publicly available.  YOU, AND NOT GREEN CHEF, ARE ENTIRELY RESPONSIBLE FOR ALL THE USER CONTENT THAT YOU UPLOAD, POST, E-MAIL, OR OTHERWISE TRANSMIT VIA THE SITE.\n" +
    "</p>\n" +
    "<p>\n" +
    "    You retain all copyrights and other intellectual property rights in and to your own User Content.  You do, however, hereby irrevocably grant us and our sublicensees and assignees a non-exclusive, transferable, perpetual, royalty-free, freely sublicensable (through multiple tiers) license to modify, compile, combine with other content, copy, record, synchronize, transmit, translate, format, distribute, publicly display, publicly perform, and otherwise use or exploit (including for profit) any and all of your User Content that you have not designated as &ldquo;<span class=\"term\">private,</span>&rdquo; your username, the picture associated with your username, and all intellectual property and moral rights therein throughout the universe, in each case, by or in any means, methods, media, or technology now known or hereafter devised.  Without limiting the foregoing, you acknowledge and agree that uses of your User Content, username, and associated picture permitted by the foregoing rights and licenses may include the display of such User Content, username, and associated picture adjacent to advertising and other material or content, including for profit.\n" +
    "</p>\n" +
    "<p>\n" +
    "    Ownership of and licenses to User Content submitted in connection with a particular contest shall be governed by the contest rules applicable to that contest.  In connection with any such contest, if there is a conflict between those contest rules and these Terms of Use, the contest rules shall govern.\n" +
    "</p>\n" +
    "<p>\n" +
    "    If you submit User Content to us, each such submission constitutes a representation and warranty to Green Chef that such User Content is your original creation (or that you otherwise have the right to provide the User Content), that you have the rights necessary to grant the license to the User Content under this Section, and that it and its use by Green Chef and its content partners as permitted by this Agreement does not and will not infringe or misappropriate the intellectual property, privacy, publicity, or moral rights of any person or contain any libelous, defamatory, or obscene material or content that violates our community guidelines set forth above.\n" +
    "</p>\n" +
    "<h2>11.         WARRANTY DISCLAIMER AND LIMITATION OF LIABILITY     </h2>\n" +
    "<p>\n" +
    "    YOU, AND NOT GREEN CHEF, ARE SOLELY RESPONSIBLE FOR THE PROPER AND SAFE WASHING, PREPARATION, STORAGE, AND COOKING OF THE MEALS.\n" +
    "    OTHER THAN AS EXPRESSLY SET FORTH IN SECTION 7: (I) WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE SITE, THE SERVICES, THE MEALS, THE CONTENT, THE TRADEMARKS, THE PRODUCTS ON THE SITE, AND ALL OF THE FOREGOING ARE PROVIDED ON AN &ldquo;<span class=\"term\">AS IS</span>&rdquo; AND &ldquo;<span class=\"term\">AS AVAILABLE</span>&rdquo; BASIS WITHOUT ANY WARRANTIES OF ANY KIND; (II) WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES' RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND ANY WARRANTIES ARISING FROM COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE; AND (III) YOU AGREE THAT YOU USE THE SITE AND THE SERVICES AT YOUR OWN RISK.\n" +
    "</p> <p>\n" +
    "    IN NO EVENT SHALL WE BE LIABLE FOR ANY INCIDENTAL AND CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION) RESULTING FROM YOUR PURCHASE OF THE MEALS OR YOUR USE OR INABILITY TO USE THE SITE OR THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.  SOME STATES DO NOT ALLOW EXCLUSION OF IMPLIED WARRANTIES OR LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU.  IN SUCH CASES, OUR LIABILITY SHALL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.  IN ALL CASES, OUR MAXIMUM LIABILITY TO YOU (AND ANYONE CLAIMING RIGHTS THROUGH YOU) SHALL BE CAPPED AT THE MONIES PAID BY YOU TO GREEN CHEF IN THE ONE (1) MONTH PERIOD PRECEDING THE DATE ON WHICH YOUR CLAIM AROSE.\n" +
    "</p>  <p>\n" +
    "    GREEN CHEF HAS MADE EVERY EFFORT TO DISPLAY THE MEALS, THE PRODUCTS, COLORS, AND OTHER THINGS YOU SEE ON THE SITE AS ACCURATELY AS POSSIBLE.  HOWEVER, THE FINAL MEALS AND PRODUCTS DELIVERED MAY VARY FROM THE IMAGES VIEWED ON THE SITE DUE TO A NUMBER OF FACTORS THAT ARE NOT WITHIN OUR CONTROL, INCLUDING, WITHOUT LIMITATION, SYSTEM CAPABILITIES AND CONSTRAINTS OF YOUR COMPUTER, MANUFACTURING PROCESS ISSUES, AND THE AVAILABILITY AND VARIABILITY OF PRODUCT AND RAW MATERIALS.  ALTHOUGH WE WILL EXERCISE COMMERCIALLY REASONABLE EFFORTS TO HELP ENSURE THAT THE MEALS AND PRODUCTS CONFORM TO REASONABLE EXPECTATIONS, VARIATIONS SOMETIMES OCCUR.  ALL MEAL AND PRODUCT PRICING, SPECIFICATIONS, AND OFFERINGS ARE SUBJECT TO CHANGE WITHOUT NOTICE.  THE SITE MAY CONTAIN INFORMATION ON MEALS, SERVICES, AND PRODUCTS THAT ARE NOT AVAILABLE IN EVERY LOCATION.  A REFERENCE TO A MEAL, SERVICE, OR PRODUCT ON THE SITE DOES NOT IMPLY THAT IT IS OR WILL BE AVAILABLE IN YOUR LOCATION.  THE SITE MAY CONTAIN TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS OR OMISSIONS. WE ARE NOT RESPONSIBLE FOR ANY SUCH TYPOGRAPHICAL, TECHNICAL, OR PRICING ERRORS.\n" +
    "</p>\n" +
    "<h2>12.       EXTERNAL SITES     </h2>\n" +
    "<p>\n" +
    "    The Site may contain links to third-party sites (&ldquo;<span class=\"term\">External Sites</span>&rdquo;).  These links are provided solely as a convenience to you and not as an endorsement by us of the content on such External Sites.  The content of such External Sites is developed and provided by others.  You should contact the site administrator or webmaster for those External Sites if you have any concerns regarding such links or any content located on such External Sites.  We are not responsible for the content of any linked External Sites and do not make any representations regarding the content or accuracy of materials on such External Sites.  You should take precautions when downloading files from all Sites to protect your computer from viruses and other destructive programs.  If you decide to access linked External Sites, you do so at your own risk.\n" +
    "</p>\n" +
    "<h2>13.       INDEMNIFICATION   </h2>\n" +
    "<p>\n" +
    "    You agree to defend, indemnify, and hold us and our officers, directors, employees, successors, licensees, and assigns harmless from and against any claims, actions, or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from your breach of these Terms or your access to, use, or misuse of the Site or the Services.  We shall provide notice to you of any such claim, suit, or proceeding and shall assist you, at your expense, in defending any such claim, suit, or proceeding.  We reserve the right to assume the exclusive defense and control of any matter that is subject to indemnification under this section.  In such case, you agree to cooperate with any reasonable requests assisting our defense of such matter.\n" +
    "</p>\n" +
    "<h2>14.       COMPLIANCE WITH APPLICABLE LAWS </h2>\n" +
    "<p>\n" +
    "    The Site and the Services (and their servers) are all based and operated in the United States.  We make no claims concerning whether the Content may be downloaded, viewed, or be appropriate for use outside of the United States.  If you access the Site, the Services, or the Content from outside of the United States, you do so at your own risk.  Whether inside or outside of the United States, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction.\n" +
    "</p>\n" +
    "<h2>15.       TERMINATION OF THE AGREEMENT    </h2>\n" +
    "<p>\n" +
    "    We reserve the right, in our sole discretion, to restrict, suspend, or terminate this Agreement and your access to all or any part of the Site or the Services, at any time and for any reason without prior notice or liability.  We reserve the right to change, suspend, or discontinue all or any part of the Site or the Services at any time without prior notice or liability.\n" +
    "</p>\n" +
    "<h2>16.       DIGITAL MILLENNIUM COPYRIGHT ACT    </h2>\n" +
    "</p>\n" +
    "<p>\n" +
    "    Green Chef respects the intellectual property rights of others and attempts to comply with all relevant laws. We will review all claims of copyright infringement received and remove any Content deemed to have been posted or distributed in violation of any such laws.\n" +
    "</p>\n" +
    "<p>\n" +
    "    Our designated agent under the Digital Millennium Copyright Act (the &ldquo;<span class=\"term\">Act</span>&rdquo;) for the receipt of any Notification of Claimed Infringement which may be given under that Act is as follows:\n" +
    "</p>\n" +
    "<p>\n" +
    "    Green Chef Corporation, Attention: DMCA6400 Broadway, Unit 6, Denver, CO 80221.\n" +
    "</p>\n" +
    "<p>\n" +
    "    If you believe that your work has been copied on the Site in a way that constitutes copyright infringement, please provide our agent with notice in accordance with the requirements of the Act, including (i) a description of the copyrighted work that has been infringed and the specific location on the Site where such work is located; (ii) a description of the location of the original or an authorized copy of the copyrighted work; (iii) your address, telephone number and e-mail address; (iv) a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; (v) a statement by you, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf; and (vi) an electronic or physical signature of the owner of the copyright or the person authorized to act on behalf of the owner of the copyright interest.\n" +
    "</p>\n" +
    "<h2>17.       MISCELLANEOUS   </h2>\n" +
    "<p>\n" +
    "    This Agreement is governed by the internal substantive laws of the State of Colorado, without respect to its conflict of laws provisions.  You expressly and irrevocably agree: (i) to submit to the exclusive personal jurisdiction of the state and federal courts sitting in the State of Colorado; and (ii) that the Site and the Services shall be deemed passive that do not give rise to personal jurisdiction over Green Chef, either specific or general, in jurisdictions other than the State of Colorado.  YOU AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE MEALS, THE SITE, OR THE SERVICES MUST BE COMMENCED BY YOU WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.  If any provision of this Agreement is found to be invalid by any court having competent jurisdiction or terminated in accordance with the Termination provision above, the invalidity or termination of such provision shall not affect the validity of the following provisions of this Agreement, which shall remain in full force and effect:  &ldquo;<span class=\"term\">Payment,</span>&rdquo; &ldquo;<span class=\"term\">Intellectual Property,</span>&rdquo; &ldquo;<span class=\"term\">Communications to Us; User Content,</span>&rdquo; &ldquo;<span class=\"term\">Warranty Disclaimer and Limitation of Liability,</span>&rdquo; &ldquo;<span class=\"term\">Indemnification,</span>&rdquo; &ldquo;<span class=\"term\">Termination of the Agreement,</span>&rdquo; and &ldquo;<span class=\"term\">Miscellaneous.</span>&rdquo;\n" +
    "</p>\n" +
    "<p>\n" +
    "    Our failure to act on or enforce any provision of these Terms shall not be construed as a waiver of that provision or any other provision in these Terms.  No waiver shall be effective against us unless made in writing, and no such waiver shall be construed as a waiver in any other or subsequent instance.  Except as expressly agreed by us and you in writing, these Terms constitutes the entire Agreement between you and us with respect to the subject matter, and supersedes all previous or contemporaneous agreements, whether written or oral, between the parties with respect to the subject matter.  The section headings are provided merely for convenience and shall not be given any legal import.  These Terms will inure to the benefit of our successors, assigns, licensees, and sublicensees.\n" +
    "</p>\n" +
    "\n" +
    "<h2>18.  CALIFORNIA CONSUMER NOTICE</h2>\n" +
    "    <p>\n" +
    "        Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: This Site and Service are provided by Green Chef Corporation.  If you have a question or complaint regarding the Site or Services, please contact Customer Service at <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>.  You may also contact us by writing at Green Chef Customer Support 6400 Broadway, Unit 6, Denver, CO 80221. California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by post at 1625 North Market Blvd., Sacramento, CA 95834 or by telephone at (916) 445-1254 or (800) 952-5210 or Hearing Impaired at TDD (800) 326-2297 or TDD (916) 322-1700.\n" +
    "    </p>\n" +
    "")

$templateCache.put("terms/directives/20170828.privacy.tpl.html","<h1>1. Green Chef Privacy Policy</h1>\n" +
    "\n" +
    "<b>Last Updated: July 28, 2017</b>\n" +
    "\n" +
    "<p>\n" +
    "    We at Green Chef Corporation (&ldquo;<span class=\"term\">Green Chef</span>,&rdquo; &ldquo;<span class=\"term\">we</span>,&rdquo; &ldquo;<span class=\"term\">us</span>,&rdquo; or &ldquo;<span class=\"term\">our</span>&rdquo;) have created this privacy policy (&ldquo;<span class=\"term\">Privacy Policy</span>&rdquo;) because we know that you care about how the information we collect about you is used and shared.  This Privacy Policy relates to Green Chef&#x2019;s information collection, use, and sharing practices in connection with our online services (the &ldquo;<span class=\"term\">Services</span>&rdquo;), which are made available to you through a variety of platforms, including our website http://www.greenchef.com (the &ldquo;<span class=\"term\">Site</span>&rdquo;) and our mobile applications (each, an &ldquo;<span class=\"term\">App</span>&rdquo;).\n" +
    "</p>\n" +
    "<p>\n" +
    "    By visiting our Site, downloading an App, and/or using our Services, you are agreeing to the terms of this Privacy Policy and the accompanying <a href ui-sref=\"terms({version: {{vm.LegalUpdate.currentChange}}})\">Terms of Service</a>. Capitalized terms not defined in this Privacy Policy shall have the meaning set forth in our\n" +
    "    <a href ui-sref=\"terms({version: {{vm.LegalUpdate.currentChange}}})\">Terms of Service</a>.\n" +
    "</p>\n" +
    "<!-- Table of Contents -->\n" +
    "<ul>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"the-information-we-collect\" y-offset='140'>The Information We Collect</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"how-we-use-your-information\" y-offset='140'>How We Use Your Information</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"how-we-share-your-information\" y-offset='140'>How We Share your Information</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"cookies-and-other-tracking-mechanisms\" y-offset='140'>Cookies and Other Tracking Mechanisms</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"do-not-track-disclosures\" y-offset='140'>Do Not Track Disclosures</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#\" anchor-smooth-scroll=\"interest-based-advertising-and-third-party-ad-networks\" y-offset='140'>Interest-Based Advertising and Third-Party Ad Networks</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"accessing-and-modifying-personal-information-and-communication-preferences\" y-offset='140'>Accessing and Modifying Personal Information and Communication Preferences</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"security\" y-offset='140'>Security</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"children\" y-offset='140'>Children</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"special-information-for-california-consumers\" y-offset='140'>Special Information for California Consumers</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"external-websites\" y-offset='140'>External Websites</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"changes-to-this-privacy-policy\" y-offset='140'>Changes to this Privacy Policy</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#\" anchor-smooth-scroll=\"how-to-contact-us\" y-offset='140'>How to Contact Us</a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "\n" +
    "<p>\n" +
    "<h3 id=\"the-information-we-collect\">\n" +
    "    The Information We Collect\n" +
    "</h3>\n" +
    "</p>\n" +
    "\n" +
    "<ol>\n" +
    "    <li>\n" +
    "        <span class=\"term\">Information We Collect Directly from You</span>\n" +
    "        <p>\n" +
    "          We may collect information about you when you use our Services, such as when you sign up to become an Account Holder, order a subscription, amend your subscription, enter a contest or promotion, sign up to receive our recipes, or otherwise voluntarily provide us with information. Such information may include your name, email address, mailing address, password, username, phone number, credit or debit card number, and billing information. We will also collect any other information that you voluntarily provide to us, such as your dietary preferences, hobbies, personal interests, and demographics (e.g., gender) or other information that you provide as part of a survey, contest, or promotion or through an interactive area of the Site. We may combine the information we collect directly from you with information that we collect from third parties or automatically collect about you.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          We may also allow you to earn referral credit for referring friends to us, if those friends sign up to qualifying Services. As part of this, you may send a referral email to friends through our Site (as long as their email address has not been opted out of Green Chef marketing emails). If you choose to send a referral email, we will collect your friend’s email address to send up to two email invitations to sign-up for our Services. We will not add the email addresses you provide us to our email marketing lists; however, we may maintain a record of the email addresses users provide us for the purposes of administering our referral program and for other business purposes.\n" +
    "        </p>\n" +
    "\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <span class=\"term\">Information We Collect from Third Parties</span>\n" +
    "        <p>\n" +
    "          We may collect information about you from third parties. For example, we may collect information about you from social networking platforms, such as your username and public profile information when you use social media buttons on our Site. Please see our <a href=\"#external-websites\">External Websites</a> section below for more information about the privacy practices of third parties. We may also work with third parties to help us better understand our customers; these third parties may provide us with additional information about our users, such as demographic information.\n" +
    "        </p>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <span class=\"term\">Information We Collect Automatically</span>\n" +
    "        <p>\n" +
    "          In addition to the information noted above, we may collect additional information about you and your device, such as log files, IP addresses, application IDs and other device identifying numbers, browser type and language, referring and exit pages and URLs, date and time, amount of time spent on particular pages, what sections or pages of the Site/Services you use, device identification, the content you post or share, order information, screen resolution, and similar information concerning your use of the Services.\n" +
    "        </p>\n" +
    "</ol>\n" +
    "\n" +
    "<h3 id=\"how-we-use-your-information\">\n" +
    "    How We Use Your Information\n" +
    "</h3>\n" +
    "\n" +
    "We use the information we collect about you to process transactions; provide you the Services;\n" +
    "communicate with you, including to solicit your feedback and for other customer service and support\n" +
    "reasons; to tailor the content and information that we may send or display to you; to advertise and\n" +
    "market to you, including to inform you about our products, services, upcoming events, recipes, and\n" +
    "special promotions and those of our third-party marketing and business partners; administer and\n" +
    "process contests and promotions; analyze and improve our Site and Services, develop new products\n" +
    "and services, and for other research and analytics purposes; to comply with legal or regulatory\n" +
    "obligations or cooperate with a law enforcement or other governmental investigation; and to detect\n" +
    "or prevent fraud, enforce our terms and agreements, and to otherwise protect the rights and\n" +
    "interests of us and others.\n" +
    "\n" +
    "<h3 id=\"how-we-share-your-information\">\n" +
    "    How We Share Your Information\n" +
    "</h3>\n" +
    "\n" +
    "Also, we may share your information as described below.\n" +
    "\n" +
    "<ul>\n" +
    "  <li>When we employ other companies and individuals to perform functions on our behalf, such\n" +
    "as food services, delivery services, marketing assistance, information technology support,\n" +
    "and customer service.\n" +
    "  </li>\n" +
    "  <li>For promotional or marketing purposes. For example, we may share your information with\n" +
    "our third-party promotional and marketing partners to administer our contests or promotions\n" +
    "or as part of joint-marketing efforts.\n" +
    "  </li>\n" +
    "  <li>In an ongoing effort to better understand our users and our Services, we might analyze the\n" +
    "information we collect about you to operate, maintain, manage, and improve the Services,\n" +
    "and to develop additional products or services. We may also share aggregate or de-identified\n" +
    "data about users with our affiliates, agents, business partners, and other third parties for\n" +
    "marketing, advertising, research and analysis, or similar purposes. We may also disclose\n" +
    "aggregated user statistics to describe our products and Services to current and prospective\n" +
    "business partners and to other third parties for other lawful purposes.\n" +
    "  </li>\n" +
    "  <li>As we develop our business, we might sell all or a part of our business assets (including\n" +
    "    information, such as user personal information), merge with another company, or be\n" +
    "    acquired by another company. In the event of an asset sale, merger, reorganization,\n" +
    "    acquisition, dissolution, bankruptcy, or similar event, your information may be transferred to\n" +
    "    an acquiring company; it may also be disclosed prior to the conclusion of such a transaction\n" +
    "    (including as part of a due diligence review).\n" +
    "  </li>\n" +
    "  <li>With any current or future affiliates, parent companies, or subsidiaries.\n" +
    "  </li>\n" +
    "  <li>We may also disclose your information when required by law, court order, or other\n" +
    "    government or law enforcement authority or regulatory agency, or whenever we believe that\n" +
    "    disclosing such information is necessary or advisable, for example, to protect the rights,\n" +
    "    property, or safety of Green Chef or others.\n" +
    "  </li>\n" +
    "  <li>We may disclose your information to other unaffiliated third parties, such as our marketing,\n" +
    "    analytics, or other business partners. These third parties may use such information for their\n" +
    "    own marketing purposes. Please see our <a href=\"#special-information-for-california-consumers\">Special Information for California\n" +
    "    Consumers</a> section below with regard to such disclosures.\n" +
    "  </li>\n" +
    "  <li>We may disclose aggregate, anonymous, or de-identified information about users for\n" +
    "    marketing, advertising, research, or other purposes.\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "<h3 id=\"cookies-and-other-tracking-mechanisms\">\n" +
    "    Cookies and Other Tracking Mechanisms\n" +
    "</h3>\n" +
    "\n" +
    "We and our service providers use cookies, pixel tags, third-party analytics, and other mechanisms to\n" +
    "track your use of our Site or Services.\n" +
    "\n" +
    "<ol>\n" +
    "  <li><span class=\"term\">Cookies</span>.\n" +
    "    Information that we collect using &ldquo;<span class=\"term\">cookie</span>&rdquo; technology and pixel tags (also called\n" +
    "    web beacons or clear GIFs). Cookies are small packets of data that a website stores on your\n" +
    "    computer’s hard drive so that your computer will &ldquo;<span class=\"term\">remember</span>&rdquo; information about your visit. We\n" +
    "    use cookies to help us collect other information and to enhance your experience using the\n" +
    "    Services. Most web browsers automatically accept cookies, but if you prefer, you can edit\n" +
    "    your browser options to block them in the future. Please consult your Internet browser’s\n" +
    "    documentation for information on how to do this. However, if you decide not to accept\n" +
    "    cookies from us, certain areas of the Site and some of the Services may not function\n" +
    "    properly.\n" +
    "  </li>\n" +
    "  <li><span class=\"term\">Clear GIFs, pixel tags, and other technologies</span>.\n" +
    "    Clear GIFs are tiny graphics with a unique\n" +
    "    identifier, similar in function to cookies, which are embedded invisibly on webpages. We or\n" +
    "    our service providers may use clear GIFs (also known as web beacons, web bugs, or pixel\n" +
    "    tags), in connection with our Site to track the activities of visitors to our Site, help us manage\n" +
    "    content, and compile statistics about usage of our Site. We or our service providers may also\n" +
    "    use clear GIFs in HTML emails to our users to help us track email response rates, identify\n" +
    "    when our emails are viewed, and track whether our emails are forwarded.\n" +
    "  </li>\n" +
    "  <li><span class=\"term\">Third-party analytics</span>.\n" +
    "    We work with third parties, such as, for example, <a href=\"http://www.google.com/intl/en/policies/privacy/\">Google\n" +
    "      Analytics</a>, <a href=\"https://www.appdynamics.com/privacy-policy/\">AppDynamics</a>,\n" +
    "    <a href=\"http://www.conversionlogic.com/privacy-policy-overview/\">Conversion Logic</a>, and\n" +
    "    <a href=\"https://policies.yahoo.com/us/en/yahoo/privacy/topics/analytics/\">Yahoo Analytics</a> to evaluate the\n" +
    "    use of our Site and our Services. We use these tools to help us improve our Site, Services,\n" +
    "    performance, and user experiences. These third parties may use cookies, pixel tags (also\n" +
    "    called web beacons or clear GIFs), and/or other technologies to collect such usage\n" +
    "    information for such purposes, and they have their own privacy policies. Please note that we\n" +
    "    may change the third parties and analytics tools we use periodically, and the list we provide\n" +
    "    in this Privacy Policy may not be current or complete. If you have any questions about our\n" +
    "    practices, please feel free to contact us using the information at the end of this Policy.\n" +
    "  </li>\n" +
    "</ol>\n" +
    "\n" +
    "\n" +
    "<h3 id=\"do-not-track-disclosures\">\n" +
    "    Do Not Track Disclosures\n" +
    "</h3>\n" +
    "\n" +
    "Our Site does not respond to Do Not Track (DNT) signals and may track your activity after you leave our Site.\n" +
    "\n" +
    "<h3 id=\"interest-based-advertising-and-third-party-ad-networks\">\n" +
    "    Interest-Based Advertising and Third-Party Ad Networks\n" +
    "</h3>\n" +
    "\n" +
    "<p>\n" +
    "We use third parties such as network advertisers and social media sites\n" +
    "(e.g., Facebook) to serve advertisements on third-party websites or\n" +
    "other media (e.g., social networking platforms). This enables us and\n" +
    "these third parties to target advertisements to you for products and\n" +
    "services in which you might be interested. Third-party ad network\n" +
    "providers, advertisers, sponsors, and/or traffic measurement services\n" +
    "may use cookies, JavaScript, web beacons (including clear GIFs),\n" +
    "and other tracking technologies to measure the effectiveness of their\n" +
    "ads and to personalize advertising content to you. These third-party\n" +
    "cookies and other technologies are governed by each third party's\n" +
    "specific privacy policy, not this one. We may provide these third-party\n" +
    "advertisers with information about you, including personal\n" +
    "information, to assist us with this advertising; for example, we may\n" +
    "provide social network operators a list of email addresses for our\n" +
    "Subscribers so that we can better deliver relevant advertising to our\n" +
    "Subscribers and other similar users within these networks.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "You may opt out of many third-party ad networks. For example, you may\n" +
    "go to the Digital Advertising Alliance (&ldquo;DAA&rdquo;) <a href=\"http://www.aboutads.info/choices/\">Consumer Choice Page</a>\n" +
    "for information about opting out of interest-based advertising and their\n" +
    "choices regarding having information used by <a href=\"http://www.aboutads.info/participating/\">participating\n" +
    "companies</a>. You may also go to the Network Advertising Initiative\n" +
    "(&ldquo;NAI&rdquo;) Consumer Opt-Out Page for information about opting out of\n" +
    "interest-based advertising and their choices regarding having\n" +
    "information used by <a href=\"http://www.networkadvertising.org/participating-networks\">NAI members</a>.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "Opting out from one or more companies listed on the DAA <a href=\"http://www.aboutads.info/choices/\">Consumer\n" +
    "Choice Page</a> or the NAI <a href=\"http://www.networkadvertising.org/choices/\">Consumer Opt-Out Page</a> will opt you out\n" +
    "from those companies' delivery of interest-based content or ads to\n" +
    "you, but it does not mean you will no longer receive any advertising\n" +
    "through our Site or on other websites. You may continue to receive\n" +
    "advertisements, for example, based on the particular website that you\n" +
    "are viewing (i.e., contextually based ads). Also, if you delete your\n" +
    "cookies after opting out or if you are using a different device, your\n" +
    "opt-out may not be effective. Additional information is available on the\n" +
    "DAA and NAI websites.\n" +
    "</p>\n" +
    "\n" +
    "<h3 id=\"accessing-and-modifying-personal-information-and-communication-preferences\">\n" +
    "    Accessing and Modifying Personal Information and Communication Preferences\n" +
    "</h3>\n" +
    "\n" +
    "If you have registered for the Services, you may access, review, and make changes to certain information by logging in to your account and following the instructions found on the Site; if you have questions or need assistance, you may contact us at the information below. Please also note that we may maintain copies of historical user data as part of our business records and archiving practices.\n" +
    "\n" +
    "In addition, you may manage your receipt of email marketing communications by clicking on the &ldquo;<span style=\"text-decoration:underline\">unsubscribe</span>&rdquo; link located on the bottom of any Green Chef marketing email. It may take us up to 10 business days to process your marketing opt-out request. Subscribers cannot opt out of receiving administrative or transactional emails related to their account or use of our Services.\n" +
    "\n" +
    "<h3 id=\"security\">\n" +
    "    Security\n" +
    "</h3>\n" +
    "\n" +
    "<p>\n" +
    "We take steps to help protect the information we collect. However, no security measures can guarantee 100% security. For example, we cannot guarantee that the information you supply will not be intercepted while being transmitted to and from us over the Internet.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "You should take steps to protect against unauthorized access to your password, phone, and computer by, among other things, signing off after using a shared computer, choosing a robust password that nobody knows or can easily guess, and keeping your login and password private. We are not responsible for any lost, stolen, or compromised passwords or for any activity on your account via unauthorized password activity.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "Please note email sent to or from the Site may not be secure, and you should therefore take special care in deciding what information you send to us via email. Emails sent through the Internet may be viewed, altered, or copied by potentially anyone on the Internet. We are not responsible for the security of confidentiality of email communications you send to us.\n" +
    "\n" +
    "<h3 id=\"children\">\n" +
    "    Children\n" +
    "</h3>\n" +
    "<p>\n" +
    "Our Services are not targeted to or designed for children. We do not knowingly collect Personal Information from children under the age of 13 through the Services. If you have reason to believe that a child under the age of 13 has provided Personal Information to us, please contact us, and we will endeavor to delete that information from our databases.\n" +
    "</p>\n" +
    "\n" +
    "<h3 id=\"special-information-for-california-consumers\">\n" +
    "    Special Information for California Consumers\n" +
    "</h3>\n" +
    "\n" +
    "California residents may request a list of certain third parties to which we have disclosed personally identifiable information about you for their own direct marketing purposes. You may make one request per calendar year. In your request, please attest to the fact that you are a California resident and provide a current California address for your response. You may request this information in writing by contacting us at: <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>. Please allow up to thirty (30) days for a response.\n" +
    "\n" +
    "<h3 id=\"external-websites\">\n" +
    "    External Websites\n" +
    "</h3>\n" +
    "\n" +
    "<p>\n" +
    "The Site may contain links to third-party websites. Green Chef has no control over the privacy practices or the content of any of our business partners, advertisers, sponsors, or other websites to which we provide links. As such, we are not responsible for the content or the privacy policies of those third-party websites. You should check the applicable third-party privacy policy and terms of use when visiting any other websites.\n" +
    "</p>\n" +
    "\n" +
    "<h3 id=\"changes-to-this-privacy-policy\">\n" +
    "    Changes to This Privacy Policy\n" +
    "</h3>\n" +
    "\n" +
    "<p>\n" +
    "This Privacy Policy is effective as of the date set forth above. We may change this Privacy Policy from time to time and will post any changes on the Site. By accessing the Site, or by using the Services after we make any such changes to this Privacy Policy, you are deemed to have accepted such changes. Please refer back to this Privacy Policy on a regular basis.\n" +
    "</p>\n" +
    "\n" +
    "<h3 id=\"how-to-contact-us\">\n" +
    "    How to Contact Us\n" +
    "</h3>\n" +
    "\n" +
    "If you have questions about this Privacy Policy, please contact us at <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>.\n" +
    "")

$templateCache.put("terms/directives/20170828.tos.tpl.html","<h1>Green Chef Terms of Service</h1>\n" +
    "\n" +
    "<h2>Last Updated: July 28, 2017</h2>\n" +
    "\n" +
    "<p>\n" +
    "    THESE TERMS OF SERVICE (THE &ldquo;<span class=\"term\">TERMS</span>&rdquo; OR THE &ldquo;<span class=\"term\">AGREEMENT</span>&rdquo;) ARE A LEGAL CONTRACT BETWEEN YOU, THE CUSTOMER (&ldquo;<span class=\"term\">YOU</span>&rdquo; OR &ldquo;<span class=\"term\">CUSTOMER</span>&rdquo;), AND GREEN CHEF CORPORATION (&ldquo;<span class=\"term\">GREEN CHEF,</span>&rdquo; &ldquo;<span class=\"term\">WE,</span>&rdquo; &ldquo;<span class=\"term\">US,</span>&rdquo; OR &ldquo;<span class=\"term\">OUR</span>&rdquo;). THESE TERMS SET FORTH THE ENTIRE UNDERSTANDING BETWEEN GREEN CHEF AND THE CUSTOMER WITH RESPECT TO THE PERFORMANCE OF SERVICES, THE FURNISHING OF GOODS (&ldquo;<span class=\"term\">PRODUCTS</span>&rdquo;), AND THE PERMITTED USE OF THE SITE LOCATED AT THE URL: <a href=\"/\">WWW.GREENCHEF.COM</a> AS WELL AS ALL ASSOCIATED SITES LINKED TO <a href=\"/\">WWW.GREENCHEF.COM</a> BY THE COMPANY, ITS SUBSIDIARIES, AND AFFILIATED COMPANIES (COLLECTIVELY, THE &ldquo;<span class=\"term\">SITE</span>&rdquo;). UNLESS OTHERWISE SPECIFIED, ALL REFERENCES TO &ldquo;<span class=\"term\">SITE</span>&rdquo; INCLUDE ANY SOFTWARE THAT GREEN CHEF PROVIDES TO YOU THAT ALLOWS YOU TO ACCESS THE SITE FROM A MOBILE DEVICE (A &ldquo;<span class=\"term\">MOBILE APPLICATION</span>&rdquo;). BY USING THIS SITE, YOU ARE AGREEING TO ALL THE TERMS; IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, DO NOT ACCESS OR OTHERWISE USE THIS SITE OR ANY INFORMATION CONTAINED ON THIS SITE.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Please review our <a href ui-sref=\"privacy({version: {{vm.LegalUpdate.currentChange}}})\">Privacy Policy</a> (the &ldquo;<span class=\"term\">Privacy Policy</span>&rdquo;) which explains how we use information that you submit to the Company. Capitalized terms not defined in these Terms of Service shall have the meaning set forth in our <a href ui-sref=\"privacy({version: {{vm.LegalUpdate.currentChange}}})\">Privacy Policy</a>.\n" +
    "</p>\n" +
    "\n" +
    "<h2>1. DESCRIPTION AND USE OF THE SERVICES</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef is an innovative concept in grocery delivery, built around combining carefully selected, pre-portioned ingredients with great recipes and easy instructions so you can enjoy incredible cooking experiences right at home. Through the services provided by us through the Site and described in these Terms (collectively the &ldquo;<span class=\"term\">Services</span>&rdquo;), we offer, among other things, a weekly meal kit program that delivers our high-quality ingredients, recipes, and cooking instructions right to your door in an insulated package. Our Services exist to make your food experiences less burdensome and vastly more enjoyable.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    All Services and Products are purchased via the Site. We provide Visitors and Account Holders with access to our Site and Services as described in these Terms.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Visitors. Visitors are people who do not register with us but want to view all publicly accessible Content (as defined below). You need not register with us to simply visit and view the Site.\n" +
    "</p>\n" +
    "<p>\n" +
    "    Account Holders. Registration and login are required for all purchasers of Products or Services (individually an &ldquo;<span class=\"term\">Account Holder</span>&rdquo; and, collectively, the &ldquo;<span class=\"term\">Account Holders</span>&rdquo;). In addition to viewing all publicly accessible Content, by becoming an Account Holder, you can use the Site to, among other things: (i) select the type of Products or Services you want, including Subscriptions (as described below); (ii) provide us feedback in our online forum; (iii) upload content, including text, videos, and photos (collectively, &ldquo;<span class=\"term\">User Content</span>&rdquo;); (iv) sign up for alerts, other notifications, and our newsletter; and (v) sign up for our contests and promotions. We are under no obligation to accept any individual as an Account Holder and may accept or reject any registration in our sole and complete discretion.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    By using this Site, you represent, acknowledge, and agree that you are at least 18 years of age, or if you are under 18 years of age but are at least 13 years old (a &ldquo;<span class=\"term\">Minor</span>&rdquo;), that you are using the Site with the consent of your parent or legal guardian and that you have received your parent's or legal guardian's permission to use the Site and agree to its Terms. If you are a parent or legal guardian of a Minor, you hereby agree to bind the Minor to these Terms and to fully indemnify and hold harmless Green Chef if the Minor breaches any of these Terms. If you are not at least 13 years old, you may not use the Site at any time or in any manner or submit any information to Green Chef or the Site.\n" +
    "</p>\n" +
    "\n" +
    "<h2>2. REGISTRATION FOR ACCOUNT HOLDERS</h2>\n" +
    "\n" +
    "<p>\n" +
    "    During the registration process for Account Holders, we will ask you to create an account, which includes a sign-in name (&ldquo;<span class=\"term\">Sign-In Name</span>&rdquo;) and a password (&ldquo;<span class=\"term\">Password</span>&rdquo;). When creating your account, you must provide true, accurate, current, and complete information. Each Sign-In Name and corresponding Password can be used by only one Account Holder. You are solely responsible for the confidentiality and use of your Sign-In Name and Password as well as for any use, misuse, or communications entered through the Site using one or more of them. You must promptly inform us of any need to deactivate a Password or Sign-In Name. We reserve the right, upon reasonable written notice, to reset your Password and/or require that you change your Sign-In Name, at any time and for any reason. Green Chef will not be liable for any loss or damage caused by any unauthorized use of your account.\n" +
    "</p>\n" +
    "\n" +
    "<h2>3. MOBILE APPLICATIONS</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef makes available Mobile Applications to access the Site via a mobile device. To use the Mobile Application, you must have a mobile device that is compatible with the mobile service. Green Chef does not warrant that the Mobile Application will be compatible with your mobile device. Green Chef hereby grants to you a non-exclusive, non-transferable, revocable license to use an object code copy of the Mobile Application for one registered account on any mobile device owned or leased solely by you, for your personal use. You may not: (i) modify, disassemble, decompile, or reverse engineer the Mobile Application, except to the extent that such restriction is expressly prohibited by law; (ii) rent, lease, loan, resell, sublicense, distribute, or otherwise transfer the Mobile Application to any third party or use the Mobile Application to provide time-sharing or similar services for any third party; (iii) make any copies of the Mobile Application; (iv) remove, circumvent, disable, damage, or otherwise interfere with security-related features of the Mobile Application, features that prevent or restrict use or copying of any content accessible through the Mobile Application, or features that enforce limitations on use of the Mobile Application; or (v) delete the copyright and other proprietary rights notices on the Mobile Application. You acknowledge that Green Chef may from time to time issue upgraded versions of the Mobile Application and may automatically electronically upgrade the version of the Mobile Application that you are using on your mobile device. You consent to such automatic upgrading on your mobile device and agree that these Terms will apply to all such upgrades. The foregoing license grant is not a sale of the Mobile Application or any copy thereof, and Green Chef and its third-party licensors or suppliers retain all right, title, and interest in and to the Mobile Application (and any copy of the Mobile Application). Standard carrier data charges may apply to your use of the Mobile Application. The following additional terms and conditions apply with respect to any Mobile Application that Green Chef provides to you designed for use on an Apple iOS-powered mobile device (an &ldquo;<span class=\"term\">iOS App</span>&rdquo;):\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You acknowledge that these Terms are between you and Green Chef only, and not with Apple, Inc. (&ldquo;<span class=\"term\">Apple</span>&rdquo;).\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Your use of Green Chef's iOS App must comply with Apple's then-current App Store Terms of Service.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef, and not Apple, is solely responsible for our iOS App and the Services and Content available thereon. You acknowledge that Apple has no obligation to provide maintenance and support services with respect to our iOS App. To the maximum extent permitted by applicable law, Apple will have no warranty obligation whatsoever with respect to our iOS App.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You agree that Green Chef, and not Apple, is responsible for addressing any claims by you or any third party relating to our iOS App or your possession and/or use of our iOS App, including, but not limited to: (i) product liability claims; (ii) any claim that the iOS App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation, and all such claims are governed solely by these Terms and any law applicable to us as provider of the iOS App.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You agree that Green Chef, and not Apple, shall be responsible, to the extent required by these Terms, for the investigation, defense, settlement, and discharge of any third-party intellectual property infringement claim related to our iOS App or your possession and use of our iOS App.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo or that has been designated by the U.S. Government as a &ldquo;<span class=\"term\">terrorist supporting</span>&rdquo; country; and (ii) You are not listed on any U.S. Government list of prohibited or restricted parties.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You agree to comply with all applicable third-party terms of agreement when using our iOS App (e.g., you must not be in violation of your wireless data service terms of agreement when using the iOS App).\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    The parties agree that Apple and Apple's subsidiaries are third-party beneficiaries to these Terms as they relate to your license of Green Chef's iOS App. Upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as they relate to your license of the iOS App as a third-party beneficiary thereof.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    The following additional terms and conditions apply with respect to any Mobile Application that We provide to You designed for use on an Android-powered mobile device (an &ldquo;<span class=\"term\">Android App</span>&rdquo;):\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You acknowledge that these Terms are between you and us only, and not with Google, Inc. (&ldquo;<span class=\"term\">Google</span>&rdquo;).\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Your use of our Android App must comply with Google’s then-current Android Market Terms of Service.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Google is only a provider of the Android Market where you obtained the Android App. We, and not Google, are solely responsible for our Android App and the Services and content available thereon. Google has no obligation or liability to you with respect to our Android App or these Terms.\n" +
    "</p>\n" +
    "<p>\n" +
    "    You acknowledge and agree that Google is a third-party beneficiary to the Terms as they relate to our Android App.\n" +
    "</p>\n" +
    "\n" +
    "<h2>4. USE OF THE SITE</h2>\n" +
    "<p>\n" +
    "By accessing and/or using the Site or our Services, you hereby agree to the following terms and conditions:\n" +
    "<ul>\n" +
    "    <li>\n" +
    "        You will not use the Site or our Products or Services for any unlawful purpose;\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        Account Holders may not use the Products or Services to engage in any non-Green Chef-related commercial activities, including, without limitation, raising money; advertising or promoting a third-party product, service, or company; or engaging in any third-party pyramid or other multi-tiered marketing scheme;\n" +
    "    </li>\n" +
    "    <li>You will not upload, post, email, transmit, or otherwise make available any User Content that:\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                is false, deceptive, misleading, or deceitful;\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                infringes any copyright, trademark, trade secret, right of publicity, or other proprietary rights of any person or entity;\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                is threatening, tortious, defamatory, libelous, indecent, obscene, pornographic, invasive of another's privacy, or promotes violence; or\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                discloses any sensitive information about another person, including that person's email address, postal address, phone number, credit card information, or any similar information;\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    <li>\n" +
    "        You will not access or use the Site or our Products or Services to collect any market research for a competing business;\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        You will not impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity;\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        You will not take any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our technical infrastructure;\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        You will not use automated means, including spiders, robots, crawlers, data-mining tools, or the like to download or scrape data from the Site or Services, except for Internet search engines (e.g., Google) and non-commercial public archives (e.g., archive.org) that comply with our robots.txt file;\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        You will not cover, obscure, block, or in any way interfere with any advertisements and/or safety features (e.g., report abuse button) on the Site or within the Services; and\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        You will not interfere with or attempt to interrupt the proper operation of the Site or the Services through the use of any virus, device, information collection or transmission mechanism, software or routine, or access or attempt to gain access to any data, files, or passwords through hacking, password or data mining, or any other means.\n" +
    "    </li>\n" +
    "</ul>\n" +
    "\n" +
    "<p>\n" +
    "    Please let us know about inappropriate content. If you find something that violates any of the foregoing terms and conditions, let us know, and we will review it. We reserve the right, in our sole and absolute discretion, to deny you access to the Site, or any portion of the Services, without notice and to remove any User Content that does not adhere to these terms and conditions.\n" +
    "</p>\n" +
    "\n" +
    "<h2>5. SUBSCRIPTIONS AND CANCELLATIONS &ast;</h2>\n" +
    "\n" +
    "<p>\n" +
    "    By registering for an account with Green Chef, you become an Account Holder with access to certain password-restricted areas of the Site, as well as the ability to purchase certain Products and Services. As part of the Products and Services offered by Green Chef, you can purchase a recurring subscription plan for certain Products (e.g., weekly meal kit deliveries) as may be offered from time to time as set forth on the Site (each, a &ldquo;<span class=\"term\">Subscription</span>&rdquo;). Each Subscription and the rights and privileges provided to an Account Holder are personal and non-transferable. All sales and payments of fees, taxes, and other charges for Products and Services, including Subscriptions, will be in U.S. Dollars.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    The fee that we will charge you for Products and Services, including a Subscription, will be the price posted on the Order Summary Page, on the date that you submit your order, which will be subject to change as provided herein or as you modify your account settings through the Site (for example, switching to a higher- or lower-cost Subscription plan). You will be liable for paying any and all applicable fees, taxes, and other charges you may incur in connection with your purchase of your Products and Services, including a Subscription, based on the mailing address that you provide when you register as an Account Holder. We reserve the right to change prices for Products and Services, including Subscriptions, at any time, with notice to you, and do not provide price protection or refunds in the event of promotions or price decreases.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    IMPORTANT NOTICE ABOUT AUTOMATIC RENEWAL OF SUBSCRIPTION.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Please carefully read the following terms relating to the automatic renewal of Subscriptions. By purchasing a Subscription, you indicate your understanding of, and agreement to, the following terms:\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Subscription Term.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Subscriptions are for a pre-paid term as stated on your Order Summary Page (a &ldquo;<span class=\"term\">Subscription Term</span>&rdquo;), and will continue to renew on a regular basis until you cancel your account as set forth in these Terms. Most Subscriptions are for a pre-paid term of one week, but we may offer different pre-paid terms for certain Subscriptions from time to time as stated on the Site.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Automatic Renewal.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    At the end of each Subscription Term, Green Chef will automatically renew your Subscription for another Subscription Term (a &ldquo;<span class=\"term\">Renewal</span>&rdquo;). Upon each such Renewal, as authorized by you during the Subscription sign-up process, Green Chef will charge your account with the applicable Subscription fee for the subsequent Subscription Term and any sale or similar taxes that may be imposed on your Subscription fee payment, unless you cancel your Subscription at least 7 days prior to such Renewal; to be effective, a cancellation must be submitted by 12 PM Eastern Time, at least 7 days prior to the next Renewal. Cancellations received less than 7 days prior to the next Renewal will be applied to the subsequent Renewal and Subscription Period. Your Subscription will continue to automatically renew at the end of each Subscription Term until you pause (if available) or cancel your Subscription.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Payment and Price.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    The Subscription fee for the subsequent Subscription Term is due upon the date of each such Renewal and will be automatically charged to the same credit card, PayPal, or other designated payment method that you used for the initial Subscription or the most recent Renewal. The Renewal price will be the same price as for the prior Subscription Term, unless we give you advance notice of a price change or unless you modify your account through the Site (for example, switching to a higher- or lower-cost Subscription). You will receive a notice if there are any material changes to the terms of, or policies regarding, your Subscription’s automatic renewal.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Cancellation Policy and Procedure.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    To cancel your Subscription, you must email us at help@greenchef.com or call us at 888-236-7295 and follow the provided directions and/or links. If you cancel by 12 PM Eastern Time, 7 days prior to the next Renewal date, as applicable, your cancellation will be effective as to the next Renewal and Subscription Term. Otherwise, your cancellation will be effective for the subsequent Renewal and Subscription Period.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    If you cancel your Subscription, you will enjoy the usage, rights and privileges of your Subscription until the effective date of your cancellation.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    PAYMENT & TAXES\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You agree to pay all fees or charges to your account based on Green Chef’s fees, charges, and billing terms in effect as shown on the Order Summary Page, on the date that you submit your order for Products or Services, including a Subscription, or, if applicable, on the date that you modify your Subscription settings in your account, or, if we give you advance notice of a price change, the date the price change becomes effective on your Subscription. You expressly agree that Green Chef is permitted to bill you for all applicable fees, any applicable taxes, and any other charges you may incur in connection with your use of this Site. We will collect applicable sales tax on Products shipped to the states for which we determine we have a duty to collect sales tax. If an item is subject to sales tax, you agree that the amount of taxes shown at checkout may be adjusted. Several factors may cause this, such as variances between processor programs and changes in tax rates. These fees, taxes, and charges will be billed to your credit card, PayPal, or other payment method designated by you in your account with us, and thereafter at regular intervals for the remainder of the term of these Terms of Service. If you do not pay on time or if we cannot charge your credit card, PayPal, or other designated payment method for any reason, we reserve the right to either suspend or terminate your access to the Site and terminate these Terms of Service.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You are fully responsible for all activities that occur under your account, and you agree to be personally liable for all charges incurred under your account. Your liability for such charges shall continue after termination of this Agreement.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    6. ORDERING AND DELIVERY\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef does not deliver to every location, so please check with our customer service team at help@greenchef.com to see if our Products and Services are available in your area. If we currently do not deliver to your area, we cannot agree to provide you with services in accordance with our Terms, and Customers will be prohibited from paying if they have a delivery ZIP code outside of the areas where Green Chef provides Products and Services. But, if you would like us to deliver to an area we do not currently cover, please let us know. We are expanding the reach of our Products and Services. We recommend that you create an account, and we will use reasonable efforts to notify you when we launch in your ZIP code.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    To provide flexibility to our Customers, we offer different options as to when our deliveries will arrive to you. Please visit the &ldquo;<span class=\"term\"><a href ng-click=\"gotoMyAccount()\">My Account</a></span>&rdquo; or &ldquo;<span class=\"term\"><a href=\"//help.greenchef.com\">Frequently Asked Questions</a></span>&rdquo; section(s) of the Site on these options and how to change your selection.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef uses reliable third-party delivery companies to deliver your Products. For Account Holders that purchase perishable food products from us, each box is carefully packaged so its contents will stay adequately chilled (e.g., for meat and seafood, 40°F or cooler) until at least 10 pm on the scheduled day of delivery (modifications may be made to scheduled delivery dates during certain holidays). However, to maintain the highest quality and integrity of any food Products after delivery, we recommend that you immediately refrigerate the food items when you receive them. You should inspect your food packages to ensure the contents arrive in a cool, refrigerated condition. The best way to do this is to check the meat and fish with a food thermometer to ensure their internal temperatures are 40°F or below. If you receive a food Product containing meat or fish with an internal temperature above 40°F, you should contact our customer service and discard the item. PLEASE DO NOT RETURN ANY PERISHABLE FOOD PRODUCT UNLESS REQUESTED BY CUSTOMER SERVICE.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    If you are not home when a delivery arrives, the delivery person will leave the package for you at your delivery address unless a signature is required by law. In the case of an apartment, the package could be left in an entryway, front desk, or mailroom. Anyone at the delivery address who receives the delivery is conclusively presumed to be authorized to receive the delivery. In cases in which you have designated an alternative receiver, such person shall accept the Products under all of the same terms and conditions that would apply had you accepted the delivery yourself.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    In the case of inclement weather, we will deliver your order as soon as reasonably possible when the conditions permit. If your designated delivery location is inaccessible, rendering us unable to make the delivery, we will attempt to contact you to determine the best alternative location and/or date for the delivery.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    7. REFERRALS\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef Account Holders may receive credits by participating in one of Green Chef’s referral programs. To receive credits, you must meet the requirements of the applicable referral programs and these Terms. You may only send referral invitations to individuals who consent to receive this type of message. You must comply with any applicable local laws.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Account Holders can earn rewards by inviting individuals to place orders at Green Chef. If an individual who registers to become an Account Holder using the unique referral link you sent (your &ldquo;<span class=\"term\">Invitation</span>&rdquo;) places a qualified order (a &ldquo;<span class=\"term\">Qualifying Purchase</span>&rdquo;), you will receive a credit in your Green Chef account (each, a &ldquo;<span class=\"term\">Referral Credit</span>&rdquo;) that corresponds to the value stated in the applicable referral credit program in effect at the time the referred individuals create a new account with Green Chef as stated on the Site. You may receive a Referral Credit for each of your referred individuals (i.e. referrals) who make a Qualifying Purchase, without limitation to the amount of Referral Credits you can earn. To qualify, the referred individuals must have created a new account with Green Chef by using the authorized link provided by your Invitation and place under such account an order that does not have any promotional discounts applied to it. Please be advised that orders under ‘Free Trials’ do not give rise to Referral Credits.\n" +
    "</p>\n" +
    "\n" +
    "\n" +
    "<p>\n" +
    "    Your Referral Credit is a credit toward a future delivery. You understand and agree that only one Referral Credit can be used per single order, and not in combination with any other discounts, except for Customer Service Credits previously allocated to you. A &ldquo;<span class=\"term\">Customer Service Credit</span>&rdquo; is a credit (or discount) on a future order issued by Green Chef as a result of a customer service issue. Referral Credits can be earned and expire as defined below. Any unused Customer Service Credits will expire six (6) months after the date of issuance.  To the extent that applicable law requires Customer Service Credits to extend beyond the six (6) month expiration, such credits will be extended and expire in accordance with applicable law.  Unused Customer Service Credits issued to New York member residents will expire five (5) years after the date of issuance.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Upon the referred individual’s first Qualifying Purchase, you will receive your Referral Credit in the form of an automatic credit on your next purchase order, unless you have another Referral Credit already attached to your order, in which case the Referral Credit(s) will accumulate. For a Referral Credit to be attributable to you, the referred individual must place the Qualifying Purchase in response to an invite from you via an authorized referral method or link. If the referred individual does not click on the personal referral link in their invite email or other invite mechanism to accept your invitation, you may not receive a Referral Credit. Under such circumstances, there is no discernible way to identify that the purchase resulted from your referral, and Green Chef is in no way liable to you for any resulting damages of any kind whether for breach or repudiation of contract, breach of warranty, negligence, or otherwise, whether or not the referred individual was advised of the possibility that you may not receive a Referral Credit.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    If two people refer the same individual, the referring party who sent the link that is used to create the new Account Holder's account will be considered the referring individual, regardless of which link was sent to the new Account Holder first.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Referral Credits are valid for three (3) months from issuance. Your Referral Credits are automatically applied to your purchases at checkout in the order in which they expire (i.e., first to expire will be applied first).\n" +
    "</p>\n" +
    "\n" +
    "\n" +
    "<p>\n" +
    "    You can track your Referral Credits easily online by visiting the &ldquo;<span class=\"term\">Invite Friends</span>&rdquo; section in your account. You can track the amount of Referral Credits you have earned and their associated expiration dates at any time.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You may not use spam or send unsolicited emails to people you do not personally know to collect Referral Credits, and you may not collect Referral Credits by posting on message boards, forums, or other online venues in violation of such venues' terms of use. Referral Credits are issued to a single Green Chef Account Holder at our discretion and cannot be transferred between accounts or between users. Credits cannot be bartered, exchanged, or sold. Referral Credits are a promotional offer and are not a payment instrument. Referral Credits are issued without any exchange of money or value from you and you have no vested property right or interest in them.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Referral Credits have no cash value by themselves; they are only deemed to have a notional cash value of the stated referral credit program amount if they are used in connection with an eligible purchase on our Site. We reserve the right to limit or cancel your Referral Credits in our sole discretion if we determine that you have violated these Terms, including through fraudulent or misleading referral activity (for example, by inviting fake people, using false names, using multiple email accounts or email addresses, impersonating another person, or otherwise providing false or misleading information to us) or if we terminate your account for any reason. You may also be liable for civil and/or criminal penalties under applicable law.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    We reserve the right in our sole discretion at any time, and without prior notice to you, to add to, remove, or otherwise change the terms applicable to the issuance and use of Referral Credits. Such changes may include, without limitation, how you may earn and spend Referral Credits, how long Referral Credits last, minimum purchase amounts with which Referral Credits may be used, and the lifetime maximum amount of Referral Credits that you may earn.\n" +
    "</p>\n" +
    "\n" +
    "<h2>8. INTELLECTUAL PROPERTY</h2>\n" +
    "\n" +
    "<p>\n" +
    "    The Site contains material, such as software, text, graphics, images, sound recordings, audiovisual works, and other material provided by or on behalf of Green Chef (collectively referred to as the &ldquo;<span class=\"term\">Content</span>&rdquo;).\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    &ldquo;<span class=\"term\">Green Chef</span>&rdquo; is a trademark of Green Chef Corporation in the United States. Other trademarks, names, and logos on this Site are the property of their respective owners. Other company, product, and service names located on the Site may be trademarks or service marks owned by others (the &ldquo;<span class=\"term\">Third-Party Trademarks,</span>&rdquo; and, collectively with Green Chef Trademarks, the &ldquo;<span class=\"term\">Trademarks</span>&rdquo;). Nothing in this Agreement should be construed as granting, by implication, estoppel, or otherwise, any license or right to use the Trademarks, without our prior written permission specific for each such use. Use of the Trademarks as part of a link to or from any site is prohibited unless establishment of such a link is approved in advance by us in writing. All goodwill generated from the use of Green Chef Trademarks inures to our benefit. Elements of the Site and the Services are protected by trade dress, trademark, unfair competition, and other state, federal, and national laws and may not be copied or imitated, in whole or in part, by any means, including, but not limited to, the use of framing or mirrors.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Unless otherwise specified in these Terms, all information and screens appearing on this Site, including documents, services, site design, text, graphics, logos, images, and icons, as well as the arrangement thereof, are the sole property of Green Chef or its licensors, Copyright © 2014 Green Chef Corporation. All rights not expressly granted herein are reserved. Except as otherwise required or limited by applicable law, any reproduction, distribution, modification, retransmission, or publication of any copyrighted material is strictly prohibited without the express written consent of the copyright owner or an applicable license.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    The Mobile Application software that may be provided to you through the Site and Services and related documentation are &ldquo;<span class=\"term\">Commercial Items,</span>&rdquo; as that term is defined at 48 C.F.R. §2.101, consisting of &ldquo;<span class=\"term\">Commercial Computer Software</span>&rdquo;and &ldquo;<span class=\"term\">Commercial Computer Software Documentation,</span>&rdquo; as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, if you are a government entity, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    9. COMMUNICATIONS TO US; USER CONTENT\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Although we encourage you to email us, we do not want you to, and you should not, email us any content that contains confidential information. With respect to all emails you send to us, including, but not limited to, feedback, questions, comments, suggestions, and the like, we shall be free to use any ideas, concepts, know-how, or techniques contained in your communications for any purpose whatsoever, including, but not limited to, the development, production, and marketing of products and services that incorporate such information, without compensation to you.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    As noted above, the Services provide Account Holders the ability to post and upload User Content to the Site. You expressly acknowledge and agree that once you submit your User Content, it will be accessible by others, and that there is no confidentiality or privacy with respect to such User Content, including, without limitation, any personally identifying information that you may make publicly available. YOU, AND NOT GREEN CHEF, ARE ENTIRELY RESPONSIBLE FOR ALL USER CONTENT THAT YOU UPLOAD, POST, EMAIL, OR OTHERWISE TRANSMIT VIA THE SITE.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    You retain all copyrights and other intellectual property rights in and to your own User Content. You do, however, hereby irrevocably grant us and our sublicensees and assignees a non-exclusive, transferable, perpetual, royalty-free, freely sublicensable (through multiple tiers) license to modify, compile, combine with other content, copy, record, synchronize, transmit, translate, format, distribute, publicly display, publicly perform, and otherwise use or exploit (including for profit) any and all of your User Content that you have not designated as &ldquo;<span class=\"term\">private,</span>&rdquo; your username, the picture associated with your username, and all intellectual property and moral rights therein throughout the universe, in each case, by or in any means, methods, media, or technology now known or hereafter devised. Without limiting the foregoing, you acknowledge and agree that uses of your User Content, username, and associated picture permitted by the foregoing rights and licenses may include the display of such User Content, username, and associated picture adjacent to advertising and other material or content, including for profit.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Ownership of and licenses to User Content submitted in connection with a particular contest shall be governed by the contest rules applicable to that contest. In connection with any such contest, if there is a conflict between those contest rules and these Terms, the contest rules shall govern as to the contest.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    If you submit User Content to us, each such submission constitutes a representation and warranty to Green Chef that such User Content is your original creation (or that you otherwise have the right to provide the User Content), that you have the rights necessary to grant the license to the User Content under this Section, and that it and its use by Green Chef and its content partners as permitted by this Agreement does not and will not infringe or misappropriate the intellectual property, privacy, publicity, or moral rights of any person or contain any libelous, defamatory, or obscene material or content that violates our terms and conditions set forth above.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    10. LIMITED WARRANTY, RETURN POLICY, SAFETY REQUIREMENTS AND LIMITATION OF LIABILITY\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS. YOU, AND NOT GREEN CHEF, ARE SOLELY RESPONSIBLE FOR THE PROPER AND SAFE WASHING, HANDLING, PREPARATION, STORAGE, REFRIGERATION, AND COOKING OF ANY FOOD CONTAINED IN THE PRODUCTS (COLLECTIVELY, &ldquo;<span class=\"term\">SAFETY REQUIREMENTS</span>&rdquo;). IF YOU HAVE ANY QUESTIONS ABOUT THE SAFE HANDLING REQUIREMENTS, PLEASE VISIT OUR <a href=\"//help.greenchef.com\">FREQUENTLY ASKED QUESTIONS</a> SECTION OF THE SITE. GREEN CHEF IS NOT RESPONSIBLE FOR YOUR ACTIONS AFTER YOU RECEIVE THE PRODUCTS. ALL OUR PRODUCTS SHOULD BE RECEIVED AND STORED AS RECOMMENDED HEREIN OR ON THE FRONT OF THE APPLICABLE RESPECTIVE RECIPE CARD FOR CERTAIN FOOD PRODUCTS. IF YOU ARE DISSATISFIED WITH A PRODUCT FOR ANY REASON, PLEASE CONTACT OUR CUSTOMER SERVICE TEAM WITHIN SEVEN (7) DAYS AFTER DELIVERY, AND WE WILL EITHER REPLACE THE AFFECTED PORTION OF THE PRODUCT AT OUR EXPENSE OR CREDIT YOU THE PURCHASE PRICE FOR THAT PRODUCT.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    GREEN CHEF DOES NOT OPERATE IN AN ALLERGEN-FREE FACILITY. GREEN CHEF FACILITIES MANUFACTURE AND/OR PROCESS MILK, EGGS, FISH, SHELLFISH, TREE NUTS, PEANUTS, WHEAT, AND SOYBEANS. GREEN CHEF PROVIDES THE MOST ACCURATE AND UPDATED INFORMATION TO ITS KNOWLEDGE OF ALLERGENS IN ITS PRODUCTS. GREEN CHEF IS COMMITTED TO FOOD SAFETY AND TAKES REASONABLE MEASURES TO AVOID CROSS-CONTAMINATION, BUT GREEN CHEF CANNOT GUARANTEE THAT CUSTOMERS WITH FOOD OR BEVERAGE ALLERGIES MAY NOT BE EXPOSED TO ALLERGENS THROUGH POTENTIAL CROSS-CONTAMINATION. YOU, AND NOT GREEN CHEF, ARE SOLELY RESPONSIBLE FOR ADVISING ANY NON-ACCOUNT HOLDERS AND/OR NON-ORDERING PARTIES AS TO THE SAFETY REQUIREMENTS AND ANY POTENTIAL ALLERGENS IN THE PRODUCTS.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    GREEN CHEF DOES NOT PROVIDE OR OFFER DIETARY, FITNESS, OR MEDICAL ADVICE AND NOTHING ON THE SITE SHALL BE INTERPRETED AS PROVIDING OR OFFERING DIETARY, FITNESS OR MEDICAL ADVICE.  ALWAYS SEEK THE ADVICE OF YOUR PHYSICIAN OR OTHER QUALIFIED HEALTH PROVIDER WITH ANY QUESTIONS ABOUT YOUR DIET, EXERCISE, OR MEDICAL CONDITION.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    OTHER THAN AS EXPRESSLY SET FORTH IN SECTION 7: (I) WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE SITE, THE SERVICES, THE CONTENT, THE TRADEMARKS, OR THE PRODUCTS, AND ALL OF THE FOREGOING ARE PROVIDED ON AN &ldquo;<span class=\"term\">AS IS</span>&rdquo; AND &ldquo;<span class=\"term\">AS AVAILABLE</span>&rdquo; BASIS WITHOUT ANY WARRANTIES OF ANY KIND; (II) WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES' RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND ANY WARRANTIES ARISING FROM COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE; AND (III) YOU AGREE THAT YOU USE THE SITE, THE PRODUCTS, AND THE SERVICES AT YOUR OWN RISK.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    WE WILL NOT BE LIABLE TO YOU FOR ANY INCIDENTAL AND CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION RESULTING FROM YOUR PURCHASE OF THE PRODUCTS OR YOUR USE OR INABILITY TO USE THE SITE OR THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR MAXIMUM LIABILITY TO YOU (AND ANYONE CLAIMING RIGHTS THROUGH YOU) SHALL BE CAPPED AT THE MONIES PAID BY YOU TO GREEN CHEF IN THE ONE (1) MONTH PERIOD PRECEDING THE DATE ON WHICH YOUR CLAIM AROSE. SOME STATES DO NOT ALLOW EXCLUSION OF IMPLIED WARRANTIES OR LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. IN SUCH CASES, OUR LIABILITY SHALL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW. IF YOU ARE A NEW JERSEY RESIDENT, THIS LIMITATION OF LIABILITY SECTION IS TO BE ONLY AS BROAD AND INCLUSIVE AS IS PERMITTED BY THE LAW OF THE STATE OF NEW JERSEY.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    GREEN CHEF HAS MADE REASONABLE EFFORT TO DISPLAY AND LABEL THE PRODUCTS AS ACCURATELY AS POSSIBLE ON THE SITE. HOWEVER, THE PRODUCTS DELIVERED MAY VARY FROM THE IMAGES VIEWED ON THE SITE DUE TO A NUMBER OF FACTORS THAT ARE NOT WITHIN OUR CONTROL, INCLUDING, WITHOUT LIMITATION, SYSTEM CAPABILITIES AND CONSTRAINTS OF YOUR COMPUTER, MANUFACTURING PROCESS ISSUES, AND THE AVAILABILITY AND VARIABILITY OF PRODUCT, PACKAGING AND RAW MATERIALS. ALTHOUGH WE WILL EXERCISE COMMERCIALLY REASONABLE EFFORTS TO HELP ENSURE THAT THE PRODUCTS CONFORM TO REASONABLE EXPECTATIONS, VARIATIONS SOMETIMES OCCUR. THERE MAY BE CIRCUMSTANCES WHERE PRODUCTS UNDERGO INGREDIENT OR PACKAGING CHANGES THAT ARE DIFFERENT FROM THE ORIGINAL PRODUCTS REPRESENTED ON THE SITE. ALL FINAL PRODUCTS, WITH ANY LATE INGREDIENT OR PACKAGING CHANGES, CAN BE FOUND ON THE SITE. ALL RELATED NUTRITION FACTS FOR ALL PRODUCTS CAN BE FOUND ON THE SITE, AND ALL NUTRITION FACTS ARE BASED ON AVERAGE VALUES. ALL SPECIFICATIONS (INCLUDING NUTRITION FACTS AND INGREDIENT VOLUME OR AMOUNT) AND OFFERINGS ARE SUBJECT TO CHANGE WITHOUT NOTICE. PRICING FOR PRODUCTS AND SERVICES MAY BE CHANGED AS SET FORTH IN THESE TERMS. THE SITE MAY CONTAIN INFORMATION ON SERVICES AND PRODUCTS THAT ARE NOT AVAILABLE IN EVERY LOCATION. A REFERENCE TO A SERVICE OR PRODUCT ON THE SITE DOES NOT IMPLY THAT IT IS OR WILL BE AVAILABLE IN YOUR LOCATION. THE SITE MAY CONTAIN TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS OR OMISSIONS. WE ARE NOT RESPONSIBLE FOR ANY SUCH TYPOGRAPHICAL, TECHNICAL, OR PRICING ERRORS.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    11. EXTERNAL SITES\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    The Site may contain links to third-party sites (&ldquo;<span class=\"term\">External Sites</span>&rdquo;). These links are provided solely as a convenience to you and not as an endorsement by us of the content on such External Sites. The content of such External Sites is developed and provided by others. You should contact the site administrator or webmaster for those External Sites if you have any concerns regarding such links or any content located on such External Sites. We are not responsible for the content of any linked External Sites and do not make any representations regarding the content or accuracy of materials on such External Sites. You should take precautions when downloading files from all Sites to protect your computer from viruses and other destructive programs. If you decide to access linked External Sites, you do so at your own risk.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    12. INDEMNIFICATION\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    You, on behalf of yourself and your heirs, agree to defend, indemnify, and hold us and our officers, directors, employees, successors, licensees, and assignees harmless from and against any claims, actions, or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from your breach of these Terms or your access to, use, or misuse of the Site or the Services. We shall provide notice to you of any such claim, suit, or proceeding and shall assist you, at your expense, in defending any such claim, suit, or proceeding. We reserve the right to assume the exclusive defense and control of any matter that is subject to indemnification under this section. In such case, you agree to cooperate with any reasonable requests assisting our defense of such matter. If you are a New Jersey resident, this Indemnification clause is to be only as broad and inclusive as is permitted by the law of the State of New Jersey.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    13. COMPLIANCE WITH APPLICABLE LAWS\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    The Site and the Services (and their servers) are all based and operated in the United States. We make no claims concerning whether the Content may be downloaded, viewed, or be appropriate for use outside of the United States. If you access the Site, the Services, or the Content from outside of the United States, you do so at your own risk. Whether inside or outside of the United States, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    14. TERMINATION OF SERVICES AND USE OF SITE\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    We reserve the right, in our sole discretion, to restrict, suspend, or terminate Services and your access to all or any part of the Site at any time and for any reason without prior notice or liability. We reserve the right to change, suspend, or discontinue all or any part of the Site or the Services at any time without prior notice or liability.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    15. DIGITAL MILLENNIUM COPYRIGHT ACT\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef respects the intellectual property rights of others and attempts to comply with all relevant laws. We will review all claims of copyright infringement received and remove any Content deemed to have been posted or distributed in violation of any such laws.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Our designated agent under the Digital Millennium Copyright Act (the &ldquo;<span class=\"term\">Act</span>&rdquo;) for the receipt of any Notification of Claimed Infringement which may be given under that Act is as follows:\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Green Chef Corporation<br>\n" +
    "    Attention: General Counsel (DMCA)<br>\n" +
    "    5490 Conestoga Ct. <br>\n" +
    "    Boulder, CO 80301\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    If you believe that your work has been copied on the Site in a way that constitutes copyright infringement, please provide our agent with notice in accordance with the requirements of the Act, including (i) a description of the copyrighted work that has been infringed and the specific location on the Site where such work is located; (ii) a description of the location of the original or an authorized copy of the copyrighted work; (iii) your address, telephone number, and email address; (iv) a statement by you that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; (v) a statement by you, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf; and (vi) an electronic or physical signature of the owner of the copyright or the person authorized to act on behalf of the owner of the copyright interest.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    16. DISPUTE RESOLUTION\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Please Read This Provision Carefully. It Affects Your Legal Rights. This &ldquo;<span class=\"term\">Dispute Resolution and Arbitration; Class Action Waiver</span>&rdquo; provision (&ldquo;<span class=\"term\">Provision</span>&rdquo;) facilitates the prompt and efficient resolution of any dispute, claim, or controversy, whether based in contract, statute, regulation, ordinance, tort—including, but not limited to, fraud, misrepresentation, fraudulent inducement, or negligence—or any other legal or equitable theory, and includes the validity, enforceability, or scope of this Provision (with the exception of the enforceability of the Class Action Waiver clause below) that may arise between You and Green Chef (collectively, a &ldquo;<span class=\"term\">Dispute</span>&rdquo;). The term &ldquo;<span class=\"term\">Dispute</span>&rdquo; shall be given the broadest meaning enforceable by law and include any claims against other parties relating to Services or Products provided or billed to You (such as Green Chef licensors, suppliers, dealers, or third-party vendors) whenever You also assert claims against Green Chef in the same proceeding. This Provision provides that all Disputes between You and Green Chef that cannot be resolved by agreement using good faith efforts within 60 days shall be resolved by binding arbitration because acceptance of these terms constitutes a waiver of your right to litigation claims and all opportunity to be heard by a judge or jury. To be clear, there is no judge or jury in arbitration, and court review of an arbitration award is limited. The arbitrator must follow this Agreement and can award the same damages and relief as a court (including attorney’s fees). You may, however, opt out of this Provision, which means You would have a right or opportunity to bring claims in a court, before a judge or jury, and/or to participate in or be represented in a case filed in court by others (including, but not limited to, class actions). BOTH YOU AND GREEN CHEF AGREE THAT, EXCEPT AS PROVIDED BELOW, ANY AND ALL DISPUTES, AS DEFINED ABOVE, WHETHER PRESENTLY IN EXISTENCE OR BASED ON ACTS OR OMISSIONS IN THE PAST OR IN THE FUTURE, WILL BE RESOLVED EXCLUSIVELY AND FINALLY BY BINDING ARBITRATION RATHER THAN IN COURT IN ACCORDANCE WITH THIS PROVISION.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Pre-Arbitration Claim Resolution. For all Disputes, whether pursued in court or arbitration, you must first give Green Chef an opportunity to resolve the Dispute, which shall first be done by mailing Green Chef by first-class United States mail to: Green Chef Corp., ATTN: Legal Department &ldquo;<span class=\"term\">INFORMAL DISPUTE RESOLUTION</span>&rdquo;, 5490 Conestoga Ct., Boulder, CO 80301, with the following information: (1) your name, (2) your address, (3) a written description of your Dispute, and (4) a description of the specific relief sought. If the Parties do not resolve the Dispute within 60 days after receiving Your notification, then You may pursue Your Dispute in arbitration. You may pursue Your Dispute in a court only under the circumstances described below.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Exclusions from Arbitration/Right to Opt-Out. Notwithstanding the above, You or Green Chef may choose to pursue a Dispute in court and not by arbitration if: (a) the Dispute qualifies for initiation in small claims court; or (b) YOU OPT OUT OF THESE ARBITRATION PROCEDURES WITHIN 30 DAYS FROM THE DATE THAT YOU FIRST CONSENT TO THIS AGREEMENT (the &ldquo;<span class=\"term\">Opt-Out Deadline</span>&rdquo;). You may opt out of this Provision by mailing the following information by first-class United States mail to Green Chef Corp., ATTN: LEGAL DEPARTMENT \"INFORMAL DISPUTE RESOLUTION\", 5490 Conestoga Ct., Boulder, CO 80301: (1) your name; (2) your address; (3) a clear statement that You do not wish to resolve disputes with us through arbitration. Either way, Green Chef will not take personally any decision You make. In fact, Green Chef promises that your decision to opt out of this Provision will have no adverse effect on your relationship with us. But, Green Chef does have to enforce the Opt-Out Deadline, so keep in mind that any opt-out request received after the Opt-Out Deadline will not be valid and You must pursue Your dispute in arbitration or small claims court.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Arbitration Procedures. If this Provision applies and the Dispute is not resolved as provided above (Pre-Arbitration Claim Resolution), either You or Green Chef may initiate arbitration proceedings. The American Arbitration Association (&ldquo;<span class=\"term\">AAA</span>&rdquo;), www.adr.org, will arbitrate all Disputes, and the arbitration will be conducted before a single arbitrator. The arbitration shall be commenced as an individual arbitration and shall in no event be commenced as a class action, representative action, or group or consolidated or coordinated arbitration that includes claimants other than yourself. All issues shall be for the arbitrator to decide, including the scope of this Provision. For arbitration before AAA, for disputes of less than $75,000, the AAA’s Supplementary Procedures for Consumer-Related Disputes will apply; for disputes involving $75,000 or more, the AAA’s Commercial Arbitration Rules will apply. In either instance, the AAA’s Optional Rules For Emergency Measures Of Protection shall apply. The AAA rules are available at www.adr.org or by calling 1-800-778-7879. This Provision governs in the event it conflicts with the applicable arbitration rules. Under no circumstances will class action, representative action, or group or consolidated or coordinated action procedures or rules apply to the arbitration. Because the Agreement concerns interstate commerce, the Federal Arbitration Act (&ldquo;<span class=\"term\">FAA</span>&rdquo;) governs the arbitrability of all Disputes. However, the arbitrator will apply applicable substantive law consistent with the FAA and the applicable statute of limitations or condition precedent to suit.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Arbitration Award – The arbitrator may award on an individual basis any relief that would be available pursuant to applicable law and will not have the power to award relief to, against, or for the benefit of any person who is not a party to the proceeding. The arbitrator will make any award in writing and with a written statement of decision, signed by the arbitrator, which includes a determination of all the questions submitted to the arbitrator, the decision of which is necessary to determine the controversy. Such award will be final and binding on the parties, except for any right of appeal provided by the FAA or applicable state law, and may be entered in any court having jurisdiction over the parties for purposes of enforcement.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Location of Arbitration – You or Green Chef may initiate arbitration in either Denver, Colorado, or the federal judicial district that includes Your billing address.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Payment of Arbitration Fees and Costs – With respect to any good-faith Dispute, Green Chef will pay all reasonable arbitration fees (in excess of those filing fees the claimant would have to pay in a state court of general jurisdiction, which fees shall be paid by the claimant), hearing fees, and associated costs and expenses of the AAA and the arbitrator. However, You will still be responsible for payment of all additional fees and costs that You incur in the arbitration, which include but are not limited to your own attorney’s fees, costs, expenses, or expert witnesses. In addition to any fees and costs recoverable under applicable law, if You provide notice and negotiate in good faith with Green Chef as provided in the section above titled &ldquo;<span class=\"term\">Pre-Arbitration Claim Resolution</span>&rdquo; and the arbitrator concludes that You are the prevailing party in the arbitration, You may be entitled to recover your reasonable attorney’s fees and costs as determined by the arbitrator.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Class Action Waiver. Except as otherwise provided in this Provision, the arbitrator may not consolidate or coordinate more than one person’s claims and may not otherwise preside over any form of a class or representative proceeding or claims (such as a class action, representative action, consolidated action, or private attorney general action) unless both You and Green Chef specifically agree in writing to do so following initiation of the arbitration. If You choose to pursue your Dispute in court by opting out of the Arbitration Provision, as specified above, this Class Action Waiver will not apply to You. You cannot be a class representative, class member, or otherwise participate in a class, consolidated, or representative proceeding without having complied with the opt-out requirements above.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Arbitration Has No Jury. There is no jury in an arbitration, and the arbitration is not conducted in a public court. You understand and agree that by accepting this Provision in this Agreement, You and Green Chef are each waiving the right to a jury trial or a trial before a judge in a public court. In the absence of this Provision, You and Green Chef might otherwise have had a right or opportunity to bring Disputes in a court, before a judge or jury, and/or to participate or be represented in a case filed in court by others (including class actions). Except as otherwise provided below, those rights are waived. Other rights that You would have if You went to court (e.g., the rights to both appeal and certain types of discovery) may be more limited in arbitration or may also be waived.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Severability. If any clause within this Provision (other than the Class Action Waiver clause above) is found to be illegal or unenforceable, that clause will be severed from this Provision whose remainder will be given full force and effect. If the Class Action Waiver clause is found to be illegal or unenforceable, this entire Provision will be unenforceable and the dispute will be decided by a court.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Continuation. This Provision shall survive the termination of this Agreement. Notwithstanding any provision in this Agreement to the contrary, Green Chef agrees that if it makes any change to this Section 16 Dispute Resolution provision (other than a change to the Notice Address), You may reject any such change and require Green Chef to adhere to the language in this Provision if a Dispute arises.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    17. GOVERNING LAW\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    The Federal Arbitration Act, applicable U.S. federal law, and the internal laws of the State of Colorado, without regard to its choice of law or conflicts of law provisions, will govern these Terms. Foreign laws do not apply. The United Nations Convention on Contracts for the International Sale of Goods and any laws based on the Uniform Computer Information Transactions Act (UCITA) shall not apply to this Agreement. Except for Disputes subject to arbitration as described above, any disputes relating to these Terms, the Sites, the Mobile Applications, or the Services will be heard in the courts located in Denver County, Colorado.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    18. MISCELLANEOUS\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Except as set forth in the Dispute Resolution Provision in Section 16, above, if any provision of this Agreement is found to be invalid by any court having competent jurisdiction or terminated in accordance with the Termination provision above, the invalidity or termination of such provision shall not affect the validity of any other provisions, including without limitation, which shall remain in full force and effect.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "    Our failure to act on or enforce any provision of these Terms shall not be construed as a waiver of that provision or any other provision in these Terms. No waiver shall be effective against us unless made in writing, and no such waiver shall be construed as a waiver in any other or subsequent instance. Except as expressly agreed by us and you in writing, these Terms constitutes the entire Agreement between you and us with respect to the subject matter and supersedes all previous or contemporaneous agreements, whether written or oral, between the parties with respect to the subject matter. The section headings are provided merely for convenience and shall not be given any legal import. These Terms will inure to the benefit of our successors, assignees, licensees, and sublicensees. The proprietary rights, disclaimer of warranties, representations made by you, indemnities, limitations of liability, and general provisions shall survive any termination of these Terms.\n" +
    "</p>\n" +
    "\n" +
    "<h2>\n" +
    "    19. CALIFORNIA CONSUMER NOTICE\n" +
    "</h2>\n" +
    "\n" +
    "<p>\n" +
    "    Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: This Site and Service are provided by Green Chef Corporation. If you have a question or complaint regarding the Site or Services, please contact Customer Service at <a href=\"mailto:help@greenchef.com\">help@greenchef.com</a>. You may also contact us by writing to Green Chef Customer Support, 5490 Conestoga Ct., Boulder, CO 80301. California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by post at 1625 North Market Blvd., Sacramento, CA 95834 or by telephone at (916) 445-1254 or (800) 952-5210 or Hearing Impaired at TDD (800) 326-2297 or TDD (916) 322-1700.\n" +
    "</p>\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "<p>\n" +
    "    &ast;On November 22, 2017, the Company added an additional feature to the Site that allows Account Holders to cancel their accounts by clicking on the \"Cancel Subscription\" button on the \"Account Info\" page of the Site and following the applicable prompts.  This feature is in addition to the other cancellation methods noted in these Terms of Service.\n" +
    "</p>\n" +
    "")

$templateCache.put("sign-up/delivery-details/delivery-details.tpl.html","<div class=\"form-group address-group\">\n" +
    "  <label>Address Type</label>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-6 input-item\">\n" +
    "      <div class=\"radio-label\">\n" +
    "        <input type=\"radio\" id=\"home-address\"\n" +
    "                name=\"addressType\"\n" +
    "                ng-model=\"order.addressType\"\n" +
    "                ng-change=\"updateShippingDates(order.addressType)\"\n" +
    "                value=\"home\">\n" +
    "        <label for=\"home-address\">residential</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-6 input-item\">\n" +
    "      <div class=\"radio-label\">\n" +
    "        <input type=\"radio\" id=\"commercial-address\"\n" +
    "                name=\"addressType\"\n" +
    "                ng-model=\"order.addressType\"\n" +
    "                ng-change=\"updateShippingDates(order.addressType)\"\n" +
    "                value=\"commercial\">\n" +
    "        <label for=\"commercial-address\">business</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group delivery-group\">\n" +
    "  <div class=\"select-group\">\n" +
    "    <label for=\"delivery-window\">Delivery Day</label>\n" +
    "    <div class=\"dropdown-list\">\n" +
    "      <select id=\"delivery-window\" class=\"form-control btn-select\"\n" +
    "              ng-model=\"order.deliveryWindow\"\n" +
    "              ng-disabled=\"enableAutomaticDeliveryDayChoice\"\n" +
    "              ng-change=\"updateFirstDeliveryDate(order.deliveryWindow)\"\n" +
    "              required>\n" +
    "          <option ng-repeat=\"day in shippingDates.availableDaysOfWeek\"\n" +
    "                  value=\"{{day}}\"\n" +
    "                  ng-selected=\"day == order.deliveryWindow\"\n" +
    "                  >{{day | capitalizeFirst }}s</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/coupon/coupon-landing.tpl.html","<div class=\"splash-home splash-body\">\n" +
    "    <section class=\"splash-home-header-banner\" ng-class=\"{'sign-up-gilt': couponGilt}\">\n" +
    "        <div class=\"splash-home-bg\"></div>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <article class=\"col-sm-6 coupon-intro\">\n" +
    "                    <h2 class=\"title\">Deliciously simple.</h2>\n" +
    "                    <div class=\"intro-wrapper\">\n" +
    "                        <p class=\"intro\">\n" +
    "                            Fresh organic ingredients. Healthy, flavorful meals. Right at your doorstep.\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </article>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"col-md-12 col-sm-12 sign-up-form\" ng-class=\"{'has-alert-coupon' : alerts.length > 0}\">\n" +
    "                        <!-- Sign up-->\n" +
    "                        <form id=\"sign-up-form\" name=\"couponForm\"\n" +
    "                              ng-submit=\"submitCoupon(couponForm)\"\n" +
    "                              class=\"form-horizontal main-form\"\n" +
    "                              ng-class=\"signupSubmitted ? 'validate' : ''\"\n" +
    "                              novalidate>\n" +
    "                            <div class=\"main-form-bg\">\n" +
    "                              <h2 class=\"work-header header-signup upper\" ng-bind-html=\"introTitle\"></h2>\n" +
    "                              <div>\n" +
    "                                  <div ng-repeat=\"alert in alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "                                      <button type=\"button\" class=\"close\" ng-click=\"closeAlert()\">x</button>\n" +
    "                                      {{alert.msg}}\n" +
    "                                  </div>\n" +
    "                              </div>\n" +
    "                              <p ng-html-compile=\"introBody\" class=\"intro-body\"></p>\n" +
    "                              <div class=\"form-group groupon-code-container\">\n" +
    "                                  <div class=\"col-sm-8\">\n" +
    "\n" +
    "                                      <label for=\"grouponcode\" class=\"form-label\">Enter your code here</label>\n" +
    "                                      <label class=\"error\" ng-show=\"couponSubmitted\">{{ getError(couponForm.grouponcode.$error) }}</label>\n" +
    "                                      <input id=\"grouponcode\"\n" +
    "                                             name=\"grouponcode\" ng-model='grouponCode'\n" +
    "                                             class=\"form-control grouponcode\"\n" +
    "                                             required/>\n" +
    "                                  </div>\n" +
    "\n" +
    "                                  <div class=\"col-sm-4\">\n" +
    "                                    <button class=\"btn btn-green btn-next btn-redeem\" type=submit>Redeem</button>\n" +
    "                                  </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"more-info how-we-do basic-box\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <h3 class=\"col-sm-12 section-title text-center text-uppercase\">How green chef does dinner</h3>\n" +
    "            </div>\n" +
    "            <div class=\"row row-items\">\n" +
    "              <div class=\"col-sm-4 wrap-box\">\n" +
    "                <div class=\"box customize\">\n" +
    "                  <div class=\"image\">\n" +
    "                    <img src=\"//cdn.greenchef.com/assets/Vegan/pick-preference@1x.dae80e96.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/pick-preference@2x.64eeb46a.jpg 2x\">\n" +
    "                  </div>\n" +
    "                  <div class=\"box-content-wrapper\">\n" +
    "                    <div class=\"box-content\">\n" +
    "                      <h4 class=\"title text-uppercase\">Pick your preferences</h4>\n" +
    "                      <p class=\"details\">Tell us how you like to eat. Vegan? Gluten&#45;Free? Paleo? No problem.</p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"col-sm-4 wrap-box\">\n" +
    "                <div class=\"box deliver\">\n" +
    "                  <div class=\"image\">\n" +
    "                    <img src=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@1x.c3955568.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@2x.920802be.jpg 2x\">\n" +
    "                  </div>\n" +
    "                  <div class=\"box-content-wrapper\">\n" +
    "                    <div class=\"box-content\">\n" +
    "                      <h4 class=\"title text-uppercase\">Skip the store</h4>\n" +
    "                      <p class=\"details\">We&#8217;ll send fresh, organic, pre&#45;measured ingredients to your door.</p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"col-sm-4 wrap-box\">\n" +
    "                <div class=\"box cook\">\n" +
    "                  <div class=\"image\">\n" +
    "                    <img src=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@1x.852921e2.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@2x.fef1e1e6.jpg 2x\">\n" +
    "                  </div>\n" +
    "                  <div class=\"box-content-wrapper\">\n" +
    "                    <div class=\"box-content\">\n" +
    "                      <h4 class=\"title text-uppercase\">Cook, share &amp; enjoy</h4>\n" +
    "                      <p class=\"details\">Try new flavors and techniques. Dinner&#8217;s ready in just 30 minutes.</p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/coupon/groupon-landing.tpl.html","<div class='splash-home splash-body'>\n" +
    "  <section class=\"splash-home-header-banner sign-up-groupon\">\n" +
    "    <div class=\"splash-home-bg\"></div>\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "\n" +
    "        <article class=\"col-sm-6 groupon-intro\">\n" +
    "          <h2 class=\"title\">Deliciously simple.</h2>\n" +
    "          <div class=\"intro-wrapper\">\n" +
    "              <p class=\"intro\">\n" +
    "                  Fresh organic ingredients. Healthy, flavorful meals. Right at your doorstep.\n" +
    "              </p>\n" +
    "          </div>\n" +
    "        </article>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <div class=\"col-md-12 col-sm-12 sign-up-form\" ng-class=\"{'has-alert-groupon' : alerts.length > 0}\">\n" +
    "            <!-- Sign up-->\n" +
    "            <form id=\"sign-up-form\" name=\"couponForm\"\n" +
    "                  ng-submit=\"submitCoupon(couponForm)\"\n" +
    "                  class=\"form-horizontal main-form\"\n" +
    "                  ng-class=\"couponSubmitted ? 'validate' : ''\"\n" +
    "                  novalidate>\n" +
    "              <div class=\"main-form-bg\">\n" +
    "                <h2 class=\"work-header header-signup upper\">Welcome Grouponers</h2>\n" +
    "                <div>\n" +
    "                  <div ng-repeat=\"alert in alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "                    <button type=\"button\" class=\"close\" ng-click=\"closeAlert()\">x</button>\n" +
    "                    {{alert.msg}}\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <p class=\"intro-body\">Thanks for signing up! We're excited to help you cook wholesome, delicious meals.<br/><br/>\n" +
    "\n" +
    "                  Green Chef delivers fresh, organic ingredients and original, tasty recipes right to your door. You'll get weekly deliveries with all you need for 3 organic dinners for 2 or 4 people, customized to your preferences. Green Chef is a weekly delivery service, but don't worry! We'll only send you Green Chef when you want it. Use your Delivery Schedule to manage when you receive your deliveries. Make sure you do so before your weekly cutoff time, 7 days before your delivery date.</p>\n" +
    "                <div class=\"form-group groupon-code-container\">\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <label for=\"grouponcode\">Enter your code here</label>\n" +
    "                    <!--<label class='error' ng-show=\"couponSubmitted\">{{ getError(couponForm.grouponcode.$error) }}</label>-->\n" +
    "                    <input id=\"grouponcode\"\n" +
    "                           name=\"grouponcode\" ng-model='grouponCode'\n" +
    "                           class=\"form-control grouponcode\"\n" +
    "                           required/>\n" +
    "                  </div>\n" +
    "                  <div class=\"col-sm-4\">\n" +
    "                    <button class=\"btn btn-green btn-next btn-redeem\" type=submit>Redeem</button>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"more-info how-we-do basic-box\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3 class=\"col-sm-12 section-title text-center text-uppercase\">How green chef does dinner</h3>\n" +
    "      </div>\n" +
    "      <div class=\"row row-items\">\n" +
    "        <div class=\"col-sm-4 wrap-box\">\n" +
    "          <div class=\"box customize\">\n" +
    "            <div class=\"image\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/pick-preference@1x.dae80e96.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/pick-preference@2x.64eeb46a.jpg 2x\">\n" +
    "            </div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4 class=\"title text-uppercase\">Pick your preferences</h4>\n" +
    "                <p class=\"details\">Tell us how you like to eat. Vegan? Gluten&#45;Free? Paleo? No problem.</p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-4 wrap-box\">\n" +
    "          <div class=\"box deliver\">\n" +
    "            <div class=\"image\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@1x.c3955568.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/skip-the-store@2x.920802be.jpg 2x\">\n" +
    "            </div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4 class=\"title text-uppercase\">Skip the store</h4>\n" +
    "                <p class=\"details\">We&#8217;ll send fresh, organic, pre&#45;measured ingredients to your door.</p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-4 wrap-box\">\n" +
    "          <div class=\"box cook\">\n" +
    "            <div class=\"image\">\n" +
    "              <img src=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@1x.852921e2.jpg\" srcset=\"//cdn.greenchef.com/assets/Vegan/cook-share-enjoy@2x.fef1e1e6.jpg 2x\">\n" +
    "            </div>\n" +
    "            <div class=\"box-content-wrapper\">\n" +
    "              <div class=\"box-content\">\n" +
    "                <h4 class=\"title text-uppercase\">Cook, share &amp; enjoy</h4>\n" +
    "                  <p class=\"details\">Try new flavors and techniques. Dinner&#8217;s ready in just 30 minutes.</p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/coupon/holiday-landing.tpl.html","<script type=\"text/javascript\">\n" +
    "  WebFontConfig = {\n" +
    "    google: { families: [ 'PT+Mono::latin' ] }\n" +
    "  };\n" +
    "  (function() {\n" +
    "    var wf = document.createElement('script');\n" +
    "    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +\n" +
    "      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';\n" +
    "    wf.type = 'text/javascript';\n" +
    "    wf.async = 'true';\n" +
    "    var s = document.getElementsByTagName('script')[0];\n" +
    "    s.parentNode.insertBefore(wf, s);\n" +
    "  })();\n" +
    "</script>\n" +
    "\n" +
    "<div class=\"splash-home holiday-coupon\">\n" +
    "  <section class=\"splash-home-header-banner\">\n" +
    "    <div class=\"holiday-coupon-bg\"></div>\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-offset-4 col-md-offset-5 sign-up-form-wrap\">\n" +
    "          <div class=\"sign-up-form\">\n" +
    "            <!-- Sign up-->\n" +
    "            <form id=\"sign-up-form\" name=\"couponForm\"\n" +
    "                  ng-submit=\"submitCoupon(couponForm)\"\n" +
    "                  class=\"main-form\"\n" +
    "                  ng-class=\"couponSubmitted ? 'validate' : ''\"\n" +
    "                  novalidate>\n" +
    "              <h2 class=\"work-header header-signup upper\">Season's Eatings!</h2>\n" +
    "\n" +
    "              <p>We're excited to help you cook wholesome, delicious dinners at home. Just pick your preferences, and we'll send fresh, organic ingredients and nourishing, chef-crafted recipes right to your door.</p>\n" +
    "\n" +
    "              <p class=\"desktop-desc\">Your first week of 6 meals (3 dinners for 2 people) is absolutely <span>free!</span> You can skip future deliveries or cancel at any time before your weekly cutoff time, 12pm ET 7 days before your delivery date.</p>\n" +
    "\n" +
    "              <p class=\"mobile-desc\">Your first week of 6 meals (3 recipes for 2 people) is absolutely <span>free!</span></p>\n" +
    "\n" +
    "              <div class=\"clearfix\">\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label for=\"grouponcode\" class=\"upper\">Enter Coupon Code</label>\n" +
    "                  <input id=\"grouponcode\"\n" +
    "                         name=\"grouponcode\" ng-model='grouponCode'\n" +
    "                         class=\"form-control grouponcode\" ng-class=\"{'invalid-coupon-code': couponInvalid}\"\n" +
    "                         required/>\n" +
    "                  <label class=\"error upper\" ng-class=\"{'coupon-invalid': couponInvalid}\">&#42;please enter a valid coupon code</label>\n" +
    "                </div>\n" +
    "                <div class=\"form-group btn-redeem-wrapper\">\n" +
    "                  <button class=\"btn btn-green btn-next\" type=submit>Redeem</button>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"look-for-code\"></div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"more-info wrap-intro easy\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3 class=\"col-sm-12\">How we do dinner</h3>\n" +
    "      </div>\n" +
    "      <div class=\"row benefits\">\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"customize image\"></div>\n" +
    "          <h4>Pick your preferences</h4>\n" +
    "          <p>\n" +
    "            Vegetarian? Paleo? Gluten&#8209;Free? No problem.\n" +
    "            We've got a menu to suit your style.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"deliver image\"></div>\n" +
    "          <h4>Skip the store</h4>\n" +
    "          <p>\n" +
    "            Fresh, organic ingredients &amp; diverse recipes delivered weekly, but only when you want them.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 benefit\">\n" +
    "          <div class=\"cook image\"></div>\n" +
    "          <h4>Cook, share &amp; enjoy</h4>\n" +
    "          <p>\n" +
    "            Cook a dinner you'll feel great about in 30 minutes&mdash;and learn a trick or two along the way.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/coupon/livingsocial-landing.tpl.html","<div class='splash-home'>\n" +
    "  <gc-discount-banner></gc-discount-banner>\n" +
    "  <section class=\"splash-home-header-banner\">\n" +
    "    <div class=\"container\">\n" +
    "      <img class=\"splash-background\" src=\"//cdn.greenchef.com/assets/Photos/Home/Home_panel_0.f92c6a40.jpg\"/>\n" +
    "      <div class=\"row\">\n" +
    "\n" +
    "        <article class=\"col-sm-5\">\n" +
    "          <h2 class=\"title\">Deliciously simple.</h2>\n" +
    "          <div><img src=\"//cdn.greenchef.com/assets/usda-organic.2b2529ea.png\" alt=\"\" class=\"organic\"/>\n" +
    "            <p class=\"intro\">\n" +
    "              Fresh <strong>organic</strong> ingredients.<br/>\n" +
    "              <strong>Healthy</strong>, flavorful meals.<br/>\n" +
    "              Right at your <strong>doorstep</strong>.\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </article>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <div class=\"col-md-12 col-sm-12 sign-up-form\">\n" +
    "            <!-- Sign up-->\n" +
    "            <form id=\"sign-up-form\" name=\"couponForm\"\n" +
    "                  ng-submit=\"submitCoupon(couponForm)\"\n" +
    "                  class=\"form-horizontal main-form\"\n" +
    "                  ng-class=\"couponSubmitted ? 'validate' : ''\"\n" +
    "                  novalidate>\n" +
    "              <h2 class=\"work-header header-signup upper\">Welcome, Living Social customers!</h2>\n" +
    "              <div>\n" +
    "                <div ng-repeat=\"alert in alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "                  <button type=\"button\" class=\"close\" ng-click=\"closeAlert()\">x</button>\n" +
    "                  {{alert.msg}}\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <p>Thanks for signing up! We're excited to help you cook wholesome, delicious meals.<br/><br/>\n" +
    "\n" +
    "                Green Chef delivers fresh, organic ingredients and original, tasty recipes right to your door. You'll get weekly deliveries with all you need for 3 meals, customized to your preferences. It's easy to skip weeks whenever you don't want a delivery&mdash;just visit Your Account anytime before the weekly cutoff.</p>\n" +
    "              <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                  <label for=\"grouponcode\">Enter your code here</label>\n" +
    "                  <!--<label class='error' ng-show=\"couponSubmitted\">{{ getError(couponForm.grouponcode.$error) }}</label>-->\n" +
    "                  <input id=\"grouponcode\"\n" +
    "                         name=\"grouponcode\" ng-model='grouponCode'\n" +
    "                         class=\"form-control grouponcode\"\n" +
    "                         required/>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"form-group\">\n" +
    "                <div>\n" +
    "                  <button class=\"btn btn-green btn-next\" type=submit>Redeem</button>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"more-info\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <article class=\"col-sm-4 more-info-blurb\">\n" +
    "          <div class='measuring-cup home-icon'></div>\n" +
    "          <div class='title'><h2>Organic recipes,<br/>designed for you</h2></div>\n" +
    "          <p>Let us do the shopping and planning. We send you all you need to make 3&nbsp;chef-crafted meals each week:\n" +
    "            pre&#8209;measured, prepped ingredients with recipes catered to your preferences. </p>\n" +
    "\n" +
    "        </article>\n" +
    "        <article class=\"col-sm-4 more-info-blurb\">\n" +
    "          <div class='truck home-icon'></div>\n" +
    "          <div class='title'><h2>Convenient delivery</h2></div>\n" +
    "          <p>Delivered when and where you want it. Your ingredients come in a refrigerated box,\n" +
    "            so they stay fresh even if you're not home when the package arrives.</p>\n" +
    "\n" +
    "        </article>\n" +
    "        <article class=\"col-sm-4 more-info-blurb\">\n" +
    "          <div class='calendar home-icon'></div>\n" +
    "          <div class='title'><h2>No commitment</h2></div>\n" +
    "          <p>No minimum subscription. Skip any week, for any reason, with our easy account controls. </p>\n" +
    "\n" +
    "        </article>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/payment/payment.tpl.html","\n" +
    "<div class=\"hidden-xs\">\n" +
    "  <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2\" ng-class=\"alert.type\">\n" +
    "    <span ng-html-compile=\"alert.msg\"></span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"payment-wrapper\">\n" +
    "  <form class=\"v3-form\"\n" +
    "        name=\"paymentForm\" role=\"form\"\n" +
    "        ng-class=\"paymentSubmitted ? 'validate' : ''\"\n" +
    "        ng-submit=\"submitPayment(paymentForm)\"\n" +
    "        novalidate >\n" +
    "\n" +
    "    <div class=\"billing-and-password\">\n" +
    "      <!-- Billing Details -->\n" +
    "      <div class=\"billing\">\n" +
    "        <h2 class=\"section-header text-uppercase billing-header\">\n" +
    "          Billing Details\n" +
    "          <p class=\"text-uppercase\">\n" +
    "            <span class=\"lock-icon\"></span>\n" +
    "            <span>Secure checkout</span>\n" +
    "          </p>\n" +
    "        </h2>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group col-sm-12\" ng-class=\"{error: paymentForm.creditCardName.$invalid}\">\n" +
    "            <label>Name on Card</label>\n" +
    "            <input class=\"form-control\" type=\"text\" required ng-model=\"paymentInfo.name\" name=\"creditCardName\">\n" +
    "            <label class=\"error-msg upper\" ng-show=\"paymentSubmitted\">&#42;please enter a name</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group col-sm-12\" ng-class=\"{error: stripeCardNumberError}\">\n" +
    "            <label>Card Number</label>\n" +
    "            <div ng-hide=\"signUpInfo.isTestAccount\" class=\"stripe-element\" name=\"cardNumber\">\n" +
    "              <div class=\"card-number\"></div>\n" +
    "            </div>\n" +
    "            <input class=\"form-control\" type=\"text\" ng-show=\"signUpInfo.isTestAccount\" disabled placeholder=\"4242 4242 4242 4242\">\n" +
    "            <label class=\"error-msg upper\" ng-show=\"stripeCardNumberError\">&#42;please enter a valid card number</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group col-xs-6 col-sm-6\" ng-class=\"{error: stripeCardExpiryError}\">\n" +
    "            <label>Expiration Date</label>\n" +
    "\n" +
    "            <div ng-hide=\"signUpInfo.isTestAccount\" class=\"stripe-element\">\n" +
    "              <div class=\"card-expiry\"></div>\n" +
    "            </div>\n" +
    "            <input class=\"form-control\" type=\"text\" ng-show=\"signUpInfo.isTestAccount\" disabled placeholder=\"11 / 60\">\n" +
    "            <label class=\"error-msg upper\" ng-show=\"stripeCardExpiryError\">&#42;invalid expiration date</label>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group col-xs-5 col-sm-4 cvc\" ng-class=\"{error: stripeCardCvcError}\">\n" +
    "            <label>CVC\n" +
    "              <span id=\"cvc-code-tooltip\" data-toggle=\"tooltip\"\n" +
    "                    data-placement=\"auto\" class=\"about-tooltip cvc-code-tooltip\"\n" +
    "                    popover-placement=\"top\" popover=\"{{signupData.payment.cvcCodeTooltip}}\"></span>\n" +
    "            </label>\n" +
    "            <div ng-hide=\"signUpInfo.isTestAccount\" class=\"stripe-element\">\n" +
    "              <div class=\"card-cvc\"></div>\n" +
    "            </div>\n" +
    "            <input class=\"form-control\" type=\"text\" ng-show=\"signUpInfo.isTestAccount\" disabled placeholder=\"123\">\n" +
    "            <label class=\"error-msg upper\" ng-show=\"stripeCardCvcError\">&#42;invalid cvc</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group col-sm-12\">\n" +
    "            <div class=\"checkbox coupon-code\">\n" +
    "              <input type=\"checkbox\" id=\"i-have-code\" name='i-have-code' class=\"check-item\" ng-model=\"status.iHaveCode\" ng-change=\"couponCodeToggle()\"/>\n" +
    "              <label for=\"i-have-code\" class=\"i-have-code-label label-check-item\">I have a coupon code to enter</label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group col-sm-12 coupon-applied\" ng-show=\"status.iHaveCode\" ng-class=\"{error: invalidCouponCode}\">\n" +
    "            <label class=\"display-block\">enter coupon code (case sensitive)</label>\n" +
    "\n" +
    "            <div class=\"table-flex\" ng-hide=\"status.couponApplied\">\n" +
    "              <input class=\"form-control input-sm\" type=\"text\" id=\"coupon-code\" placeholder=\"\" name=\"couponCode\" ng-model=\"status.couponCode\">\n" +
    "              <button type=\"button\" class=\"btn btn-small btn-green btn-apply\" ng-click=\"applyCoupon()\">Apply</button>\n" +
    "            </div>\n" +
    "\n" +
    "            <label class=\"msg\" ng-show=\"invalidCouponCode\">&#42;please enter a valid coupon code</label>\n" +
    "            <div class=\"applied-wrapper\">\n" +
    "              <label class=\"applied\" ng-class=\"{show: status.couponApplied}\">coupon code applied!</label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Password -->\n" +
    "      <div class=\"password\">\n" +
    "        <h2 class=\"section-header text-uppercase\">Create a password</h2>\n" +
    "\n" +
    "        <div class=\"row email-row\">\n" +
    "          <div class=\"form-group col-sm-12\">\n" +
    "            <label class=\"display-block\">Email</label>\n" +
    "            <div class=\"table-flex\">\n" +
    "              <p class=\"info\">{{ signUpInfo.email }}</p>\n" +
    "              <button type=\"button\" class=\"btn btn-small btn-edit\" ng-show=\"isEditEmail\">Edit</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"edit-email row\" ng-show=\"isEditEmail\">\n" +
    "            <div class=\"form-group col-sm-12\">\n" +
    "              <div class=\"table-flex\">\n" +
    "                <input class=\"form-control\" type=\"text\" value=\"{{email}}\" >\n" +
    "                <button class=\"btn btn-green btn-continue\" ng-click=\"isEditEmail = false\">Continue</button>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group col-sm-12\">\n" +
    "              <label class=\"error-msg upper\">&#42;This email is already associated with a Green Chef account</label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row password-row\">\n" +
    "          <div class=\"form-group col-sm-12\" ng-class=\"{error: paymentForm.password.$invalid}\">\n" +
    "            <label>Choose a password</label>\n" +
    "            <input class=\"form-control input-sm\" type=\"password\" autocapitalize=\"none\" required ng-model=\"password\" name=\"password\">\n" +
    "\n" +
    "            <label class=\"error-msg upper\" ng-show=\"paymentSubmitted\">&#42;please enter a password</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"buttons-group visible-xs\" ng-show=\"!formSubmitting\">\n" +
    "            <button type=\"submit\" class=\"btn-place-order btn btn-green\">Complete order</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"buttons-group visible-xs clearfix\" ng-show=\"formSubmitting\">\n" +
    "          <div class=\"working-state text-uppercase\">\n" +
    "            <img class=\"spin-loader\" src=\"//cdn.greenchef.com/assets/Icons/spin_circle.f7fe4187.png\">\n" +
    "            <span>Working...</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <gc-signup2-order-summary show-shipping-address=\"showShippingAddress\"\n" +
    "        show-complete-button=\"showCompleteButton\"\n" +
    "        order=\"order\"\n" +
    "        invoice=\"invoice\"\n" +
    "        meal-type=\"mealType\"\n" +
    "        plan-info=\"planInfo\"\n" +
    "				change-first-delivery=\"changeFirstDelivery()\"\n" +
    "				order-future-terms=\"orderFutureTerms\"\n" +
    "        terms-signup-flow=\"termsSignupFlow\"\n" +
    "        form-submitting=\"formSubmitting\"\n" +
    "      ></gc-signup2-order-summary>\n" +
    "\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "  </form>\n" +
    "\n" +
    "  <div class=\"visible-xs\">\n" +
    "    <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2\" ng-class=\"alert.type\">\n" +
    "      <span ng-html-compile=\"alert.msg\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/preferences/change-serving-modal.tpl.html","<form class=\"v3-form\">\n" +
    "  <div class=\"close\" ng-click=\"closeModal()\"></div>\n" +
    "  <h2 class=\"title text-uppercase text-center\">change serving size</h2>\n" +
    "  <div class=\"form-group delivery-group\">\n" +
    "    <div class=\"select-group\">\n" +
    "      <div class=\"dropdown-list\">\n" +
    "        <select class=\"form-control btn-select\" ng-model=\"newOrder.numPeople\" ng-options=\"boxNum as ((boxNum/selectedMealType.numPeople)|formatBoxNum) for boxNum in servingSizeInBoxes\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <p class=\"note\">Each box contains {{selectedMealType.numRecipes}} dishes designed for {{selectedMealType.numPeople}} people.</p>\n" +
    "  <div class=\"text-center\">\n" +
    "    <button class=\"btn btn-general btn-green\" ng-click=\"closeModal(true)\">Continue</button>\n" +
    "  </div>\n" +
    "</form>\n" +
    "")

$templateCache.put("sign-up/shipping/delivery-window-modal.tpl.html","<form role=\"form\"\n" +
    "      class=\"form-horizontal\"\n" +
    "      name=\"deliveryWindowForm\"\n" +
    "      novalidate\n" +
    "      ng-submit=\"closeDeliveryModal(deliveryWindowForm)\">\n" +
    "\n" +
    "    <div class=\"delivery-window clearfix\">\n" +
    "        <h3 class=\"dialog-title\">Confirm your delivery day</h3>\n" +
    "        <p class=\"dialog-desc\">Your ZIP code has been updated and your delivery options have changed. Please choose another delivery day.</p>\n" +
    "\n" +
    "        <div class=\"col-md-12 col-sm-12\">\n" +
    "            <div class='form-group delivery-window-selector' ng-class=\"{error: form.deliveryDay.$invalid}\">\n" +
    "              <div class=\"dropdown-list\">\n" +
    "                <select id=\"delivery-window\" class=\"form-control btn-select\"\n" +
    "                        ng-model=\"order.deliveryWindow\" name=\"deliveryDay\"\n" +
    "                        ng-disabled=\"enableAutomaticDeliveryDayChoice\" required>\n" +
    "                    <option ng-repeat=\"day in shippingDates.availableDaysOfWeek\"\n" +
    "                            value=\"{{day}}\"\n" +
    "                            ng-selected=\"day == order.deliveryWindow\"\n" +
    "                            >{{day | capitalizeFirst }}s</option>\n" +
    "                </select>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"btn-wrapper\">\n" +
    "        <button class=\"btn btn-green btn-big\" type=\"submit\">Save Changes</button>\n" +
    "    </div>\n" +
    "</form>")

$templateCache.put("sign-up/shipping/shipping.tpl.html","<div class=\"inner-main-content shipping-wrapper\">\n" +
    "  <div class=\"hidden-xs\">\n" +
    "    <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2\" ng-class=\"alert.type\">\n" +
    "      <span ng-html-compile=\"alert.msg\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <form name=\"form\"\n" +
    "        class=\"v3-form shipping-form row\"\n" +
    "        ng-submit=\"submitShippingForm(form)\"\n" +
    "        ng-class=\"shippingSubmitted ? 'validate' : ''\"\n" +
    "        novalidate>\n" +
    "    <!-- shipping address -->\n" +
    "    <div class=\"col-sm-7\">\n" +
    "      <div class=\"block-content delivery-detail-block\">\n" +
    "        <h2 class=\"header text-uppercase\">Delivery Details</h2>\n" +
    "        <p class=\"subtitle\">Tell us when you want Green Chef</p>\n" +
    "        <div ng-include=\"deliveryDetailTemplate\"></div>\n" +
    "\n" +
    "        <gc-signup-delivery-details\n" +
    "        order=\"order\"\n" +
    "        enable-automatic-delivery-day-choice=\"enableAutomaticDeliveryDayChoice\",\n" +
    "        all-possible-shipping=\"allPossibleShipping\",\n" +
    "        shipping-dates=\"shippingDates\",\n" +
    "        next-shipping-dates=\"nextShippingDates.value\"\n" +
    "        ></gc-signup-delivery-details>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"block-content shipping-address-block\">\n" +
    "        <h2 class=\"header text-uppercase\">Shipping Address</h2>\n" +
    "\n" +
    "        <div class=\"row name-info\">\n" +
    "          <div class=\"form-group col-sm-6\" ng-class=\"{error: form.firstName.$invalid}\">\n" +
    "            <label for=\"firstName\">First Name</label>\n" +
    "            <input id=\"firstName\"\n" +
    "                   class=\"form-control\"\n" +
    "                   type=\"text\"\n" +
    "                   name=\"firstName\"\n" +
    "                   ng-model=\"order.firstName\"\n" +
    "                   ng-change=\"saveUserEnteredFields()\"\n" +
    "                   required>\n" +
    "            <label class=\"error-msg upper\">&#42;please enter a valid first name</label>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group col-sm-6\" ng-class=\"{error: form.lastName.$invalid}\">\n" +
    "            <label for=\"lastName\">Last Name</label>\n" +
    "            <input id=\"lastName\"\n" +
    "                   class=\"form-control\"\n" +
    "                   type=\"text\"\n" +
    "                   name=\"lastName\"\n" +
    "                   ng-model=\"order.lastName\"\n" +
    "                   ng-change=\"saveUserEnteredFields()\"\n" +
    "                   required>\n" +
    "            <label class=\"error-msg upper\">&#42;please enter a valid last name</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group address1 col-sm-12\" ng-class=\"{error: form.address.$invalid}\">\n" +
    "            <label for=\"address\">Address Line One</label>\n" +
    "            <input id=\"address\"\n" +
    "                   class=\"form-control\"\n" +
    "                   type=\"text\"\n" +
    "                   name=\"address\"\n" +
    "                   ng-model=\"order.addressLine1\"\n" +
    "                   typeahead=\"address.text for address in tryAutocompleteAddress($viewValue)\"\n" +
    "                   typeahead-on-select=\"populateOtherAddressFields($item, $model, $label)\"\n" +
    "                   autocomplete=\"off\"\n" +
    "                   ng-change=\"saveUserEnteredFields()\"\n" +
    "                   ng-disabled=\"signUpInfo.isTestAccount\"\n" +
    "                   required>\n" +
    "            <label class=\"error-msg upper\" ng-show=\"form.address.$error.required\">&#42;please enter a valid address line one</label>\n" +
    "            <label class=\"error-msg upper\" ng-show=\"form.address.$error.invalid\">&#42;Invalid. Please verify the street address.</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group address1 col-sm-12\" ng-class=\"{error: form.address2.$invalid}\">\n" +
    "            <label for=\"address2\">Address Line Two</label>\n" +
    "            <input id=\"address2\"\n" +
    "                   name=\"address2\"\n" +
    "                   class=\"form-control\"\n" +
    "                   type=\"text\"\n" +
    "                   ng-model=\"order.addressLine2\"\n" +
    "                   ng-change=\"saveUserEnteredFields()\"\n" +
    "                   ng-disabled=\"signUpInfo.isTestAccount\"\n" +
    "                   autocomplete=\"off\">\n" +
    "            <label class=\"error-msg upper\" ng-show=\"form.address2.$error.invalid\">&#42;Invalid. Please verify the apt/suite.</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group city col-sm-8\" ng-class=\"{error: form.city.$invalid}\">\n" +
    "            <label for=\"city\">City</label>\n" +
    "            <input id=\"city\"\n" +
    "                   class=\"form-control\"\n" +
    "                   type=\"text\"\n" +
    "                   name=\"city\"\n" +
    "                   ng-model=\"order.city\"\n" +
    "                   autocomplete=\"off\"\n" +
    "                   ng-change=\"saveUserEnteredFields()\"\n" +
    "                   required>\n" +
    "            <label class=\"error-msg upper\" ng-show=\"form.city.$error.required\"}>&#42;please enter a valid city</label>\n" +
    "            <label class=\"error-msg upper\" ng-show=\"form.city.$error.invalid\"}>&#42;Invalid. Please verify the city.</label>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group state-info col-sm-4\" ng-class=\"{error: form.state.$invalid}\">\n" +
    "            <div class=\"select-group\">\n" +
    "              <label>State</label>\n" +
    "              <div class=\"dropdown-list\">\n" +
    "                <select class=\"form-control btn-select\"\n" +
    "                        ng-options=\"s for s in states\"\n" +
    "                        ng-model=\"order.state\"\n" +
    "                        name=\"state\"\n" +
    "                        ng-change=\"saveUserEnteredFields()\"\n" +
    "                        required>\n" +
    "                </select>\n" +
    "              </div>\n" +
    "              <label class=\"error-msg upper\" ng-show=\"form.state.$error.required\">&#42;please enter a valid state</label>\n" +
    "              <label class=\"error-msg upper\" ng-show=\"form.state.$error.invalid\">&#42;Invalid. Please verify the state.</label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group zipcode col-sm-8\" ng-class=\"{error: form.zipcode.$invalid}\">\n" +
    "            <label for=\"zipcode\">Zip code</label>\n" +
    "            <input id=\"zipcode\" class=\"form-control\" type=\"text\" name=\"zipcode\"\n" +
    "                   ng-model=\"order.zipCode\"\n" +
    "                   ng-pattern=\"/^\\d{5}$/\"\n" +
    "                   ng-change=\"updateAvailableDates()\"\n" +
    "                   maxlength=\"5\" autocomplete=\"off\"\n" +
    "                   ng-blur=\"form.zipcode.$pristine ? return : zipBlur()\"\n" +
    "                   required>\n" +
    "            <label class=\"error-msg upper\" ng-show=\"form.zipcode.$error.required\">&#42;please enter a valid 5 digit zip code</label>\n" +
    "            <label class=\"error-msg upper\" ng-show=\"form.zipcode.$error.invalid\">&#42;Invalid. Please verify the zip code.</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group phone-number col-sm-8\" ng-class=\"{error: form.phone.$invalid}\">\n" +
    "            <label for=\"phone\">Phone Number</label>\n" +
    "            <input id=\"phone\"\n" +
    "                   class=\"form-control\"\n" +
    "                   type=\"text\"\n" +
    "                   name=\"phone\"\n" +
    "                   ng-model=\"order.phoneNumber\"\n" +
    "                   ng-change=\"saveUserEnteredFields()\"\n" +
    "                   ng-disabled=\"signUpInfo.isTestAccount\"\n" +
    "                   required>\n" +
    "            <label class=\"error-msg upper\">&#42;please enter a valid phone number</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row visible-mb\">\n" +
    "        <div class=\"form-action col-sm-8 col-sm-offset-4\" ng-show=\"!formSubmitting\">\n" +
    "          <button type=\"submit\" class=\"btn btn-general btn-green\">Continue</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- loading UI -->\n" +
    "        <div class=\"form-action clearfix col-sm-12\" ng-show=\"formSubmitting\">\n" +
    "          <div class=\"working-state text-uppercase\">\n" +
    "            <img class=\"spin-loader\" src=\"//cdn.greenchef.com/assets/Icons/spin_circle.f7fe4187.png\">\n" +
    "            <span>Working...</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- end of shipping address -->\n" +
    "\n" +
    "    <div class=\"col-sm-5 summary-wrapper hidden-xs\">\n" +
    "      <div class=\"block-content\">\n" +
    "        <gc-signup2-order-summary show-shipping-address=\"showShippingAddress\"\n" +
    "            show-num-box-link=\"showNumBoxLink\"\n" +
    "            show-complete-button=\"showCompleteButton\"\n" +
    "        		order=\"order\"\n" +
    "        		invoice=\"invoice\"\n" +
    "        		meal-type=\"mealType\"\n" +
    "            plan-info=\"planInfo\"\n" +
    "						order-future-terms=\"orderFutureTerms\"\n" +
    "            terms-signup-flow=\"termsSignupFlow\"\n" +
    "						change-first-delivery=\"changeFirstDelivery()\"\n" +
    "            change-serving-size=\"changeServingSize()\"\n" +
    "            get-box-num=\"getBoxNum()\"\n" +
    "            form-submitting=\"formSubmitting\"\n" +
    "          ></gc-signup2-order-summary>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div class=\"visible-xs\">\n" +
    "    <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2\" ng-class=\"alert.type\">\n" +
    "      <span ng-html-compile=\"alert.msg\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/thankyou/thank-you.tpl.html","<div class=\"thank-you-wrapper inner-main-content referral-program text-center\">\n" +
    "  <div class=\"content-header\">\n" +
    "    <h2 class=\"header\">Thank you for joining!</h2>\n" +
    "  </div>\n" +
    "\n" +
    "  <p class=\"info\">Your first order of Green Chef is scheduled to arrive on:\n" +
    "    <span class=\"info-order-time\">{{ order.firstDeliveryDate | amDateFormat:\"dddd, MMMM Do\" }}</span>\n" +
    "  </p>\n" +
    "\n" +
    "  <p class=\"intro\">\n" +
    "    <a href class=\"intro-page desktop-account-nav text-uppercase\" ng-click=\"gotoMyAccount()\">your account</a>\n" +
    "    <a href class=\"intro-page mobile-account-nav text-uppercase\" ng-click=\"gotoMyAccount(true)\">your account</a>\n" +
    "    Manage your dietary preferences, delivery schedule, and more!\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"referral-share-link\">\n" +
    "    <h4 class=\"text-green\">Share with friends &amp; get $25!</h4>\n" +
    "    <p class=\"intro\">When someone joins Green Chef via your unique link, they get 4 free meals with their first order. After they place a second order, you get $25 off your next box of Green Chef.</p>\n" +
    "\n" +
    "    <p class=\"intro text-uppercase text-green label-share-link\">share your link now</p>\n" +
    "\n" +
    "    <div class=\"link-group\">\n" +
    "      <input class=\"link-box\"\n" +
    "         onClick=\"this.setSelectionRange(0, this.value.length)\"\n" +
    "         value=\"{{linkData.linkUrl}}\"\n" +
    "         id=\"referralLink\" readonly/>\n" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-green\"\n" +
    "              ng-click=\"copyReferralLink()\"\n" +
    "              ng-if=\"!isSafariLessThanTen\">Copy Link</button>\n" +
    "      <button type=\"button\" class=\"btn btn-green\"\n" +
    "              ng-if=\"isSafariLessThanTen\"\n" +
    "              popover-trigger=\"mouseenter\"\n" +
    "              popover=\"Please press Ctrl+C to copy link\">Copy Link</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"share-buttons share-buttons-desktop hidden-xs clearfix\">\n" +
    "      <a class=\"share-btn facebook\" ng-click=\"shareFacebook()\">Share</a>\n" +
    "      <a class=\"share-btn twitter\" ng-click=\"shareTwitter()\">Tweet</a>\n" +
    "      <a class=\"share-btn google\" ng-click=\"shareGoogle()\">Share</a>\n" +
    "      <a class=\"share-btn email\" ng-click=\"shareEmail()\">Email</a>\n" +
    "      <a class=\"share-btn text\" ng-click=\"shareText()\">Text Message</a>\n" +
    "      <a class=\"share-btn nextdoor\"\n" +
    "          href=\"http://nextdoor.com\"\n" +
    "          target=\"_blank\"\n" +
    "          ng-click=\"goToNextdoor()\">Nextdoor</a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"share-buttons share-buttons-mobile visible-xs-block clearfix\">\n" +
    "      <a class=\"share-btn facebook\" ng-click=\"shareFacebook()\">Facebook</a>\n" +
    "      <a class=\"share-btn twitter\" ng-click=\"shareTwitter()\">Twitter</a>\n" +
    "      <a class=\"share-btn google\" ng-click=\"shareGoogle()\">Google+</a>\n" +
    "      <a class=\"share-btn email\" ng-click=\"shareEmail()\">Email</a>\n" +
    "      <a class=\"share-btn text\" ng-click=\"shareText()\">Text Message</a>\n" +
    "      <a class=\"share-btn nextdoor\"\n" +
    "          href=\"http://nextdoor.com\"\n" +
    "          target=\"_blank\"\n" +
    "          ng-click=\"goToNextdoor()\">Nextdoor</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"hear-about-us\" ng-if=\"showHearAboutUs === 'on'\">\n" +
    "    <h4 class=\"text-green\">How did you hear about us?</h4>\n" +
    "    <div class=\"wrapper-answers\">\n" +
    "      <form class=\"survey-form form-inline clearfix\"\n" +
    "        name=\"formSurvey\"\n" +
    "        ng-submit=\"submitSurvey()\">\n" +
    "        <ul class=\"list-answers\">\n" +
    "          <li ng-repeat=\"survey in surveyData track by $index\" class=\"option-feedback\">\n" +
    "            <div class=\"radio\">\n" +
    "              <label>\n" +
    "                <input type=\"radio\" name=\"rdoAnswer\" ng-model=\"formFeedback.feedbackValue\" value=\"{{survey}}\" ng-click=\"selectOption()\">\n" +
    "                {{survey}}\n" +
    "                <input type=\"text\" class=\"other-answer\" ng-show=\"$last\" ng-model=\"formFeedback.feedbackValueOther\" ng-focus=\"focused()\" focus-me=\"{{focusedMe}}\">\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "        <button type=\"submit\" class=\"btn btn-green\" ng-disabled=\"checkRadioIsSelected()\">Submit</button>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <p class=\"text-green response-feedback\" ng-if=\"responseFeedback\">Thank you for your feedback!</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/summary/first-delivery-modal.tpl.html","<form role=\"form\"\n" +
    "      class=\"form-horizontal\"\n" +
    "      name=\"firstDeliveryForm\"\n" +
    "      novalidate\n" +
    "      ng-submit=\"selectedFirstDelivery(newFirstDeliveryDate)\">\n" +
    "\n" +
    "    <div class=\"close\" ng-click=\"closeDeliveryModal()\"></div>\n" +
    "\n" +
    "    <div class=\"first-delivery clearfix\">\n" +
    "        <h3 class=\"dialog-title\">Choose Your First Delivery</h3>\n" +
    "\n" +
    "        <div class=\"col-md-12 col-sm-12\">\n" +
    "            <div class='form-group first-delivery-selector'>\n" +
    "                <div class=\"dropdown-list\">\n" +
    "                  <select id=\"state\" name=\"state\" data-size=\"7\" class=\"selectpicker form-control btn-select\"\n" +
    "                          ng-model=\"newFirstDeliveryDate\"\n" +
    "                          ng-options=\"d.value as d.text for d in nextShippingDates.value\">\n" +
    "                  </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"btn-wrapper\">\n" +
    "        <button class=\"btn btn-green btn-big\"\n" +
    "                type=\"button\" ng-click=\"selectedFirstDelivery(newFirstDeliveryDate)\">Save Changes</button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "")

$templateCache.put("sign-up/welcome/bait-and-hurray.tpl.html","<div class=\"body\">\n" +
    "  <div class=\"header-banner\">\n" +
    "    <div class=\"caption-overlay\">\n" +
    "      <div class=\"caption text-center\">\n" +
    "        <p class=\"bonus text-uppercase\">{{deal}}</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"title text-center text-uppercase\">for our {{cityName}} green chefs</div>\n" +
    "    <p class=\"info\">Did you know there are a lot of happy Green Chef customers in your area?</p>\n" +
    "    <p class=\"info\">Because the people of <span class=\"city-name\">{{cityName}}</span> have given us such a warm welcome, we’re offering everyone in <span class=\"city-name\">{{cityName}}</span> an extra sweet deal: <span class=\"emphasic\">{{dealDescription}}!</span> Just click on the button below:</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"form-group col-sm-12 get-meals\">\n" +
    "      <button class=\"btn btn-get-meals btn-green\" track-click event-name=\"get_my_meals\" ng-click=\"cancelModal()\">GET MY MEALS</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/welcome/welcome.tpl.html","<div class=\"inner-main-content welcome-wrapper\">\n" +
    "  <div class=\"content-header\">\n" +
    "    <div ng-if=\"!swapWelcomePreferencesTemplate\">\n" +
    "      <h2 class=\"header text-uppercase text-center\">Let&#8217;s get started.</h2>\n" +
    "      <p class=\"intro text-center\">Delicious ingredients, chef-crafted recipes, delivered weekly.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"swap-welcome-preferences\" ng-if=\"swapWelcomePreferencesTemplate\">\n" +
    "      <h2 class=\"header text-uppercase text-center\">Great&excl; Now on to delivery</h2>\n" +
    "      <p class=\"intro text-center\">Green Chef delivers to almost everywhere in the continental United States. Enter your email and ZIP code to confirm we&#8217;re in your neighborhood.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"hidden-xs\">\n" +
    "    <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2 welcome-alert\" ng-class=\"alert.type\">\n" +
    "      <span ng-html-compile=\"alert.msg\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <form class=\"welcome-form form-inline clearfix v3-form\"\n" +
    "        name=\"form\"\n" +
    "        ng-submit=\"submitStart(form)\"\n" +
    "        ng-class=\"startSubmitted ? 'validate' : ''\"\n" +
    "        novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{error: form.email.$invalid}\">\n" +
    "      <label for=\"email\">Email</label>\n" +
    "      <input id=\"email\"\n" +
    "             class=\"form-control\"\n" +
    "             type=\"email\"\n" +
    "             name=\"email\"\n" +
    "             ng-model=\"signUpInfo.email\"\n" +
    "             ng-change=\"saveUserEnteredFields()\"\n" +
    "             required>\n" +
    "      <label class=\"error-msg upper\">&#42;please enter a valid email</label>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{error: form.zipCode.$invalid}\">\n" +
    "      <label for=\"zip-code\">Zip code</label>\n" +
    "      <!--zipcode type is text to handle values starting with 0 which gets auto trimmed-->\n" +
    "      <input id=\"zip-code\"\n" +
    "             class=\"form-control\"\n" +
    "             type=\"text\" name=\"zipCode\"\n" +
    "             ng-model=\"signUpInfo.zipCode\"\n" +
    "             ng-pattern=\"/^\\d{5}$/\"\n" +
    "             ng-change=\"saveUserEnteredFields()\"\n" +
    "             required>\n" +
    "      <label class=\"error-msg upper\">&#42;please enter a valid zip code</label>\n" +
    "    </div>\n" +
    "    <div class=\"form-action\">\n" +
    "      <button type=\"submit\" ng-show=\"!formSubmitting\" class=\"btn btn-general btn-green\">Continue</button>\n" +
    "\n" +
    "      <!-- loading UI -->\n" +
    "      <div class=\"clearfix\" ng-show=\"formSubmitting\" >\n" +
    "        <div class=\"working-state text-uppercase\">\n" +
    "          <img class=\"spin-loader\" src=\"//cdn.greenchef.com/assets/Icons/spin_circle.f7fe4187.png\">\n" +
    "          <span>Working...</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <p class=\"notice text-center\">By clicking CONTINUE, you confirm you have read and consent to our <a ui-sref='terms({version: {{LegalUpdate.currentChange}}})'>Terms of Service</a> and <a ui-sref='privacy({version: {{LegalUpdate.currentChange}}})'>Privacy Policy</a>.</p>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "\n" +
    "  <div class=\"visible-xs\">\n" +
    "    <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2 welcome-alert\" ng-class=\"alert.type\">\n" +
    "      <span ng-html-compile=\"alert.msg\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"more-info-wrapper row\" ng-if=\"!swapWelcomePreferencesTemplate\">\n" +
    "    <div class=\"col-sm-4 more-info-content\">\n" +
    "      <p class=\"header text-uppercase\">your menu</p>\n" +
    "      <p class=\"content\">Pick the menu that suits your lifestyle. Gluten-free? Vegan? Paleo? We've got it.</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4 more-info-content\">\n" +
    "      <p class=\"header text-uppercase\">convenient delivery</p>\n" +
    "      <p class=\"content\">Our ingredients are carefully packed in an insulated box, so there's no need to be home right when it arrives.</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4 more-info-content\">\n" +
    "      <p class=\"header text-uppercase\">flexibility</p>\n" +
    "      <p class=\"content\">Skip weeks or cancel when you want for any reason.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/directives/calendar-nav/calendar-nav.tpl.html","<div class=\"calendar-nav self-container\"\n" +
    "  spark-scroll=\"{\n" +
    "    'topTop-56': { downAddClass: 'stick', upRemoveClass: 'stick' }\n" +
    "    }\">\n" +
    "  <div class=\"date-selector\">\n" +
    "    <div class=\"date\"\n" +
    "      ng-click=\"vm.select($index); $event.stopPropagation();\"\n" +
    "      ng-class=\"{ 'border-right': !$last, 'border-left': $first, 'selected-date': $index === vm.selectedIndex }\"\n" +
    "      ng-repeat=\"cart in vm.displayCarts\">\n" +
    "\n" +
    "        <div class=\"date-strings\">\n" +
    "          <span class=\"long-format\"\n" +
    "            ng-if=\"cart.singleDate || cart.sameDate\">\n" +
    "            {{cart.dates[0].format('dddd, MMM D') | uppercase}}\n" +
    "          </span>\n" +
    "          <span class=\"short-format\"\n" +
    "            ng-if=\"cart.singleDate || cart.sameDate\">\n" +
    "            {{cart.dates[0].format('MMM D') | uppercase}}\n" +
    "          </span>\n" +
    "          <span ng-if=\"!cart.singleDate && !cart.sameDate\"\n" +
    "            ng-repeat=\"date in cart.dates\">\n" +
    "            <span ng-if=\"$first\">\n" +
    "              {{date.format('MMM D') | uppercase}}\n" +
    "            </span>\n" +
    "            <span class=\"extended-dates\"\n" +
    "              ng-if=\"!$first\">\n" +
    "              , {{date.format('D')}}\n" +
    "            </span>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"status\">\n" +
    "          <div class=\"status-icon\"\n" +
    "            ng-class=\"[ cart.status.toLowerCase(), cart.selected ]\"></div>\n" +
    "          <div class=\"status-text\" ng-if=\"cart.status === 'DELIVERY'\">Scheduled</div>\n" +
    "          <div class=\"status-text\" ng-if=\"cart.status === 'SKIP'\">Skipped</div>\n" +
    "          <div class=\"pull-right date-length\"\n" +
    "            ng-if=\"cart.dates.length > 1\">x{{cart.dates.length}}</div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <gc-calendar-ui carts=\"vm.carts\" selected-delivery-date=\"{{ vm.selectedDeliveryDate }}\"\n" +
    "                  select-cart-for-date=\"vm.selectCartForDate($event)\"></gc-calendar-ui>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/directives/address-form/address-form.tpl.html","<div class=\"pull-right cancel-collapse\" ng-click=\"vm.clearAddressForm()\"></div>\n" +
    "\n" +
    "<form role=\"form\"\n" +
    "      class=\"v3-form full-address-form\"\n" +
    "      name=\"vm.orderForm\"\n" +
    "      novalidate\n" +
    "      ng-class=\"{ validate: vm.formSubmitted }\"\n" +
    "      ng-submit=\"vm.submitAddress(vm.orderForm)\">\n" +
    "\n" +
    "  <div>\n" +
    "    <div ng-repeat=\"alert in vm.alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"vm.closeAlert()\">x</button>\n" +
    "      {{alert.msg}}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-group\" ng-class=\"{error: vm.orderForm.labelName.$invalid}\">\n" +
    "    <label for=\"labelName\">Name</label>\n" +
    "    <input id=\"labelName\" name=\"labelName\" class=\"form-control\" ng-model=\"vm.address.labelName\" required/>\n" +
    "    <label class=\"error-msg upper\" ng-show=\"vm.orderForm.labelName.$error.required\">\n" +
    "      &#42;please enter a valid name</label>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\" ng-class=\"{error: vm.orderForm.address.$invalid}\">\n" +
    "    <label for=\"address\">Street Address</label>\n" +
    "    <input id=\"address\" placeholder=\"Street address, company name, c/o\"\n" +
    "           name=\"address\" class=\"form-control\"\n" +
    "           typeahead=\"address.text for address in vm.tryAutocompleteAddress($viewValue)\"\n" +
    "           typeahead-on-select=\"vm.populateOtherAddressFields($item, $model, $label)\"\n" +
    "           ng-model=\"vm.address.addressLine1\" autocomplete=\"off\" required/>\n" +
    "    <label class=\"error-msg upper\" ng-show=\"vm.orderForm.address.$error.required\">\n" +
    "      &#42;please enter a valid address line one</label>\n" +
    "    <label class=\"error-msg upper\" ng-show=\"vm.orderForm.address.$error.invalid\">\n" +
    "      &#42;Invalid. Please verify the street address.</label>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\" ng-class=\"{error: vm.orderForm.address2.$invalid}\">\n" +
    "    <label for=\"address2\">Suit/Apt (Optional)</label>\n" +
    "    <input id=\"address2\" placeholder=\"Apartment, suite, unit, building, floor, etc.\"\n" +
    "           name=\"address2\" class=\"form-control\" ng-model=\"vm.address.addressLine2\"/>\n" +
    "    <label class=\"error-msg upper\" ng-show=\"vm.orderForm.address2.$error.invalid\">\n" +
    "      &#42;Invalid. Please verify the apt/suite.</label>\n" +
    "  </div>\n" +
    "  <div class=\"address-form-city-container\">\n" +
    "    <div class=\"form-group\" ng-class=\"{error: vm.orderForm.city.$invalid}\">\n" +
    "      <label for=\"city\">City</label>\n" +
    "      <input id=\"city\" name=\"city\" class=\"form-control\"\n" +
    "             ng-model=\"vm.address.city\" autocomplete=\"off\" required/>\n" +
    "      <label class=\"error-msg upper\" ng-show=\"vm.orderForm.city.$error.required\">\n" +
    "        &#42;please enter a valid city</label>\n" +
    "      <label class=\"error-msg upper\" ng-show=\"vm.orderForm.city.$error.invalid\">\n" +
    "        &#42;Invalid. Please verify the city.</label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"address-form-state-container\">\n" +
    "    <div class=\"form-group\" ng-class=\"{error: vm.orderForm.state.$invalid}\">\n" +
    "      <div class=\"select-group\">\n" +
    "        <label for=\"state\">State</label>\n" +
    "        <div class=\"dropdown-list\">\n" +
    "          <select id=\"state\" name=\"state\" data-size=\"7\" class=\"selectpicker form-control btn-select\"\n" +
    "                  ng-model=\"vm.address.state\"\n" +
    "                  required>\n" +
    "            <option value=\"AL\">AL</option>\n" +
    "            <option value=\"AK\">AK</option>\n" +
    "            <option value=\"AZ\">AZ</option>\n" +
    "            <option value=\"AR\">AR</option>\n" +
    "            <option value=\"CA\">CA</option>\n" +
    "            <option value=\"CO\">CO</option>\n" +
    "            <option value=\"CT\">CT</option>\n" +
    "            <option value=\"DE\">DE</option>\n" +
    "            <option value=\"DC\">DC</option>\n" +
    "            <option value=\"FL\">FL</option>\n" +
    "            <option value=\"GA\">GA</option>\n" +
    "            <option value=\"HI\">HI</option>\n" +
    "            <option value=\"ID\">ID</option>\n" +
    "            <option value=\"IL\">IL</option>\n" +
    "            <option value=\"IN\">IN</option>\n" +
    "            <option value=\"IA\">IA</option>\n" +
    "            <option value=\"KS\">KS</option>\n" +
    "            <option value=\"KY\">KY</option>\n" +
    "            <option value=\"LA\">LA</option>\n" +
    "            <option value=\"ME\">ME</option>\n" +
    "            <option value=\"MD\">MD</option>\n" +
    "            <option value=\"MA\">MA</option>\n" +
    "            <option value=\"MI\">MI</option>\n" +
    "            <option value=\"MN\">MN</option>\n" +
    "            <option value=\"MS\">MS</option>\n" +
    "            <option value=\"MO\">MO</option>\n" +
    "            <option value=\"MT\">MT</option>\n" +
    "            <option value=\"NE\">NE</option>\n" +
    "            <option value=\"NV\">NV</option>\n" +
    "            <option value=\"NH\">NH</option>\n" +
    "            <option value=\"NJ\">NJ</option>\n" +
    "            <option value=\"NM\">NM</option>\n" +
    "            <option value=\"NY\">NY</option>\n" +
    "            <option value=\"NC\">NC</option>\n" +
    "            <option value=\"ND\">ND</option>\n" +
    "            <option value=\"OH\">OH</option>\n" +
    "            <option value=\"OK\">OK</option>\n" +
    "            <option value=\"OR\">OR</option>\n" +
    "            <option value=\"PA\">PA</option>\n" +
    "            <option value=\"PR\">PR</option>\n" +
    "            <option value=\"RI\">RI</option>\n" +
    "            <option value=\"SC\">SC</option>\n" +
    "            <option value=\"SD\">SD</option>\n" +
    "            <option value=\"TN\">TN</option>\n" +
    "            <option value=\"TX\">TX</option>\n" +
    "            <option value=\"UT\">UT</option>\n" +
    "            <option value=\"VT\">VT</option>\n" +
    "            <option value=\"VA\">VA</option>\n" +
    "            <option value=\"WA\">WA</option>\n" +
    "            <option value=\"WV\">WV</option>\n" +
    "            <option value=\"WI\">WI</option>\n" +
    "            <option value=\"WY\">WY</option>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "        <label class=\"error-msg upper\" ng-show=\"vm.orderForm.state.$error.required\">\n" +
    "          &#42;please enter a valid state</label>\n" +
    "        <label class=\"error-msg upper\" ng-show=\"vm.orderForm.state.$error.invalid\">\n" +
    "          &#42;Invalid. Please verify the state.</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"address-form-zip-code-container\">\n" +
    "    <div class=\"form-group\" ng-class=\"{error: vm.orderForm.zipcode.$invalid}\">\n" +
    "      <label for=\"zip-code-order\">ZIP</label>\n" +
    "      <input id=\"zip-code-order\" name=\"zipcode\" class=\"form-control\"\n" +
    "             placeholder=\"xxxxx\"\n" +
    "             type=\"text\"\n" +
    "             ng-model=\"vm.address.zipCode\" ng-pattern=\"/^\\d{5}$/\" autocomplete=\"off\" required/>\n" +
    "      <label class=\"error-msg upper\" ng-show=\"vm.orderForm.zipcode.$error.required\">\n" +
    "        &#42;please enter a valid 5 digit zip code</label>\n" +
    "      <label class=\"error-msg upper\" ng-show=\"vm.orderForm.zipcode.$error.invalid\">\n" +
    "        &#42;Invalid. Please verify the zip code.</label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"address-form-address-type-container\">\n" +
    "    <div class=\"form-group\" ng-class=\"{error: vm.orderForm.addressType.$invalid}\">\n" +
    "      <div class=\"select-group\">\n" +
    "        <label for=\"address-type\">Address Type<span id=\"address-type-tooltip\" class=\"about-tooltip\"\n" +
    "                                                    popover-append-to-body=\"true\"\n" +
    "                                                    popover-placement=\"top\"\n" +
    "                                                    popover=\"Select your address type so we can choose the best delivery method for your meals\"></span></label>\n" +
    "        <div class=\"dropdown-list\">\n" +
    "          <select id=\"address-type\" class=\"selectpicker form-control btn-select\" ng-model=\"vm.address.addressType\"\n" +
    "                  name=\"addressType\" required>\n" +
    "            <option value=\"home\">Residential</option>\n" +
    "            <option value=\"commercial\">Commercial</option>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "        <label class=\"error-msg upper\" ng-show=\"vm.orderForm.addressType.$error.required\">\n" +
    "          &#42;please enter a valid address type</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"address-form-phone-container\">\n" +
    "    <div class=\"form-group\" ng-class=\"{error: vm.orderForm.phone.$invalid}\">\n" +
    "      <label for=\"phone\">Phone Number</label>\n" +
    "      <input id=\"phone\" name=\"phone\" class=\"form-control\"\n" +
    "             ng-model=\"vm.address.phoneNumber\"\n" +
    "             placeholder=\"xxx-xxx-xxxx\"\n" +
    "             required/>\n" +
    "      <label class=\"error-msg upper\">&#42;please enter a valid phone number</label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"btn-wrapper\">\n" +
    "    <button class=\"btn-default-green btn-action-white\"\n" +
    "            type=\"submit\" ng-show=\"!vm.orderForm.$submitted\">Add Address\n" +
    "    </button>\n" +
    "    <loading-state ng-show=\"vm.orderForm.$submitted\"></loading-state>\n" +
    "    <button class=\"btn-default-green btn-action-white\"\n" +
    "            type=\"button\"\n" +
    "            ng-show=\"!vm.orderForm.$submitted\"\n" +
    "            ng-click=\"vm.clearAddressForm()\">Cancel\n" +
    "    </button>\n" +
    "  </div>\n" +
    "\n" +
    "</form>")

$templateCache.put("account/directives/calendar-ui/calendar-ui.tpl.html","<div class=\"calendar-btn\" ng-click=\"vm.hideCalendar = !vm.hideCalendar\" ng-class=\"{active: !vm.hideCalendar}\" track-click event-name=\"calendar-icon\">\n" +
    "  <span class=\"calendar-icon\"></span>\n" +
    "</div>\n" +
    "<div class=\"calendar-container\"\n" +
    "  ng-class=\"{\n" +
    "    'one-month': vm.calendarData.length === 1,\n" +
    "    'two-months': vm.calendarData.length === 2,\n" +
    "    'three-months': vm.calendarData.length === 3\n" +
    "    }\"\n" +
    "     collapse=\"vm.hideCalendar\">\n" +
    "  <div class=\"month\"\n" +
    "    ng-repeat=\"month in vm.calendarData\">\n" +
    "    <table>\n" +
    "      <caption>{{month.title}}</caption>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>MON</td>\n" +
    "          <td>TUE</td>\n" +
    "          <td>WED</td>\n" +
    "          <td>THU</td>\n" +
    "          <td>FRI</td>\n" +
    "          <td>SAT</td>\n" +
    "          <td>SUN</td>\n" +
    "        </tr>\n" +
    "        <tr ng-class=\"{ 'current-week': week.currentWeek }\"\n" +
    "          ng-repeat=\"week in month.dates\" track-click event-name=\"week-calendar\">\n" +
    "          <td\n" +
    "            ng-class=\"{ 'leading-day': day.leadingDay || day.trailingDay }\"\n" +
    "            ng-repeat=\"day in week.days\"\n" +
    "            ng-click=\"vm.selectDate(day); $event.stopPropagation();\">\n" +
    "            <div class=\"calendar-day\">\n" +
    "              <div class=\"day-of-month\">{{day.dayOfMonth}}</div>\n" +
    "              <div class=\"status-icon\"\n" +
    "                   ng-if=\"day.status\"\n" +
    "                   ng-hide=\"day.leadingDay || day.trailingDay\"\n" +
    "                   ng-class=\"day.status.toLowerCase()\"></div>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "    <div class=\"legend\"\n" +
    "      ng-if=\"$last\">\n" +
    "      <div class=\"status-icon skip\"></div>\n" +
    "      <div class=\"status-name\">Skipped</div>\n" +
    "      <div class=\"status-icon delivery\"></div>\n" +
    "      <div class=\"status-name\">Scheduled</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/directives/cart-detail/cart-detail.tpl.html","<!-- Order Delivery -->\n" +
    "<div class=\"order-delivery\">\n" +
    "  <div class=\"self-container\">\n" +
    "    <div class=\"order-delivery-overview\">\n" +
    "      <div class=\"order-delivery-overview-detail\">\n" +
    "        <p class=\"menu-plan\">\n" +
    "          <span class=\"menu-name\">\n" +
    "            {{ vm.planName }}\n" +
    "          </span>\n" +
    "          Menu\n" +
    "        </p>\n" +
    "        <p class=\"menu-date\">\n" +
    "          {{ vm.upcomingCart.deliveryDate | date:'EEEE, MMMM d'}}\n" +
    "        </p>\n" +
    "\n" +
    "        <div class=\"delivery-cart-modification\">\n" +
    "          <p class=\"cart-modification\" ng-show=\"!vm.showModificationAddress()\">\n" +
    "            <span class=\"delivery-label\">Delivery address: </span>\n" +
    "            <span class=\"delivery-info\">{{ vm.addressModification }}</span>\n" +
    "          </p>\n" +
    "          <p class=\"cart-modification\" ng-show=\"!vm.showModificationQuantity()\">\n" +
    "            <span class=\"delivery-label\">Quantity: </span>\n" +
    "            <span class=\"delivery-info\">{{ vm.upcomingCart.items[0].quantity | formatBoxNumOnly}}</span>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"order-delivery-overview-action-container\" ng-show=\"!vm.disableActions && !vm.editMode\">\n" +
    "        <div class=\"order-delivery-overview-edit\" ng-show=\"vm.isCartDeliverable() && !vm.cutOff\">\n" +
    "          <div class=\"btn-group dropdown-list-action\" dropdown>\n" +
    "            <button track-click event-name=\"edit-order\"\n" +
    "              id=\"single-button\"\n" +
    "              type=\"button\"\n" +
    "              class=\"btn btn-primary\"\n" +
    "              dropdown-toggle\n" +
    "              ng-disabled=\"disabled\">\n" +
    "                Edit\n" +
    "                <span class=\"hidden-xs\">Order</span> <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n" +
    "              <li role=\"menuitem\"\n" +
    "                  ng-if=\"vm.isMenuWeekSelectable()\"\n" +
    "                  ng-click=\"vm.toggleEditMode(true)\"\n" +
    "                  track-click event-name=\"PlanEditChangeRecipes\"\n" +
    "              >\n" +
    "                <a href=\"#\" >Change Recipes <br>\n" +
    "                  <span class=\"detail\">Select any 3 recipes you like.</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li role=\"menuitem\">\n" +
    "                <a href ng-click=\"vm.viewUpcomingOrder()\">Modify Order <br>\n" +
    "                  <span class=\"detail\">Change menu, delivery day, address, quantity.</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li role=\"menuitem\" ng-click=\"vm.showSkipOrderPopup()\">\n" +
    "                <a href=\"#\">Skip Order</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Button Skip Order -->\n" +
    "        <button class=\"btn btn-action-white btn-default-green pull-right\" ng-show=\"!vm.isCartDeliverable() && !vm.cutOff\" ng-click=\"vm.unskipOrderChange()\">Unskip Order</button>\n" +
    "\n" +
    "        <!-- Change preferences or skip Order -->\n" +
    "        <div class=\"order-delivery-overview-references\" ng-show=\"!vm.cutOff\">\n" +
    "          <p ng-show=\"!vm.isCartDeliverable()\" class=\"title\">Unskip order by:</p>\n" +
    "          <p ng-show=\"vm.isCartDeliverable()\" class=\"title\">Make changes to order by:</p>\n" +
    "          <p class=\"time\"> {{ vm.upcomingCart.cutoffTime | amDateFormat:'h A' }}, {{ vm.cutoffTime }}</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"order-delivery-cutoff-passed\" ng-show=\"vm.cutOff\">\n" +
    "             <span class=\"icon-information pull-right\"\n" +
    "                   popover-placement=\"left-bottom\"\n" +
    "                   popover=\"Menu changes can be made before {{ vm.upcomingCart.cutoffTime | date:'EEEE, MMMM d' }}, by {{ vm.upcomingCart.cutoffTime | amDateFormat:'h A' }} local time.\"></span>\n" +
    "\n" +
    "          <span class=\"hidden-xs pull-right\">The cutoff time for changes to this order has passed.</span>\n" +
    "          <span class=\"visible-xs\">Cutoff for changes to this order has passed.</span>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"order-delivery-meal\">\n" +
    "      <gc-init-owl-when-done mobileitemcount=\"2\" margin=\"20\">\n" +
    "        <!-- For standard (not choice) plans -->\n" +
    "        <div class=\"list-meals list-meals-carousel upcoming-order-meals\" id=\"cart{{vm.upcomingCart.index}}Owl\" ng-show=\"vm.showRecipes && !vm.loadingRecipes && !vm.isChoicePlan\" ng-class=\"{'family-plan': vm.isFamilyPlan}\">\n" +
    "          <div class=\"meal-item\" ng-repeat=\"recipe in vm.currentPlan.recipes\">\n" +
    "            <div ng-if=\"recipe.isPublished\">\n" +
    "              <div class=\"meal-item-wrapper-image\">\n" +
    "                <a href ng-click=\"vm.navigateToRecipePage(recipe, true)\" track-click event-name=\"recipe_{{recipe.recipeVanity}}\">\n" +
    "                  <img class=\"recipe-replace\" src=\"{{recipe.thumbnailImageUrl}}\">\n" +
    "                </a>\n" +
    "              </div>\n" +
    "              <div class=\"meal-item-info\">\n" +
    "                <a href ng-click=\"vm.navigateToRecipePage(recipe, true)\">\n" +
    "                  <h4 class=\"meal-item-name\" ng-bind-html=\"recipe.mealName\"></h4>\n" +
    "                  <p class=\"meal-item-description\" ng-bind-html=\"recipe.mealIntro\"></p>\n" +
    "                </a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!recipe.isPublished\">\n" +
    "              <div class=\"meal-item-wrapper-image\">\n" +
    "                <img class=\"recipe-replace\" src=\"{{recipe.thumbnailImageUrl}}\">\n" +
    "              </div>\n" +
    "              <div class=\"meal-item-info\">\n" +
    "                <h4 class=\"meal-item-name\" ng-bind-html=\"recipe.mealName\"></h4>\n" +
    "                <p class=\"meal-item-description\" ng-bind-html=\"recipe.mealIntro\"></p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- For Choice Plans -->\n" +
    "        <div class=\"list-meals list-meals-carousel upcoming-order-meals\" id=\"cart{{vm.upcomingCart.index}}Owl\" ng-show=\"vm.showRecipes && !vm.loadingRecipes && vm.isChoicePlan\">\n" +
    "          <div class=\"meal-item\" ng-repeat=\"recipe in vm.currentPlan.recipes\" ng-class=\"{'selected': vm.showRecipeSelectedTag(recipe) && !vm.editMode}\">\n" +
    "            <!-- choice recipes in edit mode - image nested in label for selection on click -->\n" +
    "            <div ng-class=\"{'selected-recipe': vm.selectedRecipeClass(recipe.checkedStatus)}\" ng-show=\"vm.editMode\">\n" +
    "              <!-- edit mode checkbox -->\n" +
    "              <div class=\"meal-item-wrapper-image\">\n" +
    "                <label class=\"select-dish-checkbox\">\n" +
    "                  <input class=\"hidden-checkbox\"\n" +
    "                    type=\"checkbox\"\n" +
    "                    ng-init=\"recipe.checkedStatus=false\"\n" +
    "                    ng-model=\"recipe.checkedStatus\"\n" +
    "                    ng-click=\"vm.selectNewRecipes(recipe, recipe.checkedStatus)\"\n" +
    "                    ng-disabled=\"vm.disableUncheckedBoxes(recipe.checkedStatus)\">\n" +
    "                  <span class=\"cr\" ng-class=\"{'disabled-checkbox': vm.disableUncheckedBoxes(recipe.checkedStatus)}\"><i class=\"cr-icon\"></i></span>\n" +
    "                  <img class=\"recipe-replace\" src=\"{{recipe.thumbnailImageUrl}}\">\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <!-- edit mode: recipe is published -->\n" +
    "              <div class=\"meal-item-info\" ng-if=\"recipe.isPublished\">\n" +
    "                <a href ng-click=\"vm.navigateToRecipePage(recipe, true)\">\n" +
    "                  <h4 class=\"meal-item-name\" ng-bind-html=\"recipe.mealName\"></h4>\n" +
    "                  <p class=\"meal-item-description\" ng-bind-html=\"recipe.mealIntro\"></p>\n" +
    "                </a>\n" +
    "              </div>\n" +
    "              <!-- edit mode: recipe is NOT published -->\n" +
    "              <div class=\"meal-item-info\" ng-if=\"!recipe.isPublished\">\n" +
    "                <h4 class=\"meal-item-name\" ng-bind-html=\"recipe.mealName\"></h4>\n" +
    "                <p class=\"meal-item-description\" ng-bind-html=\"recipe.mealIntro\"></p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <!-- choice recipes - image click links to recipe -->\n" +
    "            <div ng-if=\"recipe.isPublished\" ng-class=\"{'selected-recipe': vm.selectedRecipeClass(recipe.checkedStatus)}\" ng-show=\"!vm.editMode\">\n" +
    "              <div class=\"meal-item-wrapper-image\">\n" +
    "                <a href ng-click=\"vm.navigateToRecipePage(recipe, true)\" track-click event-name=\"recipe_{{recipe.recipeVanity}}\">\n" +
    "                  <img class=\"recipe-replace\" src=\"{{recipe.thumbnailImageUrl}}\">\n" +
    "                </a>\n" +
    "              </div>\n" +
    "              <div class=\"meal-item-info\">\n" +
    "                <a href ng-click=\"vm.navigateToRecipePage(recipe, true)\">\n" +
    "                  <h4 class=\"meal-item-name\" ng-bind-html=\"recipe.mealName\"></h4>\n" +
    "                  <p class=\"meal-item-description\" ng-bind-html=\"recipe.mealIntro\"></p>\n" +
    "                </a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <!-- choice recipes - without recipe page link -->\n" +
    "            <div ng-if=\"!recipe.isPublished\" ng-class=\"{'selected-recipe': vm.selectedRecipeClass(recipe.checkedStatus)}\" ng-show=\"!vm.editMode\">\n" +
    "              <div class=\"meal-item-wrapper-image\">\n" +
    "                <img class=\"recipe-replace\" src=\"{{recipe.thumbnailImageUrl}}\">\n" +
    "              </div>\n" +
    "              <div class=\"meal-item-info\">\n" +
    "                <h4 class=\"meal-item-name\" ng-bind-html=\"recipe.mealName\"></h4>\n" +
    "                <p class=\"meal-item-description\" ng-bind-html=\"recipe.mealIntro\"></p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </gc-init-owl-when-done>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Show list meals plan to update Order -->\n" +
    "    <gc-init-owl-when-done mobileitemcount=\"2\" margin=\"20\">\n" +
    "      <div class=\"list-meals list-meals-carousel upcoming-order-meals\" id=\"cart{{vm.upcomingCart.index}}Owl-empty\" ng-show=\"!vm.showRecipes && !vm.loadingRecipes\" ng-class=\"{'family-plan': vm.isFamilyPlan}\">\n" +
    "        <div class=\"meal-item\" ng-repeat=\"recipeCaption in vm.getNoRecipeCaptions()\">\n" +
    "          <div class=\"meal-item-wrapper-image\">\n" +
    "            <img class=\"no-recipe-replace\" src=\"//cdn.greenchef.com/assets/Photos/MyAccount/unknown-bg-menu.0a53776a.jpg\">\n" +
    "          </div>\n" +
    "          <div class=\"meal-item-info\">\n" +
    "            <h4 class=\"meal-item-name\">{{recipeCaption}}</h4>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Edit mode buttons -->\n" +
    "      <div class=\"text-center choice-buttons-container\" ng-show=\"vm.editMode\">\n" +
    "        <button class=\"btn btn-action-white btn-invert-green save-btn\"\n" +
    "          ng-class=\"{'disabled-btn': !vm.readyToSave}\"\n" +
    "          ng-click=\"vm.saveSelectedRecipes()\"\n" +
    "          track-click event-name=\"ChangeRecipesSave\"\n" +
    "\n" +
    "        >\n" +
    "          {{ vm.editButtonText }}\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-action-white btn-default-green\"\n" +
    "                type=\"button\"\n" +
    "                name=\"button\"\n" +
    "                ng-click=\"vm.toggleEditMode(false)\"\n" +
    "                track-click event-name=\"ChangeRecipesCancel\"\n" +
    "        >\n" +
    "          CANCEL\n" +
    "        </button>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Show 'Change Recipes' button for choice plan catalogs -->\n" +
    "      <div class=\"choice-change-recipes-ctls text-center\" ng-show=\"!vm.cutOff && vm.showRecipes && !vm.editMode && vm.isMenuWeekSelectable()\">\n" +
    "        <button class=\"btn btn-action-white btn-invert-green\"\n" +
    "          ng-show=\"vm.isCartDeliverable()\"\n" +
    "          ng-click=\"vm.toggleEditMode(true)\"\n" +
    "          track-click event-name=\"PlanChangeRecipes\"\n" +
    "        >\n" +
    "          Change Recipes\n" +
    "        </button>\n" +
    "      </div>\n" +
    "\n" +
    "    </gc-init-owl-when-done>\n" +
    "    <span ng-show=\"vm.loadingRecipes\">\n" +
    "      <loading-state></loading-state>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/directives/dropdown-menu/dropdown-menu.tpl.html","<div class=\"btn-group upcoming-order-dropdown-list c-menu-dropdown\" dropdown>\n" +
    "\n" +
    "  <button type=\"button\" class=\"btn\" dropdown-toggle ng-disabled=\"disabled\">\n" +
    "\n" +
    "  <span ng-repeat=\"dropdownItem in vm.dropdownItemList\"\n" +
    "        role=\"menuitem\" class=\"menu-item\"\n" +
    "        ng-if=\"$index === vm.selectedIndex\">\n" +
    "    <a href=\"#\">\n" +
    "\n" +
    "      <div ng-transclude></div>\n" +
    "      <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "  </span>\n" +
    "\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n" +
    "\n" +
    "    <li ng-repeat=\"dropdownItem in vm.dropdownItemList\"\n" +
    "        role=\"menuitem\" class=\"menu-item\"\n" +
    "        ng-class=\"{ 'selected': ($index === vm.selectedIndex)}\"\n" +
    "        ng-hide=\"dropdownItem.isHidden\"\n" +
    "    >\n" +
    "      <a href=\"#\" class=\"clearfix\" ng-click=\"vm.makeSelection($index)\">\n" +
    "        <span class=\"item-tick-icon\" ng-hide=\"$index !== vm.selectedIndex\"></span>\n" +
    "        <div ng-transclude></div>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "</div>\n" +
    "")

$templateCache.put("account/directives/order-detail/order-detail.tpl.html","<span class=\"view-summary-btn\" track-click event-name=\"view-order-summary\" ng-click=\"vm.toggleViewOrderDetail()\">View Order Summary</span>\n" +
    "\n" +
    "<!-- Pop View Order Detailed -->\n" +
    "<div class=\"v3-tooltip view-order-detail\" ng-show=\"vm.viewOrderDetail\" ng-click=\"vm.toggleViewOrderDetail()\">\n" +
    "  <div class=\"order-item\">\n" +
    "    <p class=\"order-time\">Order - <span class=\"time\">{{vm.order.deliveryDate | date:'MMM d' }}</span></p>\n" +
    "    <div ng-repeat=\"item in vm.order.items\" class=\"view-order-meal\">\n" +
    "      <p class=\"view-order-meal-item\">\n" +
    "        <span class=\"data-item text\">{{vm.planDetail.name | capitalizeFirst}}: {{vm.planDetail.planInfo.name}}\n" +
    "        <span ng-if=\"item.quantity > 1\">(x{{item.quantity}})</span>\n" +
    "        </span>\n" +
    "        <span class=\"data-item value\">{{item.price | currency}}</span>\n" +
    "      </p>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <p ng-show=\"!vm.cutOff\" class=\"note\">You will be billed on {{vm.order.cutoffTime | date:'MMMM d' }} at {{ vm.order.cutoffTime | amDateFormat:'h A' }} for this delivery.</p>\n" +
    "  <p ng-show=\"vm.cutOff\" class=\"note\">You were billed on {{vm.order.cutoffTime | date:'EEEE, MMMM d' }}.</p>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/modals/confirm-selection/confirm-selection.tpl.html","<div class=\"btn-close\" ng-click=\"vm.cancel()\"></div>\n" +
    "\n" +
    "<div class=\"modal-content\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h4 class=\"modal-title\">Success! Order Replaced</h4>\n" +
    "  </div>\n" +
    "   <div class=\"modal-body\">\n" +
    "     <p class=\"notification-confirm\">You will now receive the {{vm.newPlanName}} menu on {{vm.affectedDeliveryDate | date :'MM/dd'}}\n" +
    "       <span class=\"hidden-desktop\"> instead of your previously scheduled {{vm.oldPlanName}} menu</span>.\n" +
    "       This change will only affect your order for {{vm.affectedDeliveryDate | date :'MM/dd'}} and will not apply to all future deliveries.\n" +
    "     </p>\n" +
    "   </div>\n" +
    "   <div class=\"modal-footer\">\n" +
    "     <button class=\"btn btn-modal-action btn-action-green btn-continue\" ng-click=\"vm.closeModal()\">Continue</button>\n" +
    "   </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/modals/edit-subscription/dietary-opt-outs.tpl.html","<!-- Food preference -->\n" +
    "<div class=\"dietary-preference-wrapper clearfix\"\n" +
    "  ng-show=\"vm.subscription.mealPreference.mealPlan.proteinCustomizable\"\n" +
    ">\n" +
    "  <div class=\"dietary-preference\">\n" +
    "    <p>{{ vm.isChoicePlan() ? \"See something you don't eat? We enable you to deselect up to two proteins in case of allergies, cultural restrictions or personal taste.\" : \"Check only the proteins you want.\" }}</p>\n" +
    "    <div class='dietary-preference-selector clearfix'>\n" +
    "      <div ng-repeat=\"optOut in vm.subscription.mealPreference.mealPlan.permittedDietaryOptOuts\"\n" +
    "           class=\"opt-out-type\"\n" +
    "           ng-click=\"vm.toggleOptOut(optOut)\"\n" +
    "      >\n" +
    "        <div class=\"opt-out\"\n" +
    "          ng-class=\"{\n" +
    "            on: vm.subscription.mealPreference.dietaryOptOuts.indexOf(optOut) < 0,\n" +
    "            off: vm.subscription.mealPreference.dietaryOptOuts.indexOf(optOut) >= 0\n" +
    "          }\"\n" +
    "        >\n" +
    "          {{optOut}}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <span class=\"protein-deselect-prompt\" ng-show=\"vm.isChoicePlan() && vm.showProteinDeselectPrompt\">\n" +
    "      Up to two proteins may be deselected.\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/modals/edit-subscription/edit-frequency-modal.tpl.html","<form role=\"form\"\n" +
    "      class=\"form-horizontal\"\n" +
    "      name=\"frequencyStartForm\"\n" +
    "      novalidate\n" +
    "      ng-submit=\"vm.ok(frequencyStartForm)\">\n" +
    "\n" +
    "    <div class=\"close\" ng-click=\"vm.cancel()\"></div>\n" +
    "\n" +
    "    <div class=\"start-delivery clearfix\">\n" +
    "        <!--<h3 class=\"dialog-title\">Choose Your Next Delivery</h3>-->\n" +
    "        <h2 class=\"upper\">Choose next delivery date</h2>\n" +
    "        <p class=\"caption\">Select what week you would like your next order, and subsequent orders will arrive every {{vm.frequency | formatWeekNum}}.</p>\n" +
    "\n" +
    "        <div class='form-group'>\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <label for=\"frequency\">Delivery Frequency</label>\n" +
    "                <div class=\"frequency-options\" ng-form name=\"frequencies\">\n" +
    "                    <label class=\"frequency-option radio-label\" ng-repeat=\"option in vm.mealPlans.frequencyOptions\">\n" +
    "                        <input type=\"radio\"\n" +
    "                               id=\"frequency\"\n" +
    "                               name=\"frequency\"\n" +
    "                               ng-model=\"vm.frequency\"\n" +
    "                               value=\"{{option.frequency}}\">{{option.label}}\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class='form-group start-delivery-selector'>\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <label for=\"startdate\">Start Date</label>\n" +
    "                <select id=\"startdate\" name=\"startdate\" data-size=\"7\" class=\"selectpicker form-control btn-select\"\n" +
    "                        ng-model=\"vm.frequencyStartDate\"\n" +
    "                        ng-options=\"d.value as d.text for d in vm.nextShippingDates\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"btn-wrapper\">\n" +
    "        <button class=\"btn btn-green btn-big\"\n" +
    "                type=\"button\" ng-click=\"vm.ok(frequencyStartForm)\">OK</button>\n" +
    "    </div>\n" +
    "</form>")

$templateCache.put("account/modals/edit-subscription/edit-subscription-confirmation-modal.tpl.html","<!-- confirmation modal after updating meal plan and account info -->\n" +
    "<div class=\"close\" ng-click=\"vm.cancel()\"></div>\n" +
    "<h2 class=\"main-title text-uppercase text-center\">edits saved&excl;</h2>\n" +
    "\n" +
    "<div class=\"content text-center\">\n" +
    "  <p class=\"title\">You&#8217;ve made the following changes:</p>\n" +
    "\n" +
    "  <!-- Meal plan updated -->\n" +
    "  <div class=\"main-info\">\n" +
    "    <p class=\"info\" ng-if=\"vm.subscriptionUpdate.deliveryWindow\">Delivery Window changed to <span class=\"text-capitalize\">{{vm.subscriptionUpdate.deliveryWindow}}</span></p>\n" +
    "    <p class=\"info\" ng-if=\"vm.subscriptionUpdate.quantity\">Number of Boxes changed to {{vm.subscriptionUpdate.quantity}}</p>\n" +
    "    <p class=\"info\" ng-if=\"vm.subscriptionUpdate.frequencyMessage\">Delivery Frequency changed to \n" +
    "    {{vm.subscriptionUpdate.frequencyMessage}}</p>\n" +
    "    <p class=\"info\" ng-if=\"vm.subscriptionUpdate.planName\">Plan changed to {{vm.subscriptionUpdate.planName | capitalizeFirst}}</p>\n" +
    "    <p class=\"info\" ng-if=\"vm.subscriptionUpdate.mealPlan\">Menu changed to {{vm.subscriptionUpdate.mealPlan | capitalizeFirst}}</p>\n" +
    "    <p class=\"info\" ng-if=\"vm.subscriptionUpdate.dietaryOptOutsMessage\">\n" +
    "      {{vm.subscriptionUpdate.dietaryOptOutsMessage}}\n" +
    "    </p>\n" +
    "    <p class=\"info\" ng-if=\"vm.subscriptionUpdate.intervalStartDate\">Delivery start date changed to {{vm.subscriptionUpdate.intervalStartDate}} </p>\n" +
    "    <p class=\"info\" ng-if=\"vm.subscriptionUpdate.none\">You did not make any changes to your subscription.</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- order delivery message -->\n" +
    "  <div class=\"notice-box\" ng-html-compile=\"vm.footerMessage\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"btn-wrapper\">\n" +
    "  <button type=\"button\" class=\"btn btn-general btn-white btn-continue\" ng-click=\"vm.cancel()\">continue</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "")

$templateCache.put("account/modals/edit-subscription/plan-modal.tpl.html","<form role=\"form\" class=\"form-horizontal edit-plan-form\" name=\"planForm\" novalidate ng-submit=\"vm.ok(planForm)\">\n" +
    "  <div>\n" +
    "    <div ng-repeat=\"alert in vm.alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"vm.closeAlert()\">x</button>\n" +
    "      {{alert.msg}}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"close\" ng-click=\"vm.cancel(planForm)\"></div>\n" +
    "\n" +
    "  <!-- Saving Process overlay -->\n" +
    "  <div class=\"overlay\" ng-show=\"planForm.$submitted\" ng-click=\"disableClicks($event)\"></div>\n" +
    "\n" +
    "  <div class=\"your-plan\" ng-class=\"{'disabled-state': planForm.$submitted}\">\n" +
    "    <h2 class=\"upper main-title\">Edit your subscription</h2>\n" +
    "    <p class=\"caption\">Subscription changes made today will go into effect on {{vm.getPlanChangeDeliveryDay() | amDateFormat:\"dddd, MMMM Do\" }}.</p>\n" +
    "\n" +
    "    <!-- Family Plan - Edit prefs -->\n" +
    "    <div class=\"family-choice family-choice-sm\">\n" +
    "      <div class=\"choices-list\">\n" +
    "        <div class=\"choice\" ng-click=\"vm.selectPlanChoice('2-person')\">\n" +
    "          <div class=\"thumb\" ng-class=\"{'selected-choice': vm.planChoice === '2-person'}\">\n" +
    "            <h2 class=\"title text-center\">\n" +
    "              <p class=\"name text-uppercase\">2-person plan</p>\n" +
    "              <p class=\"info\">3 dinners a week for 2 people</p>\n" +
    "            </h2>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"choice-footer\">\n" +
    "            <button type=\"button\" class=\"btn btn-small btn-select\" ng-class=\"{'selected': vm.planChoice === '2-person'}\">\n" +
    "              Select\n" +
    "            </button>\n" +
    "          </div>\n" +
    "          <span id=\"plan-tooltip\" class=\"plan-tooltip about-tooltip\" popover-append-to-body=\"true\" popover-placement=\"top\" popover=\"Cook nourishing, incredible dinners in around 30 minutes. With options for paleo, vegan, vegetarian, and gluten-free.\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"choice\" ng-click=\"vm.selectPlanChoice('family')\">\n" +
    "          <div class=\"thumb\" ng-class=\"{'selected-choice': vm.planChoice === 'family'}\">\n" +
    "            <h2 class=\"title text-center\">\n" +
    "              <p class=\"name text-uppercase\">family plan</p>\n" +
    "              <p class=\"info\">2 dinners a week for 4 people</p>\n" +
    "            </h2>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"choice-footer\">\n" +
    "            <button type=\"button\" class=\"btn btn-small btn-select\" ng-class=\"{'selected': vm.planChoice === 'family'}\">\n" +
    "              Select\n" +
    "            </button>\n" +
    "          </div>\n" +
    "          <span id=\"plan-tooltip\" class=\"plan-tooltip about-tooltip\" popover-append-to-body=\"true\" popover-placement=\"top\" popover=\"Wholesome family-style dinners that appeal to parents and kids alike—ready in around 45 minutes.\">\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-sm-6 select-group\" ng-hide=\"isOptOutSubscription\">\n" +
    "        <label for=\"number-people-list\">How many boxes?</label>\n" +
    "        <span id=\"how-many-box-tooltip\" class=\"about-tooltip\" popover-append-to-body=\"true\" popover-placement=\"top\" popover=\"Each box contains 3 dinners (2-Person Plan) or 2 dinners (Family Plan). Each additional box will contain the same recipes—all delivered on the same day.\">\n" +
    "        </span>\n" +
    "        <div class=\"dropdown-list\">\n" +
    "          <select id=\"number-people-list\" class=\"selectpicker form-control btn-select\" ng-model=\"vm.subscription.quantity\" name=\"quantity\" ng-options=\"quantity as (quantity| formatBoxNum) for quantity in vm.boxes\">\n" +
    "          </select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-sm-6 select-group\" ng-hide=\"isOptOutSubscription\">\n" +
    "        <label for=\"delivery-window\">Delivery Day</label>\n" +
    "        <div class=\"dropdown-list\">\n" +
    "          <select id=\"delivery-window\" class=\"form-control selectpicker\" ng-model=\"vm.subscription.deliveryWindow\" name=\"deliveryWindow\" required>\n" +
    "            <option ng-repeat=\"day in vm.shippingDates.availableDaysOfWeek\" value=\"{{day}}\" ng-selected=\"day == vm.subscription.deliveryWindow\">{{day | capitalizeFirst}}s</option>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-sm-12\">\n" +
    "        <div class=\"frequency-caption\">\n" +
    "          <label for=\"frequency\">Delivery Frequency</label>\n" +
    "          <span id=\"delivery-frequency-tooltip\" class=\"about-tooltip\" popover-append-to-body=\"true\" popover-placement=\"top\" popover=\"You can choose to have orders sent weekly or every 4 weeks. On either plan, you can skip or unskip any specific delivery anytime, no questions asked, at least 7 days before delivery date.\"></span>\n" +
    "          <a class=\"change-start-date\" href ng-click=\"vm.changeFrequencyStartDate()\">Change Start Date</a>\n" +
    "        </div>\n" +
    "        <div class=\"frequency-options\" ng-form name=\"frequency\">\n" +
    "          <div class=\"frequency-option radio-label\" ng-repeat=\"option in vm.mealPlans.frequencyOptions\">\n" +
    "            <input type=\"radio\" id=\"frequency{{$index}}\" name=\"frequency\" ng-model=\"vm.subscription.frequency\" value=\"{{option.frequency}}\" />\n" +
    "            <label for=\"frequency{{$index}}\">{{option.label}}</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group meal-preference-selector standard\">\n" +
    "      <div class=\"meal-preference\">\n" +
    "        <h3 class=\"choose-meal-title\">Menu Options</h3>\n" +
    "        <p class=\"caption\">Pricing is per serving.</p>\n" +
    "        <div class=\"meal-type-list\">\n" +
    "          <div ng-repeat=\"mealType in vm.allMealPlans\"\n" +
    "            class=\"meal-type\"\n" +
    "            ng-class=\"{active: vm.subscription.mealPreference.mealPlan.value === mealType.value}\"\n" +
    "            ng-hide=\"mealType.isHidden\"\n" +
    "          >\n" +
    "            <input type=\"hidden\" ng-model=\"vm.subscription.mealPreference.mealPlan\" value=\"{{mealType.value}}\">\n" +
    "            <div class=\"text\" ng-click=\"vm.chooseMealPlan(mealType)\">\n" +
    "              <div class=\"name\">{{mealType.name}}</div>\n" +
    "              <div class=\"subtitle\">{{mealType.subtitle2}}</div>\n" +
    "              <div class=\"price\">\n" +
    "                <div>\n" +
    "                  ${{vm.menusLandingService.getPriceInteger(mealType.cost)}}\n" +
    "                  <span>{{vm.menusLandingService.getPriceDecimal(mealType.cost)}}</span>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"protein-opts\" ng-include=\"vm.templateDietaryOptOuts\" collapse=\"vm.subscription.mealPreference.mealPlan.value !== mealType.value\" />\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"shipping-caption\">\n" +
    "          <p class=\"caption\">*Shipping\n" +
    "            <span ng-if=\"!vm.mealPlans.pricesIncludeShipping\">not</span> included.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <hr class=\"button-horizontal-rule hidden-xs\" />\n" +
    "  <div class=\"plan-form-validation-message\" ng-show=\"vm.planFormValidationMessage\">\n" +
    "    {{vm.planFormValidationMessage}}\n" +
    "  </div>\n" +
    "  <div class=\"btn-wrapper\" ng-show=\"!planForm.$submitted\">\n" +
    "    <button class=\"btn btn-green btn-big\" type=\"submit\">Save\n" +
    "      <span class=\"hidden-xs\"> Changes</span>\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-green btn-big\" type=\"button\" ng-click=\"vm.cancel(planForm)\">Cancel</button>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"btn-wrapper\" ng-show=\"planForm.$submitted\">\n" +
    "    <loading-state></loading-state>\n" +
    "  </div>\n" +
    "</form>\n" +
    "")

$templateCache.put("account/modals/intro-to-flexible-ordering/intro-to-flexible-ordering.tpl.html","<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close pull-right\" ng-click=\"closeModal()\" aria-label=\"Close\"></button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"text-center\">New Look,<br>More Options</h4>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-offset-1 col-md-10\">\n" +
    "      <p class=\"text-center\">\n" +
    "        You can now change your delivery day, shipping address, and meal plan per week.\n" +
    "        <a href=\"https://blog.greenchef.com/order-options/\" target=\"_blank\" track-click event-name=\"onboarding-readmore\">Read More.</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div class=\"text-center\">\n" +
    "        <button class=\"btn btn-green\" ng-click=\"closeModal()\" track-click event-name=\"close-flexible-onboarding\">Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\"></div>")

$templateCache.put("account/modals/local-change-notification/local-change-notification.tpl.html","<div class=\"btn-close\" ng-click=\"vm.closeModal()\"></div>\n" +
    "\n" +
    "<div class=\"modal-content\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h4 class=\"modal-header-title\">Changes Will Only Affect Your Order For {{vm.cartDate | date: 'MMMM d'}}</h4>\n" +
    "    <p class=\"hidden-xs modal-header-desc\">Changes made to your upcoming order will not apply to all future deliveries under your recurring subscription.</p>\n" +
    "    <p class=\"visible-xs modal-header-desc\">Changes made to your upcoming order will not apply to all future deliveries.</p>\n" +
    "  </div>\n" +
    "   <div class=\"modal-body\">\n" +
    "     <p class=\"modal-made-changes\">You’ve made the following changes:</p>\n" +
    "     <div ng-repeat=\"(field, value) in vm.cartUpdate\">\n" +
    "      <p class=\"change-content\">\n" +
    "       <span class=\"label-text\">{{ field }}: </span>\n" +
    "       <span class=\"content\">{{ value }}</span>\n" +
    "      </p>\n" +
    "     </div>\n" +
    "   </div>\n" +
    "   <div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-default-green btn-action-green\" ng-click=\"vm.closeModal()\">Continue</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/modals/replace-order/replace-order-modal.tpl.html","<div class=\"btn-close\" ng-click=\"vm.cancel()\"></div>\n" +
    "\n" +
    "<div class=\"modal-header\">\n" +
    "  <h4 class=\"modal-header-title\">Replace Upcoming Order</h4>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"menu-avaiable\">\n" +
    "    <p class=\"menu-short-description\">Swap out this menu...</p>\n" +
    "    <div class=\"menu-selection\">\n" +
    "      <div class=\"menu-info\">\n" +
    "        <div class=\"menu-info-content\">\n" +
    "          <h5 class=\"menu-name\">{{vm.currentMealPlan.name}} Menu</h5>\n" +
    "          <p class=\"menu-detail\"><span class=\"menu-price\">{{vm.currentMealPlan.cost | currency}}/serving</span></p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <gc-init-owl-when-done mobileitemcount=\"2\" margin=\"20\">\n" +
    "        <div class=\"list-meals list-meals-carousel change-order-meals\" id=\"currentMenu\" ng-class=\"{'family-plan': vm.isFamilyPlan}\">\n" +
    "          <div class=\"meal-item\" ng-repeat=\"meal in vm.currentCart.recipes track by $index\">\n" +
    "            <div class=\"meal-item-wrapper-image\">\n" +
    "              <img class=\"recipe-img\" src=\"{{meal.thumbnailImageUrl}}\">\n" +
    "            </div>\n" +
    "            <div class=\"meal-item-info\">\n" +
    "              <h4 class=\"meal-item-name\" ng-bind-html=\"meal.mealName\"></h4>\n" +
    "              <p class=\"hidden-xs meal-item-description\" ng-bind-html=\"meal.mealIntro\"></p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </gc-init-owl-when-done>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"menu-avaiable\">\n" +
    "    <p class=\"menu-short-description\">...and get the menu below instead.</p>\n" +
    "    <div class=\"menu-selection instead\">\n" +
    "      <div class=\"menu-info\">\n" +
    "        <div class=\"menu-info-content\">\n" +
    "          <h5 class=\"menu-name\">{{vm.replacePlan.name}} Menu</h5>\n" +
    "          <p class=\"menu-detail\"><span class=\"menu-price\">{{vm.replacePlan.cost | currency}}/serving</span></p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <gc-init-owl-when-done mobileitemcount=\"2\" margin=\"20\">\n" +
    "        <div class=\"list-meals list-meals-carousel change-order-meals\" id=\"insteadMenu\" ng-class=\"{'family-plan': vm.replacePlan.isFamilyPlan}\">\n" +
    "          <div class=\"meal-item\" ng-repeat=\"meal in vm.replacePlan.meals.recipes track by $index\">\n" +
    "            <div class=\"meal-item-wrapper-image\">\n" +
    "              <img class=\"recipe-img\" src=\"{{meal.thumbnailImageUrl}}\">\n" +
    "            </div>\n" +
    "            <div class=\"meal-item-info\">\n" +
    "              <h4 class=\"meal-item-name\" ng-bind-html=\"meal.mealName\"></h4>\n" +
    "              <p class=\"hidden-xs meal-item-description\" ng-bind-html=\"meal.mealIntro\"></p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </gc-init-owl-when-done>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "  <div class=\"modal-group-btn\">\n" +
    "    <button class=\"btn btn-default-green btn-action-white\" ng-click=\"vm.closeModal()\" track-click event-name=\"cancel-replace-order\">Cancel</button>\n" +
    "    <button class=\"btn btn-default-green btn-action-green\" ng-click=\"vm.comfirmReplace()\" track-click event-name=\"confirm-replace-order\">Confirm</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/modals/skip-order/skip-order.tpl.html","<div class=\"btn-close\" ng-click=\"vm.closeModal()\"></div>\n" +
    "\n" +
    "<div class=\"modal-content\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h4 class=\"modal-title\">Are you sure you want to skip this order?</h4>\n" +
    "    <div class=\"modal-group-btn\">\n" +
    "      <button class=\"btn btn-default-green btn-action-white\" ng-click=\"vm.closeModal()\" ng-show=\"!vm.skipSubmitting\" track-click event-name=\"cancel-skip-order\">Cancel</button>\n" +
    "      <button class=\"btn btn-default-green btn-action-green\" ng-click=\"vm.skipOrder()\" ng-show=\"!vm.skipSubmitting\">Skip Order</button>\n" +
    "      <span class=\"btn btn-modal-action btn-action-green\" ng-show=\"vm.skipSubmitting\">\n" +
    "        <loading-state></loading-state>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"modal-body\" ng-if=\"!vm.hideMenus()\">\n" +
    "    <p class=\"modal-title\">Didn’t like your set menu this week? Try another menu instead.</p>\n" +
    "\n" +
    "    <div class=\"menu-selection\" ng-repeat=\"menu in vm.otherMenus track by $index\">\n" +
    "      <div class=\"menu-overview\">\n" +
    "        <div class=\"menu-info\">\n" +
    "          <div class=\"menu-info-content\">\n" +
    "            <p class=\"menu-name\">{{menu.planName}}</p>\n" +
    "\n" +
    "            <p class=\"menu-detail\">\n" +
    "              <span class=\"menu-current-time\">{{ vm.deliveryDate | date:'EEEE, MMMM d'}}</span>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "\n" +
    "          <button class=\"btn btn-action-white btn-default-green pull-right\" ng-click=\"vm.getThisPlan(menu)\" ng-show=\"!vm.getThisSubmitting\" track-click event-name=\"get-this\">Get This</button>\n" +
    "          <span class=\"btn btn-modal-action btn-action-green pull-right\" ng-show=\"vm.getThisSubmitting\">\n" +
    "            <loading-state></loading-state>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <gc-init-owl-when-done mobileitemcount=\"2\" margin=\"20\">\n" +
    "      <div class=\"list-meals list-meals-carousel change-order-meals\" id=\"{{menu.planName}}\" ng-class=\"{'family-plan': vm.isFamilyPlan}\">\n" +
    "        <div class=\"meal-item\" ng-repeat=\"meal in menu.recipes track by $index\">\n" +
    "          <div class=\"meal-item-wrapper-image\">\n" +
    "            <img class=\"recipe-img\" ng-src=\"{{meal.thumbnailImageUrl}}\">\n" +
    "          </div>\n" +
    "          <div class=\"meal-item-info\">\n" +
    "            <h4 class=\"meal-item-name\" ng-bind-html=\"meal.mealName\"></h4>\n" +
    "            <p class=\"meal-item-description\" ng-bind-html=\"meal.mealIntro\"></p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      </gc-init-owl-when-done>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "")

$templateCache.put("account/modals/unskip-order/unskip-order.tpl.html","<div class=\"btn-close\" ng-click=\"vm.cancel()\"></div>\n" +
    "\n" +
    "<div class=\"modal-content\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h4 class=\"modal-header-title\">Unskip Order?</h4>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <p class=\"confirm-notification\">The order you wish to replace has been skipped. To receive the replacement {{vm.replaceMealPlan}} menu on {{vm.currentCart.deliveryDate}}, you must unskip the order.</p>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <div class=\"modal-group-btn\">\n" +
    "      <button class=\"btn btn-default-green btn-action-white\" ng-click=\"vm.closeModal()\">Cancel</button>\n" +
    "      <button class=\"btn btn-default-green btn-action-green\" ng-click=\"vm.unSkipOrder()\">Unskip Order</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("account/modals/upcoming-order/upcoming-order.tpl.html","<div class=\"btn-close\" ng-click=\"vm.closeModal()\"></div>\n" +
    "<div class=\"modal-content\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h4 class=\"modal-header-title\">Modify Upcoming Order</h4>\n" +
    "    <p class=\"hidden-xs modal-header-desc\">You can change the menu, delivery day, address, serving size, and/or number\n" +
    "      of boxes for a single order. Any changes made will not apply to all future deliveries.</p>\n" +
    "    <p class=\"visible-xs modal-header-desc\">Change menu, delivery day, address, serving size, and/or number of boxes for\n" +
    "      a single order. Changes made will not apply to all future deliveries.</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"modal-body\">\n" +
    "    <div class=\"alertsContainer\">\n" +
    "      <div ng-repeat=\"alert in vm.alerts\" class=\"alert\" ng-class=\"alert.type\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"vm.closeAlert()\">x</button>\n" +
    "        <span>\n" +
    "      {{alert.msg}}\n" +
    "      </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Dropdown list select Servings -->\n" +
    "    <div class=\"selections servings\">\n" +
    "      <p class=\"selections-indicator\">Servings</p>\n" +
    "      <gc-dropdown-menu dropdown-item-list=\"vm.servingTypes\"\n" +
    "                        selected-index=\"vm.selectedServingTypeIndex\"\n" +
    "                        set-selected-item-callback=\"vm.setServingType(selectedItem)\">\n" +
    "        <span class=\"item-name\">{{$parent.dropdownItem.name}}</span><br>\n" +
    "        <span class=\"item-info\">{{$parent.dropdownItem.description}}</span>\n" +
    "      </gc-dropdown-menu>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Dropdown list select Menu -->\n" +
    "    <div class=\"selections menu\">\n" +
    "      <p class=\"selections-indicator\">Menu</p>\n" +
    "\n" +
    "      <gc-dropdown-menu dropdown-item-list=\"vm.availableMealPlans\"\n" +
    "                        selected-index=\"vm.selectedMealPlanIndex\"\n" +
    "                        set-selected-item-callback=\"vm.setMealPlan(selectedItem)\">\n" +
    "        <span class=\"item-name\">{{$parent.dropdownItem.name | capitalizeFirst}}</span>\n" +
    "        <span class=\"item-info-price pull-right\">{{$parent.dropdownItem.cost | currency}}/serving</span>\n" +
    "        <div>\n" +
    "          <span class=\"item-info-description\">{{$parent.dropdownItem.mobileSubtitle}}</span>\n" +
    "        </div>\n" +
    "      </gc-dropdown-menu>\n" +
    "\n" +
    "      <div class=\"selections-proteins\" ng-if=\"!vm.isChoicePlan && vm.availableDietaryOptOuts.length > 0\">\n" +
    "        <p class=\"title\">Check only the proteins you want.</p>\n" +
    "        <div class=\"protein-checkox\">\n" +
    "          <div class=\"kind-protein\" ng-repeat=\"protein in vm.availableDietaryOptOuts\"\n" +
    "               ng-click=\"vm.toggleOptOut(protein)\" ng-class=\"{'selected': !vm.selectedDietaryOptOuts[protein]} \">\n" +
    "            <span class=\"kind-protein-icon\"></span>\n" +
    "            <span class=\"kind-protein-name\">{{protein}}</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Dropdown list select Number of Boxes -->\n" +
    "    <div class=\"selections number-boxes\">\n" +
    "      <p class=\"selections-indicator\">No. Of Boxes</p>\n" +
    "      <gc-dropdown-menu dropdown-item-list=\"vm.numBoxes\"\n" +
    "                        selected-index=\"vm.selectedNumBoxesIndex\">\n" +
    "        <span class=\"item-name\">{{$parent.dropdownItem | formatBoxNumOnly }}</span><br>\n" +
    "      </gc-dropdown-menu>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Dropdown list select Shipping Address -->\n" +
    "    <div class=\"selections address\">\n" +
    "      <p class=\"selections-indicator\">Shipping Address</p>\n" +
    "      <gc-dropdown-menu dropdown-item-list=\"vm.possibleAddresses\"\n" +
    "                        selected-index=\"vm.selectedAddressIndex\">\n" +
    "        <span class=\"item-name\">{{$parent.dropdownItem.name}}</span><br>\n" +
    "      </gc-dropdown-menu>\n" +
    "\n" +
    "      <div class=\"newAddressForm\">\n" +
    "\n" +
    "        <a href=\"#\" class=\"addNewAddressButton\" ng-click=\"vm.showNewAddressForm = true\"\n" +
    "           ng-hide=\"vm.showNewAddressForm\">\n" +
    "          <span class=\"plus-icon\"></span>\n" +
    "          <span class=\"link-text\">Add new address</span></a>\n" +
    "\n" +
    "        <div class=\"address-add-new v3-page\" ng-show=\"vm.showNewAddressForm\">\n" +
    "\n" +
    "          <gc-address-form address=\"vm.newDefaultAddress\"\n" +
    "                           add-address=\"vm.addAddress\"\n" +
    "                           cancel-address=\"vm.cancelAddress()\"\n" +
    "                           user-id=\"vm.userId\"></gc-address-form>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Dropdown list select Delivery Day -->\n" +
    "    <!-- At the current Delivery day is mocked. Will be updated later after binding real data. -->\n" +
    "    <div class=\"selections delivery-day\" ng-if=\"vm.availableDeliveryDates.length > 0\">\n" +
    "      <p class=\"selections-indicator\">Delivery Day</p>\n" +
    "\n" +
    "      <p class=\"delivery-day-error\" ng-show=\"!vm.invalidDeliveryDate\">Please choose a delivery day below. We are unable to\n" +
    "        deliver to the selected address.</p>\n" +
    "\n" +
    "      <div class=\"delivery-day-options group-vertical selection-box-day btn-group\" role=\"group\">\n" +
    "        <button type=\"button\" class=\"btn selection-item delivery-day-item\"\n" +
    "                ng-repeat=\"day in vm.availableDeliveryDates track by $index\"\n" +
    "                ng-click=\"vm.selectDeliveryDay(day)\"\n" +
    "                ng-class=\"{'selected': vm.selectedDeliveryDate === day}\">{{day | date: \"MMM d, EEE\"}}\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-default-green btn-action-green\" ng-disabled=\"!vm.invalidDeliveryDate\" ng-click=\"vm.saveChanges()\" ng-show=\"!vm.formSubmitting\" track-click event-name=\"save-modify-order\">Save Changes</button>\n" +
    "    <span ng-show=\"vm.formSubmitting\">\n" +
    "      <loading-state></loading-state>\n" +
    "    </span>\n" +
    "\n" +
    "    <button class=\"btn btn-default-green btn-action-white\" ng-click=\"vm.closeModal()\" ng-show=\"!vm.formSubmitting\" track-click event-name=\"cancel-modify-order\">Cancel</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/preferences/v2/recipe-modal.tpl.html","<div class=\"wrapper\">\n" +
    "  <div class=\"close\" track-click event-name=\"x_click\" ng-click=\"cancel()\"></div>\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"content-header\">\n" +
    "      <p class=\"title-menu\">{{currentMenuPlanName}} Classics</p>\n" +
    "      <p class=\"description\">These were big hits. You’ll get different, all-new recipes each week.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"flex-wrapper list-recipes\">\n" +
    "      <div class=\"flex-item recipe-item\" ng-repeat=\"recipe in favorites\">\n" +
    "        <div class=\"recipe-image\">\n" +
    "          <img src=\"{{recipe.thumbnailImageUrl}}\" alt=\"\">\n" +
    "        </div>\n" +
    "        <p class=\"recipe-name\">{{recipe.name}}</p>\n" +
    "        <p class=\"recipe-desc\">{{recipe.mealIntro}}</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <a href class=\"btn btn-lg btn-green btn-confirm\" ng-click=\"confirmRecipesMenu()\" track-click event-name=\"select_menu\">Select {{menuPlanName}}</a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"other-menus\">\n" +
    "    <p class=\"get-other\">See Sample Recipes From Other Plans</p>\n" +
    "    <div class=\"flex-wrapper list-menus\">\n" +
    "      <div class=\"flex-item\" ng-repeat=\"menuPlan in menuPlanOptions | filter: filterMenuPlan\">\n" +
    "        <button class=\"btn-default btn-menu\" ng-click=\"pickOtherMenu(menuPlan)\">{{menuPlan.name}}</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("sign-up/preferences/v2/v2Preferences.tpl.html","<div class=\"hidden-xs\">\n" +
    "  <div ng-repeat=\"alert in alerts\" class=\"alert alert-v2\" ng-class=\"alert.type\">\n" +
    "    <span ng-html-compile=\"alert.msg\"></span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"preferences-v2-wrapper\">\n" +
    "  <!--Get number people cooking for-->\n" +
    "  <div class=\"serving-info number-people\">\n" +
    "    <h3 class=\"title hidden-xs\">1. How many people are you cooking for?</h3>\n" +
    "    <h3 class=\"title visible-xs\">1. How many people to cook for?</h3>\n" +
    "    <p class=\"desc-detail\">You can change your plan and preferences anytime.</p>\n" +
    "    <div class=\"btn-group number-options\" role=\"group\" aria-label=\"number people\">\n" +
    "      <button type=\"button\" class=\"btn btn-default\"\n" +
    "              ng-repeat=\"number in numberPeople\"\n" +
    "              ng-model=\"userOption.number\"\n" +
    "              ng-click=\"selectNumber(number)\"\n" +
    "              ng-class=\"{'selected': userOption.number === number}\">\n" +
    "        {{number}}\n" +
    "      </button>\n" +
    "    </div>\n" +
    "    <label class=\"error-validation\" ng-show=\"needsNumber\">&#42;Please select the number of people to serve</label>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--Choose production option-->\n" +
    "  <div class=\"serving-info production-option\">\n" +
    "    <h3 class=\"title\">2. What do you like to eat?</h3>\n" +
    "    <p class=\"desc-detail\">\n" +
    "      <span class=\"hidden-xs\">You can change your plan and preferences anytime.</span>\n" +
    "    </p>\n" +
    "\n" +
    "    <!-- tiled list of meal plans -->\n" +
    "    <div class=\"menu-options\">\n" +
    "      <div class=\"flex-wrapper\">\n" +
    "        <div class=\"menu-item flex-item no-selected\"\n" +
    "             ng-repeat=\"plan in twoPersonPlans\"\n" +
    "             ng-model=\"userOption.plan\"\n" +
    "             ng-class=\"{'selected': userOption.plan.internalName === plan.internalName}\"\n" +
    "             ng-click=\"selectPlan(plan)\"\n" +
    "             track-click event-name=\"suf-plan-tiled-layout-{{plan.internalName}}\">\n" +
    "          <div class=\"gluten-badge\" ng-if=\"plan.preferencesPage.glutenCertified\">\n" +
    "            <img class=\"image-responsive\" src=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_SMALL_GREY@1x.f47912e9.png\"\n" +
    "                 srcset=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_SMALL_GREY@2x.4ed42923.png 2x\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"select-menu-plan\">\n" +
    "            <span ng-class=\"plan.internalName\"\n" +
    "                  class=\"menu-icon\"\n" +
    "                  alt=\"{{plan.displayName}}\">\n" +
    "              <div class=\"gluten-badge\" ng-if=\"plan.preferencesPage.glutenCertified\">\n" +
    "            <img class=\"image-responsive\" src=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_XSMALL_BLACK@1x.b1a05c52.png\"\n" +
    "                 srcset=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_XSMALL_BLACK@2x.eee16d18.png 2x\"/>\n" +
    "          </div>\n" +
    "            </span>\n" +
    "            <div class=\"menu-info\">\n" +
    "              <h4 class=\"menu-name\">{{plan.displayName}}</h4>\n" +
    "              <p class=\"serving-price\">${{plan.cost}}/serving</p>\n" +
    "              <p class=\"desc-detail-meal overview visible-xs\">{{plan.preferencesPage.overview_mobile}}</p>\n" +
    "              <p class=\"desc-detail-meal overview hidden-xs\">{{plan.preferencesPage.overview_desktop}}</p>\n" +
    "              <p class=\"desc-detail-meal ingredient visible-xs\">{{plan.preferencesPage.ingredient_mobile}}</p>\n" +
    "              <p class=\"desc-detail-meal ingredient hidden-xs\">{{plan.preferencesPage.ingredient_desktop}}</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <!--Display options that match selections-->\n" +
    "  <div id=\"mealOptionChoices\" class=\"serving-info info-collecting\" ng-if=\"showMealPlanOption\">\n" +
    "    <h3 class=\"title\">Top {{mealPlanOptions.length === 1 ? 'Choice' : 'Choices'}} For {{userOption.number}} {{userOption.number === 1 ? 'PERSON' : 'PEOPLE'}}</h3>\n" +
    "    <p class=\"desc-detail\">You can change your plan and preferences anytime.</p>\n" +
    "\n" +
    "    <div class=\"top-choices\">\n" +
    "      <div class=\"choice\" ng-repeat=\"meal in mealPlanOptions\">\n" +
    "        <div class=\"choice-description\">\n" +
    "          <span>{{meal.flavorText}} {{meal.mealDescription}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"choice-detail-information\">\n" +
    "          <div class=\"choice-structure\">\n" +
    "            <div class=\"structure-box\">\n" +
    "              {{meal.mealTitle}} : {{meal.recommendedAmount}} {{meal.recommendedAmount === 1 ? 'box' : 'boxes'}}\n" +
    "            </div>\n" +
    "            <div class=\"quantity number-recipe\">\n" +
    "              <div class=\"wrapper-icon\">\n" +
    "                <span class=\"icon\"\n" +
    "                    ng-class=\"{ 'two-recipes': meal.numRecipes === 2, 'three-recipes': meal.numRecipes === 3}\">\n" +
    "                </span>\n" +
    "              </div>\n" +
    "              <span class=\"number\">{{meal.numRecipes}} recipes per week</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"quantity number-people\">\n" +
    "              <div class=\"wrapper-icon\">\n" +
    "                <span class=\"icon\"\n" +
    "                      ng-class=\"{ 'two-servings': (meal.numPeople  * meal.recommendedAmount) === 2, 'four-servings': (meal.numPeople  * meal.recommendedAmount) === 4}\">\n" +
    "                </span>\n" +
    "              </div>\n" +
    "              <span class=\"number\">{{meal.numPeople  * meal.recommendedAmount}} servings per recipe</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"servings-total\">{{meal.numRecipes*meal.numPeople * meal.recommendedAmount}} servings total</div>\n" +
    "          </div>\n" +
    "          <div class=\"select-container\">\n" +
    "            <p class=\"serving-price\">${{meal.cost}}/serving</p>\n" +
    "            <button class=\"button btn-default btn-select btn-green\" ng-click=\"confirmMealPlanChoice(meal.recommendedAmount, meal.isFamilyPlan)\">Select</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("carousel-meals/carousel-meals.tpl.html","<div class=\"carousel-meals\"><div class=\"owl-carousel\" id=\"loved-meals-carousel\"><div class=\"loved-meal\" ng-repeat=\"meal in meals\" ng-init=\"$last &amp;&amp; carouselRenderFinished('lovedMeals')\"><!-- TODO: MAC - Add support for non-linked cards--><a href=\"\" ui-sref=\"{{meal.state}}\" title=\"{{meal.name}}\" track-click=\"\" event-name=\"{{meal.clickEvent}}\"><img class=\"hidden-xs\" ng-src=\"{{meal.mealImages.desktop}}\" ng-srcset=\"{{meal.mealImages.desktopRetina}} 2x\" alt=\"{{meal.name}}\"><img class=\"visible-xs\" ng-src=\"{{meal.mealImages.mobile}}\" ng-srcset=\"{{meal.mealImages.mobileRetina}} 2x\" alt=\"{{meal.name}}\"><div class=\"content\"><h3 class=\"title\">{{ meal.name }}</h3><div class=\"understated\"><p class=\"hidden-xs\" ng-bind-html=\"meal.description\"></p><p class=\"visible-xs\" ng-bind-html=\"meal.descriptionShort\"></p></div><h3 class=\"meal-type\">{{ meal.mealPlan }}</h3><!-- TODO: MAC - Add support for quotes--></div></a></div></div><div class=\"btn-carousel btn-carousel-previous\" ng-click=\"carouselPrevious('lovedMeals')\" track-click=\"\" event-name=\"leftarrowmostloved\"><span class=\"sr-only\">Previous Loved Meal</span></div><div class=\"btn-carousel btn-carousel-next\" ng-click=\"carouselNext('lovedMeals')\" track-click=\"\" event-name=\"rightarrowmostloved\"><span class=\"sr-only\">Next Loved Meal</span></div></div>")

$templateCache.put("carousel-testimonials/carousel-testimonials.tpl.html","<carousel class=\"carousel testimonials-content hidden-xs\" interval=\"8000\"><slide ng-repeat=\"testimonial in testimonials\" active=\"$first\"><div class=\"post\"><p class=\"testimonials-quote text-center\"><img class=\"testimonials-quote-sign\" src=\"//cdn.greenchef.com/assets/quote@1x.4d6b73bd.png\" srcset=\"//cdn.greenchef.com/assets/quote@2x.51372be7.png 2x\" alt=\"Quote sign\"></p><p class=\"testimonials-title\">{{ testimonial.title }}</p><p class=\"testimonials-text\" ng-bind-html=\"testimonial.content\"></p><p class=\"testimonials-author\">{{ testimonial.author }}</p></div></slide></carousel>")

$templateCache.put("home/v2.home.tpl.html","<div class=\"homepage-fall-2018\"><div class=\"jumbotron\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"content\"><h1>Eating well just got easier</h1><p>Cook clean, affordable dinners week after week with step-by-step recipes, select pre-measured, premium ingredients, and meal plans for all diets.</p><ul class=\"actions list-unstyled list-inline\"><li><a class=\"btn-start\" href=\"#\" ui-sref=\"sign-up\" track-sign-up=\"\" track-click=\"\" event-name=\"startcooking\">Get Started</a></li></ul><div class=\"next-section hidden-xs hidden-sm\" track-click=\"\" event-name=\"downarrow\" ng-click=\"scrollToThreeSteps()\"></div></div></div></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><section id=\"three-steps\"><p>Green Chef delivers organic ingredients and easy recipes to cook incredible meals.</p><h2>Dinner is just 3 steps away</h2><ol class=\"list-unstyled list-inline\" id=\"dinner-steps\"><li ng-repeat=\"step in dinnerSteps\" ng-class-odd=\"'flipped'\"><img ng-src=\"{{step.url}}\" ng-srcset=\"{{ step.urlRetina}} 2x\" alt=\"{{ step.name }}\"><div class=\"info\"><h3>{{ step.name }}</h3><p>{{ step.description }}</p></div></li></ol><ul class=\"list-unstyled list-inline\"><li><a class=\"btn-start\" href=\"\" ui-sref=\"sign-up\" track-sign-up=\"\" track-click=\"\" event-name=\"signup3steps\">Start Cooking</a></li></ul></section></div></div></div><div class=\"container container-wide\"><div class=\"row\"><div class=\"col-xs-12\"><section id=\"meal-plans\"><h2>Meal plans made for your lifestyle.</h2><div class=\"carousel-wrap\"><div class=\"owl-carousel\" id=\"meal-plans-carousel\"><div class=\"meal-plan\" ng-repeat=\"mealPlan in mealPlans\" ng-init=\"$last &amp;&amp; carouselRenderFinished('mealPlans')\"><a class=\"thumb\" href=\"\" ui-sref=\"{{mealPlan.state}}\" title=\"{{mealPlan.displayName}}\" track-click=\"\" event-name=\"{{mealPlan.home.posterImage.clickEvent}}\"><img class=\"hidden-xs\" ng-src=\"{{mealPlan.home.posterImage.url}}\" ng-srcset=\"{{mealPlan.home.posterImage.urlRetina}} 2x\" alt=\"{{mealPlan.displayName}}\"><img class=\"visible-xs\" ng-src=\"{{mealPlan.home.posterImage.urlMobile}}\" ng-srcset=\"{{mealPlan.home.posterImage.urlMobileRetina}} 2x\" alt=\"{{mealPlan.displayName}}\"></a><div class=\"content understated\"><p class=\"hidden-xs\" ng-bind-html=\"mealPlan.description\"></p><p class=\"visible-xs\" ng-bind-html=\"mealPlan.descriptionShort\"></p></div></div></div><div class=\"btn-carousel btn-carousel-previous\" ng-click=\"carouselPrevious('mealPlans')\" track-click=\"\" event-name=\"leftarrowposter\"><span class=\"sr-only\">Previous Meal Plan</span></div><div class=\"btn-carousel btn-carousel-next\" ng-click=\"carouselNext('mealPlans')\" track-click=\"\" event-name=\"rightarrowposter\"><span class=\"sr-only\">Next Meal Plan</span></div></div></section></div></div></div><div class=\"container container-wide\"><div class=\"row\"><div class=\"col-xs-12\"><section id=\"loved-meals\"><h2 class=\"loved-meals-title\">The meals our customers are saying “more” to.</h2><carousel-meals meals=\"lovedMeals\"></carousel-meals></section></div></div></div><div class=\"container container-full\" id=\"greenchef-easy\"><div class=\"row\"><div class=\"col-xs-12\"><h3>Green Chef is easy-peasy.</h3><div class=\"content\"><p class=\"understated\" ng-repeat=\"bullet in easyPeasy\">{{bullet.text}}</p></div><div class=\"actions\"><ul class=\"list-unstyled list-inline\"><li><a class=\"btn-start\" href=\"\" ui-sref=\"sign-up\" track-sign-up=\"\" track-click=\"\" event-name=\"Getcookingeasy\">Get Cooking</a></li></ul></div></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><section id=\"social-tweets\"><h2 class=\"social-tweets-title\">What our green chefs have to say.</h2><carousel-twitter posts=\"communityPosts\"></carousel-twitter></section></div></div></div><div class=\"container container-full\" id=\"suppliers\"><div class=\"row\"><div class=\"col-xs-12\"><section><h2>Feel great about your food.</h2><p>It's right in the name: Green Chef is all about eating and living green. We are a USDA certified organic company. We work with farmers to source sustainable, delicious ingredients.</p><ul class=\"list-unstyled list-inline\"><li><a class=\"btn-home-v2 btn-start\" href=\"\" ui-sref=\"sign-up\" track-sign-up=\"\" track-click=\"\" event-name=\"joinnow_bottom\">Join Now</a></li></ul><div class=\"ccof-organic\"><span class=\"sr-only\">California Certified Organic Farmers</span></div><div class=\"usda-organic\"><span class=\"sr-only\">Greenchef is a certified organic company.</span></div></section></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><section id=\"press-logos\"><ul class=\"list-unstyled\"><li class=\"logo\" ng-repeat=\"logo in pressLogos\"><img class=\"logo-{{logo.name}}\" ng-src=\"{{logo.url}}\" ng-srcset=\"{{logo.urlRetina}} 2x\" alt=\"{{logo.name}}\"></li></ul></section></div></div></div></div>")

$templateCache.put("carousel-twitter/carousel-twitter.tpl.html","<carousel class=\"carousel carousel-twitter\" id=\"carousel-community\" interval=\"5000\"><slide ng-repeat=\"post in posts\" active=\"$first\"><div class=\"post\"><div class=\"header\"><img class=\"profile-image\" ng-src=\"{{post.profileImage}}\" ng-srcset=\"{{ post.profileImageRetina}} 2x\"><div class=\"author\"><h4 class=\"name\">{{post.name}}</h4><p class=\"page\">{{post.twitterHandle}}</p></div><img class=\"twitter-icon\" src=\"//cdn.greenchef.com/assets/Icons/social-buttons/twitter-logo-white@1x.ad4576da.png\" srcset=\"//cdn.greenchef.com/assets/Icons/social-buttons/twitter-logo-white@2x.a72a3ab8.png 2x\"></div><div class=\"content\"><p>{{post.tweet}}</p><p ng-show=\"post.location\">{{post.location}}</p></div></div></slide></carousel>")

$templateCache.put("landing/menus-landing.tpl.html","<div class=\"v3-page menus-landing\" ng-class=\"$state.current.name\"><section class=\"wrap-intro introduction landing-introduction\"><div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-250\"></div><div class=\"section-info\"><h2 class=\"introduction-title\">{{ introduction.title }}</h2><div class=\"wrapper-content\"><div class=\"short-content-container\"><p class=\"short-content hidden-xs\">{{ introduction.desc }}</p><p class=\"short-content visible-xs\">{{ introduction.descMobile }}</p><p class=\"price-per-serving\">{{price|currency:$}}<span class=\"text\"> per serving</span></p><a class=\"btn-landing btn-start\" href=\"\" ng-click=\"getStarted()\" track-click=\"\" event-name=\"start{{mealPlan}}inbanner\">{{ introduction.btnText }}</a><p class=\"noted\">No commitment. Flexible subscription. Easily skip or cancel.</p></div></div></div><span class=\"next-section\" ng-click=\"scrollTo()\" track-click=\"\" event-name=\"downarrow\"></span><span class=\"certify\"></span></section><section class=\"wrap-intro partner\"><gc-press-logos></gc-press-logos></section><section class=\"wrap-intro differently vegan\"><h2 class=\"differently-title\">{{ differently.title }}</h2><div class=\"section-info\"><div class=\"wrapper-content\"><div class=\"differently-item\" ng-repeat=\"item in differently.data\"><div class=\"differently-item-thumbnail\"><img class=\"hidden-xs\" ng-src=\"{{item.url}}\" ng-srcset=\"{{ item.urlRetina}} 2x\" alt=\"{{ item.title }}\"><img class=\"visible-xs\" ng-src=\"{{item.urlMobile}}\" ng-srcset=\"{{ item.urlMobileRetina}} 2x\" alt=\"{{ item.title }}\"></div><div class=\"differently-item-info\"><h3 class=\"differently-item-info-title\">{{ item.title }}</h3><p class=\"differently-item-info-desc\">{{ item.desc }}</p></div></div></div></div></section><section id=\"loved-meals\"><h2 class=\"loved-meals-title\">Our most-loved meals.</h2><carousel-meals meals=\"lovedMeals\"></carousel-meals></section><div ng-include=\"'landing/_how-does-gc-work.tpl.html'\"></div><div ng-include=\"'landing/_why-greenchef.tpl.html'\"></div><section class=\"wrap-intro getting\"><h2 class=\"getting-title\">What You Get</h2><div class=\"section-info\"><div class=\"wrapper-content\"><div class=\"short-content-container\"><p class=\"short-content-desc\" ng-repeat=\"content in getting\">{{ content.desc }}</p></div><p class=\"start-label\">Starting At Just</p><p class=\"price-serving\"><span class=\"price-serving-integer\">${{ getPriceInteger(price) }}.</span><span class=\"price-serving-decimal\">{{ getPriceDecimal(price) }}</span><span class=\"price-serving-text\">/serving</span></p></div><a class=\"btn-landing btn-get-cooking\" href=\"\" ng-click=\"getStarted()\" track-click=\"\" event-name=\"getcooking{{mealPlan}}\">Get Cooking</a></div></section><section class=\"wrap-intro know-more\"><h2 class=\"know-more-title\">{{ knowMore.title }}</h2><div class=\"section-info\"><div class=\"wrapper-content\"><ul class=\"list-unstyled know-more-list\"><li class=\"know-more-item\" ng-repeat=\"item in knowMore.data\"><p class=\"know-more-item-title\"><span ng-click=\"item.isClose = !item.isClose\" track-click=\"\" event-name=\"{{ item.clickEvent }}\">{{ item.title }}</span><span class=\"pull-right arrow\" ng-class=\"{down: !item.isClose}\" ng-click=\"item.isClose = !item.isClose\"></span></p><div class=\"know-more-item-desc\" collapse=\"item.isClose\" ng-bind-html=\"item.desc\"></div></li></ul></div></div></section><section class=\"wrap-intro introduction start-cooking\"><div class=\"background-image\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-350\"></div><div class=\"section-info\"><h2 class=\"start-cooking-title\">{{ startCooking.title }}</h2><div class=\"wrapper-content\"><div class=\"short-content-container\"><p class=\"short-content hidden-xs\">{{ startCooking.desc.desktop }}</p><p class=\"short-content visible-xs\">{{ startCooking.desc.mobile }}</p><p class=\"price-per-serving\">{{price|currency:$}}<span class=\"text\"> per serving</span></p><a class=\"btn-landing btn-cook\" href=\"\" ng-click=\"getStarted()\" track-click=\"\" event-name=\"cook{{mealPlan}}2\">{{ startCooking.btnText }}</a><p class=\"noted\">No commitment. Flexible subscription. Easily skip or cancel.</p></div></div></div></section></div>")

$templateCache.put("landing/reviews.tpl.html","<div class=\"reviews\"><div class=\"reviews-banner hidden-xs\"><img class=\"reviews-banner-text\" src=\"//cdn.greenchef.com/assets/Photos/Reviews/banner-text-overlay.9e03c62a.svg\" alt=\"\"></div><div class=\"reviews-banner visible-mobile\"><img class=\"reviews-banner-text\" src=\"//cdn.greenchef.com/assets/Photos/Reviews/banner-text-overlay_mobile.9e03c62a.svg\" alt=\"\"></div><div class=\"container\"><div class=\"reviews-block hidden-xs\" ng-repeat=\"review in listReviews\"><h2 class=\"reviews-title text-left text-uppercase\">{{ review.titleReview }}</h2><div class=\"reviews-block-wrap\" ng-if=\"$even\"><div class=\"review-image-wrap\"><a href=\"{{review.instagramLink}}\" target=\"_blank\"><img class=\"review-image\" ng-src=\"{{ review.reviewImage1x }}\" ng-srcset=\"{{ review.reviewImage2x}} 2x\"></a></div><div class=\"reviews-content-wrap\"><div class=\"reviewer-info\"><a href=\"{{review.instagramLink}}\" target=\"_blank\"><img class=\"reviewer-avatar\" ng-src=\"{{ review.userImage1x }}\" ng-srcset=\"{{  review.userImage2x }} 2x\"><p class=\"reviewer-name\">@{{review.reviewer}}</p></a></div><div class=\"review-content\">{{ review.contentReview }}</div><div class=\"link-to-sign-up\"><a class=\"text-uppercase text-center\" track-sign-up=\"\" track-click=\"\" event-name=\"{{ review.clickEvent }}\" ui-sref=\"sign-up\">{{ review.textButton }}</a></div></div><div class=\"instagram-icon-wrap\"><img class=\"instagram-icon\" src=\"//cdn.greenchef.com/assets/Photos/Reviews/instagram-icon@1x.7e9ff68c.png\" srcset=\"//cdn.greenchef.com/assets/Photos/Reviews/instagram-icon@2x.26057a63.png 2x\"></div></div><div class=\"reviews-block-wrap\" ng-if=\"$odd\"><div class=\"instagram-icon-wrap\"><img class=\"instagram-icon\" src=\"//cdn.greenchef.com/assets/Photos/Reviews/instagram-icon@1x.7e9ff68c.png\" srcset=\"//cdn.greenchef.com/assets/Photos/Reviews/instagram-icon@2x.26057a63.png 2x\"></div><div class=\"reviews-content-wrap\"><div class=\"reviewer-info\"><a href=\"{{review.instagramLink}}\" target=\"_blank\"><img class=\"reviewer-avatar\" ng-src=\"{{ review.userImage1x }}\" ng-srcset=\"{{  review.userImage2x }} 2x\"><p class=\"reviewer-name\">@{{review.reviewer}}</p></a></div><div class=\"review-content\">{{ review.contentReview }}</div><div class=\"link-to-sign-up\"><a class=\"text-uppercase text-center\" ui-sref=\"sign-up-v2.welcome\">{{ review.textButton }}</a></div></div><div class=\"review-image-wrap\"><a href=\"{{review.instagramLink}}\" target=\"_blank\"><img class=\"review-image\" ng-src=\"{{ review.reviewImage1x }}\" ng-srcset=\"{{ review.reviewImage2x}} 2x\"></a></div></div><div class=\"break-line\"></div></div><div class=\"reviews-block visible-xs\" ng-repeat=\"review in listReviews\"><h2 class=\"reviews-title text-left text-uppercase\">{{ review.titleReview }}</h2><div class=\"reviewer-info\"><a href=\"{{review.instagramLink}}\" target=\"_blank\"><img class=\"reviewer-avatar\" ng-src=\"{{ review.userImage1x }}\" ng-srcset=\"{{  review.userImage2x }} 2x\"><p class=\"reviewer-name\">@{{review.reviewer}}</p></a><img class=\"instagram-icon\" src=\"//cdn.greenchef.com/assets/Photos/Reviews/instagram-icon@1x.7e9ff68c.png\" srcset=\"//cdn.greenchef.com/assets/Photos/Reviews/instagram-icon@2x.26057a63.png 2x\"></div><div class=\"review-image-wrap\"><a href=\"{{review.instagramLink}}\" target=\"_blank\"><img class=\"review-image\" ng-src=\"{{ review.reviewImage1x }}\" ng-srcset=\"{{  review.reviewImage2x }} 2x\"></a></div><p class=\"review-content\">{{ review.contentReview }}</p><div class=\"link-to-sign-up\"><a class=\"text-uppercase text-center\" ui-sref=\"sign-up-v2.welcome\">{{ review.textButton }}</a></div><div class=\"break-line\"></div></div><section id=\"social-tweets\"><carousel-twitter posts=\"communityPosts\"></carousel-twitter></section></div></div>")

$templateCache.put("my-account/1-free-meals.tpl.html","<div class=\"row free-meals show-both\"><div class=\"col-sm-12 free-meal-column\"><!-- version 2--><div class=\"referrals-v2\"><!-- Give gifts section--><div class=\"give-gifts\"><div class=\"header-banner\"><div class=\"caption-overlay\"><div class=\"caption-wrapper\"><div class=\"divider\"></div><p class=\"desc\">Get $25 when you treat your friends to dinner.</p></div></div></div><h3 class=\"section-title\">You have <span class=\"referrals-data\">{{referralData.referralsAvailable}}</span> free gift{{(referralData.referralsAvailable === 0 || referralData.referralsAvailable > 1) ? \"s\" : \"\"}} to give!</h3><form class=\"form-inline invite-form wrap-section-content\" name=\"referralForm\"><p class=\"desc\">Gifts are a free week of our 2-person plan that you can send to friends and family who haven’t tried Green Chef. When they get their second delivery, you get $25 towards your next purchase.*</p><div class=\"sending-referral-wrapper\" ng-if=\"referralData.referralsAvailable &gt; 0\"><div class=\"cell invitee\"><label class=\"input-label\">Email</label><input class=\"invitee-email input-share-info form-control\" name=\"email\" type=\"email\" ng-model=\"referral.email\" ng-keydown=\"referralFormState.submitted = false\" required=\"\"><label class=\"error\" ng-show=\"referralFormState.submitted &amp;&amp; (referralForm.email.$error.required || referralForm.email.$error.email)\">{{ getError(referralForm.email.$error) }}</label></div><div class=\"cell sending-state\" ng-class=\"{'sent': referralFormState.isSent}\"><div class=\"invitation-sent\"><span class=\"gift-sent-icon\"></span>                  Gift Sent!</div></div><div class=\"cell sending-button\"><button class=\"btn btn-big btn-green btn-send-gift\" type=\"submit\" ng-click=\"(!referralFormState.submitted &amp;&amp; (referralFormState.submitted = true)) &amp;&amp; submitForm(referralForm)\" ng-show=\"!referralForm.$submitted\">Send Gift Email</button><loading-state text=\"Sending...\" ng-show=\"referralForm.$submitted\"></loading-state></div></div></form><div class=\"text-message-freebie-wrapper visible-xs\" ng-if=\"referralData.referralsAvailable &gt; 0\"><a class=\"share-btn text\" ng-click=\"sendFreebieTextMessage()\">Send Gift Text Message</a><loading-state text=\"Sending...\" ng-show=\"referralFormState.sendingTextMessage\"></loading-state><p class=\"out-of-gift\" ng-if=\"referralData.referralsAvailable == 0\">You’re out of free gifts right now. Don’t worry,<br class=\"hidden-xs\"> you can always share Green Chef by using your link below.</p></div></div><div class=\"section-divider\"></div><!-- More ways to share section--><div class=\"more-ways-to-share\"><h3 class=\"section-title\">More Ways To Share</h3><form class=\"form-horizontal wrap-section-content\"><p class=\"desc customer-description\" ng-html-compile=\"linkData.customerDescription\"></p><div class=\"link-box-wrapper\"><label class=\"input-label\">Share your link now:</label><input class=\"link-box input-share-info\" onclick=\"this.setSelectionRange(0, this.value.length)\" value=\"{{linkData.linkUrl}}\" readonly=\"\"></div><div class=\"share-buttons-desktop hidden-xs clearfix\"><a class=\"share-btn facebook\" ng-click=\"shareFacebook()\">Share</a><a class=\"share-btn twitter\" ng-click=\"shareTwitter()\">Tweet</a><a class=\"share-btn google\" ng-click=\"shareGoogle()\">Share</a><a class=\"share-btn email\" ng-click=\"shareEmail()\">Email</a><a class=\"share-btn nextdoor\" href=\"http://nextdoor.com\" target=\"_blank\" ng-click=\"goToNextdoor()\">Nextdoor</a></div><div class=\"share-buttons-mobile visible-xs-block clearfix\"><a class=\"share-btn facebook\" ng-click=\"shareFacebook()\">Facebook</a><a class=\"share-btn twitter\" ng-click=\"shareTwitter()\">Twitter</a><a class=\"share-btn google\" ng-click=\"shareGoogle()\">Google+</a><a class=\"share-btn email\" ng-click=\"shareEmail()\">Email</a><a class=\"share-btn text\" ng-click=\"shareText()\">Text Message</a><a class=\"share-btn nextdoor\" href=\"http://nextdoor.com\" target=\"_blank\" ng-click=\"goToNextdoor()\">Nextdoor</a></div></form></div><div class=\"section-divider\"></div><!-- Your referrals section--><div class=\"your-referrals\"><h3 class=\"section-title\">Share Summary</h3><div class=\"section-divider hidden-xs\"></div><div class=\"referrals-table\"><div class=\"referrals-row\"><div class=\"referrals-col-a\"><p>$25 Credits available: <span class=\"referrals-data\">{{ linkData.availableRewardCount }}</span></p></div><div class=\"referrals-col-b\"><p>Friends who’ve joined: <span class=\"referrals-data\">{{ linkData.registeredCount }}</span></p><p>Friends who’ve ordered their 2nd week: <span class=\"referrals-data\">{{ linkData.grantedCount }}</span></p></div></div></div><div class=\"section-divider hidden-xs\"></div><div class=\"wrap-sent-invites wrap-section-content\" ng-if=\"referralData.sentReferrals.length &gt; 0\"><table><tbody><tr><th class=\"emailCol\">Email/Name</th><th class=\"shareTypeCol\">Share type</th><th class=\"statusCol\">Status</th></tr><tr ng-repeat=\"referral in referralData.sentReferrals\"><td ng-if=\"referral.shareType === 'Share Link'\"><span class=\"ellipsis\">{{referral.firstName}} {{referral.lastName | limitTo: 1}}</span></td><td ng-if=\"referral.shareType === 'Free Gift'\"><span class=\"ellipsis\">{{referral.email}}</span></td><td>{{referral.shareType}}</td><td><div class=\"wrap-resend-referral\" resend-referral=\"\"><div class=\"referral-status\">{{referral.status}}<button class=\"btn btn-link hidden-xs resend-button\" ng-show=\"referral.status == 'Pending'\" ng-click=\"resendReferral([referral])\"></button><button class=\"btn btn-link visible-xs btn-green btn-resend-text\" ng-click=\"resendFreebieTextMessage(referral)\" ng-show=\"referral.status === 'Pending' &amp;&amp; referral.deliveryType === 'text'\">Resend</button></div><span class=\"gift-resent hidden\">Gift resent</span></div></td></tr></tbody></table><div class=\"wrap-resend-referral-mb visible-xs\"><select class=\"form-control select-resend-referral\" ng-model=\"resendData\"><option value=\"\">Select recipient to resend gift</option><option ng-repeat=\"referral in resendReferrals | orderBy:'email'\" value=\"[{{referral}}]\">{{referral.email}}</option><option value=\"{{resendReferrals}}\">Resend {{resendReferrals.length}} pending gift{{resendReferrals.length > 1 ? \"s\" : \"\"}}</option></select><button class=\"btn btn-big btn-green btn-resend-referral\" ng-click=\"resendReferral(resendData);removeReferralSent(resendData)\" ng-disabled=\"resendReferrals.length==0 || !resendData\">Send</button></div></div><p class=\"help-msg wrap-section-content\">*Credits will be automatically applied to future deliveries. One credit per delivery.</p></div></div><!-- end version 2--></div></div>")

$templateCache.put("my-account/1.1-email-modal.tpl.html","<form class=\"form-horizontal\" role=\"form\" name=\"emailForm\" novalidate=\"\" ng-submit=\"sendEmail(emailForm)\"><div class=\"close\" ng-click=\"cancelEmail(emailForm)\"></div><div class=\"your-plan\"><div class=\"row\"><h2 class=\"upper\">Send Email Invites</h2></div><div class=\"form-group\"><label for=\"\">Enter emails separated by commas<br class=\"visible-xs-inline-block\">        (<a class=\"add-email-link\" href=\"\" ng-click=\"openCloudsponge()\">add emails from my address book</a>)</label><input class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Email Addresses\" ng-model=\"shareEmailAddresses\"><!-- &lt;!&ndash;--><!-- #4 do something with the user's contacts:--><!-- This textarea will be populated with the contacts returned by CloudSponge.--><!-- This is useful if #contact_list is the To: field in an email form.--><!-- &ndash;&gt;--><!-- <textarea id=\"contact_list\" style=\"width:450px;height:82px\"></textarea>--></div><div class=\"form-group\"><label for=\"\">Email subject</label><input class=\"form-control\" id=\"subject\" type=\"text\" name=\"subject\" ng-model=\"customSubject\"></div><div class=\"form-group\"><label for=\"body\">Add a message</label><textarea class=\"form-control\" id=\"body\" rows=\"8\" name=\"body\" ng-model=\"customText\"></textarea></div><div class=\"btn-wrapper row\"><button class=\"btn btn-green btn-big\" type=\"button\" ng-click=\"sendEmail(emailForm)\">Send</button></div></div></form>")

$templateCache.put("my-account/2-account-info.tpl.html","<div class=\"row\"><div class=\"col-sm-12\"><div class=\"top-alert\" ng-if=\"!!alerts.alertContent\"><div class=\"alert-content\">{{alerts.alertContent}}</div></div><form class=\"account-form account-info-form\"><div class=\"account-info-section\"><div class=\"row\"><div class=\"col-15 col-xs-12 col-header\"><h2 class=\"upper\">Account Info<span class=\"btn-green btn btn-small\" ng-click=\"editAccount()\">Edit</span></h2><span class=\"btn-link hidden-xs text-uppercase\" ng-click=\"editAccount()\">Edit</span></div><div class=\"col-15 col-xs-12\"><h3>Name</h3><p class=\"text-capitalize\">{{userInfo.firstName}} {{userInfo.lastName}}</p></div><div class=\"col-25 col-xs-12\"><h3>Email</h3><p>{{userInfo.email}}</p></div><div class=\"col-15 col-xs-12\"><h3>Password</h3><p>********</p></div></div></div><div class=\"account-info-section\"><div class=\"row\"><div class=\"col-15 col-xs-12 col-header\"><h2 class=\"upper\">Delivery<span class=\"btn-green btn btn-small\" ng-click=\"editDelivery()\">Edit</span></h2><span class=\"btn-link hidden-xs text-uppercase\" ng-click=\"editDelivery()\">Edit</span></div><div class=\"col-15 col-xs-6 col-address\"><h3>Address</h3><p><span>{{order.name}}</span><br><span>{{order.addressLine1}}</span><br><span ng-if=\"order.addressLine2\">{{order.addressLine2}}<br></span><span>{{order.city}}</span>, {{order.state | uppercase}} {{order.zipCode}}<br></p></div><div class=\"col-15 col-xs-6\"><h3>Address type</h3><p>{{order.addressType | uppercase}}</p></div><div class=\"col-25 col-xs-12\"><h3>Phone</h3><p>{{order.phoneNumber}}</p></div></div></div><div class=\"account-info-section\"><div class=\"row\"><div class=\"col-15 col-xs-12 col-header\"><h2 class=\"upper\">Payment<span class=\"btn-green btn btn-small\" ng-click=\"editPayment()\">Edit</span></h2><span class=\"btn-link hidden-xs text-uppercase\" ng-click=\"editPayment()\">Edit</span></div><div class=\"col-15 col-xs-6\"><h3>Name on card</h3><p class=\"text-capitalize\">{{payment.name}}</p></div><div class=\"col-15 col-xs-6\"><h3>Card type</h3><p>{{payment.cardBrand | uppercase}}</p></div><div class=\"col-15 col-xs-6 col-card-number\"><h3>Card number</h3><p class=\"text-uppercase\" ng-show=\"payment.lastFourDigits\">Ending in {{payment.lastFourDigits}}</p></div><div class=\"col-15 col-xs-6\"><h3>Expiration</h3><p ng-show=\"payment.month || payment.year\">{{payment.month}}/{{payment.year}}</p></div></div></div><div class=\"account-info-section note-info\"><div class=\"row\"><div class=\"col-15 col-xs-12 col-header\"><h2 class=\"upper\">cancel subscription</h2></div><div class=\"col-45 col-xs-12\"><p>To cancel your subscription, click below and follow the instructions. To avoid unwanted deliveries, cancel before your weekly cutoff time (7 days prior to your scheduled delivery date by noon ET).</p><button class=\"btn btn-big btn-cancel upper\" ng-click=\"handleCancel()\" ng-if=\"!showLoadingState\">cancel subscription</button><loading-state ng-if=\"showLoadingState\"></loading-state></div></div></div></form></div></div>")

$templateCache.put("my-account/2.2-delivery-modal.tpl.html","<form class=\"form-horizontal\" role=\"form\" name=\"orderForm\" novalidate=\"\" ng-class=\"formSubmitted ? 'validate' : ''\" ng-submit=\"ok(orderForm)\"><div class=\"close\" ng-click=\"cancelImmediately()\"></div><div class=\"delivery-info\"><h2 class=\"upper\">Delivery Information</h2><div><div class=\"alert\" ng-repeat=\"alert in alerts\" ng-class=\"alert.type\"><button class=\"close\" type=\"button\" ng-click=\"closeAlert()\">x</button>                {{alert.msg}}</div></div><!-- <p class=\"caption\">Changes only affect deliveries starting on {{changeEffectiveDate | amDateFormat:\"dddd, MMMM Do\" }}</p>--><div class=\"form-group\"><div class=\"col-md-12 col-sm-12\" ng-class=\"{error: orderForm.name.$invalid}\"><label for=\"name\">Name</label><input class=\"form-control\" id=\"name\" name=\"name\" ng-model=\"order.name\" required><label class=\"error-msg upper\" ng-show=\"orderForm.name.$error.required\">*please enter a valid name</label></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12 wrap-address-1\" ng-class=\"{error: orderForm.address.$invalid}\"><label for=\"address\">Address Line 1</label><input class=\"form-control\" id=\"address\" placeholder=\"Street address, company name, c/o\" name=\"address\" typeahead=\"address.text for address in tryAutocompleteAddress($viewValue)\" typeahead-on-select=\"populateOtherAddressFields($item, $model, $label)\" ng-model=\"order.addressLine1\" autocomplete=\"off\" required><label class=\"error-msg upper\" ng-show=\"orderForm.address.$error.required\">*please enter a valid address line one</label><label class=\"error-msg upper\" ng-show=\"orderForm.address.$error.invalid\">*Invalid. Please verify the street address.</label></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12 wrap-address-2\" ng-class=\"{error: orderForm.address2.$invalid}\"><label for=\"address2\">Address Line 2</label><input class=\"form-control\" id=\"address2\" placeholder=\"Apartment, suite, unit, building, floor, etc.\" name=\"address2\" ng-model=\"order.addressLine2\"><label class=\"error-msg upper\" ng-show=\"orderForm.address2.$error.invalid\">*Invalid. Please verify the apt/suite.</label></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12\" ng-class=\"{error: orderForm.city.$invalid}\"><div class=\"wrap-city\"><label for=\"city\">City</label><input class=\"form-control\" id=\"city\" name=\"city\" ng-model=\"order.city\" autocomplete=\"off\" required><label class=\"error-msg upper\" ng-show=\"orderForm.city.$error.required\">*please enter a valid city</label><label class=\"error-msg upper\" ng-show=\"orderForm.city.$error.invalid\">*Invalid. Please verify the city.</label><div class=\"wrap-state\" ng-class=\"{error: orderForm.state.$invalid}\"></div><label for=\"state\">State</label><select class=\"selectpicker form-control btn-select\" id=\"state\" name=\"state\" data-size=\"7\" ng-model=\"order.state\" required><option value=\"AL\">AL</option><option value=\"AK\">AK</option><option value=\"AZ\">AZ</option><option value=\"AR\">AR</option><option value=\"CA\">CA</option><option value=\"CO\">CO</option><option value=\"CT\">CT</option><option value=\"DE\">DE</option><option value=\"DC\">DC</option><option value=\"FL\">FL</option><option value=\"GA\">GA</option><option value=\"HI\">HI</option><option value=\"ID\">ID</option><option value=\"IL\">IL</option><option value=\"IN\">IN</option><option value=\"IA\">IA</option><option value=\"KS\">KS</option><option value=\"KY\">KY</option><option value=\"LA\">LA</option><option value=\"ME\">ME</option><option value=\"MD\">MD</option><option value=\"MA\">MA</option><option value=\"MI\">MI</option><option value=\"MN\">MN</option><option value=\"MS\">MS</option><option value=\"MO\">MO</option><option value=\"MT\">MT</option><option value=\"NE\">NE</option><option value=\"NV\">NV</option><option value=\"NH\">NH</option><option value=\"NJ\">NJ</option><option value=\"NM\">NM</option><option value=\"NY\">NY</option><option value=\"NC\">NC</option><option value=\"ND\">ND</option><option value=\"OH\">OH</option><option value=\"OK\">OK</option><option value=\"OR\">OR</option><option value=\"PA\">PA</option><option value=\"PR\">PR</option><option value=\"RI\">RI</option><option value=\"SC\">SC</option><option value=\"SD\">SD</option><option value=\"TN\">TN</option><option value=\"TX\">TX</option><option value=\"UT\">UT</option><option value=\"VT\">VT</option><option value=\"VA\">VA</option><option value=\"WA\">WA</option><option value=\"WV\">WV</option><option value=\"WI\">WI</option><option value=\"WY\">WY</option></select><label class=\"error-msg upper\" ng-show=\"orderForm.state.$error.required\">*please enter a valid state</label><label class=\"error-msg upper\" ng-show=\"orderForm.state.$error.invalid\">*Invalid. Please verify the state.</label></div></div></div><div class=\"form-group\"><div class=\"wrap-zip-code\" ng-class=\"{error: orderForm.zipcode.$invalid}\"><label for=\"zip-code-order\">Zip Code</label><input class=\"form-control\" id=\"zip-code-order\" name=\"zipcode\" placeholder=\"xxxxx\" type=\"text\" ng-model=\"order.zipCode\" ng-pattern=\"/^\\d{5}$/\" autocomplete=\"off\" required><label class=\"error-msg upper\" ng-show=\"orderForm.zipcode.$error.required\">*please enter a valid 5 digit zip code</label><label class=\"error-msg upper\" ng-show=\"orderForm.zipcode.$error.invalid\">*Invalid. Please verify the zip code.</label></div><div class=\"wrap-address-type\"><label for=\"address-type\">Address Type<span class=\"about-tooltip\" id=\"address-type-tooltip\" popover-append-to-body=\"true\" popover-placement=\"top\" popover=\"{{ signupData.order.addressTypeTooltip }}\"></span></label><select class=\"selectpicker form-control btn-select\" id=\"address-type\" ng-model=\"order.addressType\" name=\"addressType\"><option value=\"home\">Residential</option><option value=\"commercial\">Commercial</option></select></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12 wrap-phone\"><label for=\"phone\">Phone Number</label><label class=\"error\" ng-show=\"formSubmitted\">{{ getError(orderForm.phone.$error) }}</label><input class=\"form-control\" id=\"phone\" name=\"phone\" ng-model=\"order.phoneNumber\" placeholder=\"xxx-xxx-xxxx\" required></div></div></div><div class=\"btn-wrapper\"><button class=\"btn btn-green btn-big\" type=\"submit\" ng-show=\"!orderForm.$submitted\">Save Changes</button><loading-state ng-show=\"orderForm.$submitted\"></loading-state></div></form>")

$templateCache.put("my-account/2.3-account-modal.tpl.html","<form class=\"form-horizontal\" role=\"form\" name=\"userForm\" novalidate=\"\" ng-submit=\"ok(userForm)\"><div class=\"close\" ng-click=\"cancel()\"></div><div class=\"account-update\"><h2 class=\"upper\">Account Information</h2><div><div class=\"alert\" ng-repeat=\"alert in alerts\" ng-class=\"alert.type\"><button class=\"close\" type=\"button\" ng-click=\"closeAlert()\">x</button>                {{alert.msg}}</div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12 wrap-first-name\"><label for=\"first-name\">First Name</label><label class=\"error\" ng-show=\"formSubmitted\">{{ getError(userForm.firstname.$error) }}</label><input class=\"form-control first-name-input\" id=\"first-name\" name=\"firstname\" ng-model=\"userInfo.firstName\" required=\"\"></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12 wrap-last-name\"><label for=\"last-name\">Last Name</label><label class=\"error\" ng-show=\"formSubmitted\">{{ getError(userForm.lastname.$error) }}</label><input class=\"form-control last-name-input\" id=\"last-name\" name=\"lastname\" ng-model=\"userInfo.lastName\" required=\"\"></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12\"><label for=\"email\">Email</label><label class=\"error\" ng-show=\"formSubmitted\">{{ getError(userForm.email.$error) }}</label><input class=\"form-control\" id=\"email\" name=\"email\" ng-model=\"userInfo.email\" required=\"\" type=\"email\"></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12\"><label for=\"password\">Password</label><label class=\"error\" ng-show=\"formSubmitted\">{{ getError(userForm.password.$error) }}</label><input class=\"form-control\" id=\"password\" name=\"password\" ng-model=\"userInfo.password\" placeholder=\"Leave blank to use current password\" type=\"password\"></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12\"><label for=\"passwordConfirm\">Re-enter Password</label><label class=\"error\" ng-show=\"formSubmitted\">{{ getError(userForm.passwordConfirm.$error) }}</label><input class=\"form-control\" id=\"passwordConfirm\" name=\"passwordConfirm\" ng-model=\"userInfo.passwordConfirm\" gc-ng-match=\"userInfo.password\" type=\"password\"></div></div></div><div class=\"btn-wrapper\"><button class=\"btn btn-green btn-big\" type=\"button\" ng-click=\"ok(userForm)\" ng-show=\"!updatingUser\">Save Changes</button><loading-state ng-show=\"updatingUser\"></loading-state></div></form>")

$templateCache.put("my-account/2.4-payment-modal.tpl.html","<form class=\"form-horizontal\" role=\"form\" name=\"paymentForm\" novalidate=\"\" ng-submit=\"ok(paymentForm)\"><div class=\"close\" ng-click=\"cancel()\"></div><div class=\"payment-update\"><h2 class=\"upper\">Payment Information</h2><!-- <p class=\"caption\">Changes only affect deliveries starting on {{changeEffectiveDate | amDateFormat:\"dddd, MMMM Do\" }}</p>--><div><div class=\"alert\" ng-repeat=\"alert in alerts\" ng-class=\"alert.type\"><button class=\"close\" type=\"button\" ng-click=\"closeAlert()\">x</button><span ng-html-compile=\"alert.msg\"></span></div></div><div class=\"form-group\"><div class=\"col-md-12 col-sm-12 name-on-card\"><label for=\"name-on-card\">Name on Card</label><input class=\"form-control\" id=\"name-on-card\" name=\"name-on-card\" ng-model=\"payment.name\" required=\"\"><label class=\"error\" ng-show=\"formSubmitted\">{{ getError(paymentForm['name-on-card'].$error) }}</label></div></div><div class=\"form-group\"><div class=\"col-xs-9 wrap-credit-card\"><label for=\"credit-card-number\">Credit Card Number</label><div class=\"stripe-element\" name=\"cardNumber\"><div class=\"card-number\"></div></div><label class=\"error\" ng-show=\"formSubmitted &amp;&amp; stripeCardNumberError\">Invalid card number</label></div><div class=\"col-xs-3 credit-card-image no-padding-left\"><img src=\"//cdn.greenchef.com/assets/credit-card.86723a15.png\"></div></div><div class=\"form-group\"><div class=\"col-xs-6 col-sm-7 wrap-expiration-date\" form-group=\"\" col-xs-6=\"\" col-sm-6=\"\"><label>Expiration Date</label><div class=\"stripe-element\"><div class=\"card-expiry\"></div></div><label class=\"error\" ng-show=\"formSubmitted &amp;&amp; stripeCardExpiryError\">Invalid expiration date</label></div><div class=\"col-xs-5 col-sm-5 cvc-code-certified\"><div class=\"wrap-cvc-code\"><label for=\"cvc-code-number\">CVC code<span class=\"about-tooltip cvc-code-tooltip\" id=\"cvc-code-tooltip\" data-toggle=\"tooltip\" data-placement=\"auto\" popover-placement=\"top\" popover=\"{{ signupData.payment.cvcCodeTooltip}}\"></span></label><div class=\"stripe-element\"><div class=\"card-cvc\"></div></div><label class=\"error\" ng-show=\"formSubmitted &amp;&amp; stripeCardCvcError\">Invalid cvc</label></div></div></div></div><div class=\"btn-wrapper\"><button class=\"btn btn-green btn-big\" type=\"button\" ng-click=\"ok(paymentForm)\" ng-show=\"!updatingCustomer\">Save Changes</button><loading-state ng-show=\"updatingCustomer\"></loading-state></div></form>")

$templateCache.put("my-account/5-reactivate.tpl.html","<div class=\"row reactivate\"><div class=\"col-sm-12\"><div class=\"top-alert\"><div class=\"alert-content\">Your subscription has been canceled.</div></div><form class=\"form-horizontal main-form account-form\" name=\"reactivateForm\"><h2 class=\"title\">Would you like to reactivate?</h2><p class=\"desc\">Your subscription is currently inactive but you can easily reactivate anytime by clicking below.</p><div ng-show=\"!reactivateForm.$submitted\"><button class=\"btn btn-big btn-green\" ng-click=\"reactivate(reactivateForm)\" track-click=\"\" event-name=\"reactivate\">Reactivate subscription</button></div><loading-state ng-show=\"reactivateForm.$submitted\"></loading-state></form></div></div>")

$templateCache.put("my-account/7-order-receipt-modal.tpl.html","<div class=\"receipt-modal\" id=\"exportRecipt\"><div class=\"btn-close\" ng-click=\"cancel()\"></div><div class=\"wrapper-content\"><div class=\"order-receipt-header row\"><a class=\"logo-brand horizontal-logo\" href=\"/home\"></a><div class=\"print-logo\"><img src=\"../assets/Header/horizontal-logo-v3@1x.8d890214.png\" alt=\"greenchef logo\"></div><p class=\"modal-name\">Order Receipt</p></div><div class=\"order-receipt-information text-center\"><p class=\"thanks-for-ordering\">Thanks for ordering from Green Chef!</p><p class=\"card-ending\" ng-if=\"orderReceiptData.lastFourDigits\">Card ending in<span class=\"card-ending-number\">{{orderReceiptData.lastFourDigits}}</span> was processed on</p><p class=\"card-ending-date\" ng-if=\"orderReceiptData.lastFourDigits\">{{orderReceiptData.cutoffTime}}</p><p class=\"menu-plan-name\"> {{orderReceiptData.planName}} : {{orderReceiptData.planType}}</p><p class=\"menu-arrive-date\">Receipt for {{orderReceiptData.arrivalDate}}</p></div><div class=\"receipt-table receipt-summary\"><div class=\"row-item receipt-table-heading\"><div class=\"header-title pull-left\">Recipe Summary</div><div class=\"header-title quantity pull-right\">Qty</div></div><div class=\"receipt-content\"><div class=\"row-item\" ng-repeat=\"recipe in orderReceiptData.recipes track by $index\"><div class=\"receipt-name pull-left\"><p class=\"receipt-data\">{{recipe.mealName}}</p></div><div class=\"quantity-number pull-right\"><p class=\"receipt-data\">{{orderReceiptData.quantity}} meals</p></div></div></div></div><div class=\"receipt-table order-detail\"><div class=\"receipt-table-heading\"><div class=\"header-title\">Order Detail</div></div><div class=\"receipt-content\" ng-if=\"orderReceiptData.subTotal\"><div class=\"row-item\"><div class=\"pull-left\"><p class=\"receipt-data\">Subtotal</p><p class=\"boxes\">(No. of {{ orderReceiptData.boxNum > 1 ? 'boxes' : 'box' }}: {{orderReceiptData.boxNum}})</p></div><div class=\"pull-right\"><p class=\"receipt-data\">{{orderReceiptData.subTotal}}</p></div></div><div class=\"row-item\"><p class=\"pull-left receipt-data\">Delivery</p><div class=\"pull-right receipt-data\">${{orderReceiptData.deliveryFee | number: 0}}</div></div><div class=\"table-row\" ng-repeat=\"coupon in orderReceiptData.coupons\" ng-if=\"orderReceiptData.coupons.length&gt;0\"><div class=\"row-item\"><div class=\"pull-left receipt-data\">[{{coupon.name}}]</div><div class=\"pull-right receipt-data\">{{coupon.value}}</div></div></div></div></div><div class=\"receipt-table order-total\"><div class=\"row-item\"><p class=\"pull-left total-label\">Total</p><p class=\"pull-right total-label number\">${{orderReceiptData.userPrice | number: 2}}</p></div></div><div class=\"order-receipt-footer row\"><div class=\"col-xs-12\"><button class=\"btn\" ng-click=\"printReceipt(); cancel()\">Print Receipt</button><button class=\"btn\" ng-click=\"emailReceipt(); cancel()\">Email Receipt</button></div></div></div></div>")

$templateCache.put("my-account/blocking-modal.tpl.html","<div class=\"close\" ng-click=\"cancel()\"></div><h2 class=\"main-title text-uppercase text-center\">hey!</h2><div class=\"content text-center\"><p class=\"title\">Something has changed.</p><div class=\"main-info\"><p class=\"info\" ng-repeat=\"reason in suspension.reasons | filter: {code: '!' + suspendReasonCSCode}\">{{reason.dataFields.userString}}</p><div class=\"contact\" ng-repeat=\"reason in suspension.reasons | filter: {code: suspendReasonCSCode}\"><p class=\"info\">Customer Service has suspended your account</p><p class=\"info\">{{reason.dataFields.userString}}<a class=\"contact-info\" href=\"mailto:help@greenchef.com\">here</a></p></div></div><p class=\"notice\">Deliveries are currently paused.</p></div><div class=\"btn-wrapper\"><button class=\"btn btn-general btn-white\" type=\"button\" ng-click=\"cancel()\">continue</button></div>")

$templateCache.put("my-account/edit-account-confirmation-modal.tpl.html","<!-- confirmation modal after updating meal plan and account info--><div class=\"close\" ng-click=\"cancelImmediately()\"></div><h2 class=\"main-title text-uppercase text-center\">edits saved!</h2><div class=\"content text-center\"><p class=\"title\">You’ve made the following changes:</p><!-- Account info updated--><div class=\"main-info\"><p class=\"info\" ng-if=\"accountInfoUpdated.name\">*Name on account</p><p class=\"info\" ng-if=\"accountInfoUpdated.email\">Email address</p><p class=\"info\" ng-if=\"accountInfoUpdated.password\">Password</p><p class=\"info\" ng-if=\"deliveryInfoUpdated.address\">*Delivery address information</p><p class=\"info\" ng-if=\"deliveryInfoUpdated.phone\">Phone number</p><p class=\"info\" ng-if=\"paymentInfoUpdated\">*Payment information</p><p class=\"info\" ng-if=\"deliveryInfoUpdated.startDate\">*Start date of delivery frequency</p><p class=\"info\" ng-if=\"deliveryInfoUpdated.frequency\">*Delivery Frequency</p></div><!-- order delivery message--><div class=\"notice-box\" ng-html-compile=\"footerMessage\" ng-if=\"footerMessage &amp;&amp; !invalidDeliveryWindow\"></div><!-- message in case of no delivery address--><div class=\"emphasis-notice-box\" ng-class=\"{'address-no-delivery': addressNoDelivery}\" ng-if=\"addressNoDelivery\"><p class=\"message\">Unfortunately, your area is currently<br class=\"visible-xs\"> unsupported by our deliverers.</p><p class=\"message\">Deliveries have been paused.</p></div><!-- form for selecting new delivery window--><form class=\"edit-delivery-window\" name=\"editDeliveryWindow\" novalidate=\"\" ng-submit=\"ok(editDeliveryWindow)\" ng-if=\"invalidDeliveryWindow\"><div class=\"alert\" ng-repeat=\"alert in alerts\" ng-class=\"alert.type\"><button class=\"close\" type=\"button\" ng-click=\"closeAlert()\">x</button>      {{alert.msg}}</div><div class=\"emphasis-notice-box\"><p class=\"info\">*This address requires a different delivery window:</p><div class=\"dropdown-list\"><span class=\"select-text text-uppercase\" ng-if=\"!order.deliveryWindow\">Please Select One</span><span class=\"select-text text-uppercase\" ng-if=\"order.deliveryWindow\">{{order.deliveryWindow}}s</span><select ng-model=\"order.deliveryWindow\" ng-init=\"order.deliveryWindow = ''\" name=\"deliveryWindow\"><option value=\"\" selected=\"selected\">Please Select One</option><option ng-repeat=\"day in shippingDates.availableDaysOfWeek\" value=\"{{day}}\">{{day}}s</option></select></div></div><div class=\"btn-wrapper\"><button class=\"btn btn-general btn-green btn-save-delivery\" type=\"submit\" ng-disabled=\"!order.deliveryWindow\" ng-if=\"!editDeliveryWindow.$submitted\">Save Delivery Window</button><loading-state ng-if=\"editDeliveryWindow.$submitted\"></loading-state></div></form></div><div class=\"btn-wrapper\" ng-if=\"!invalidDeliveryWindow\"><button class=\"btn btn-general btn-white btn-edit-address\" type=\"button\" ng-if=\"addressNoDelivery\" ng-click=\"editAddress()\">edit address</button><button class=\"btn btn-general btn-white btn-continue\" type=\"button\" ng-click=\"cancelImmediately()\">continue</button></div>")

$templateCache.put("my-account/my-account.tpl.html","<section class=\"my-account-page has-banner-padding v3-page\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-12\"><div class=\"content-wrapper\"><div class=\"suspend-account-state\" ng-include=\"suspendAccountStateTemplate\" ng-if=\"isSuspended &amp;&amp; !$state.includes('my-account.mobile-account-nav')\"></div><div class=\"my-account-content\" ui-view=\"account-content\"></div></div><div class=\"help-message\">Questions about managing your account? Visit our<a href=\"https://help.greenchef.com/hc/en-us/sections/200496655-Your-Account\" target=\"_blank\">FAQs</a></div></div></div></div></section>")

$templateCache.put("my-account/order-history.tpl.html","<div class=\"row order-history\"><div class=\"col-sm-12 wrap-order-history\"><div class=\"main-form account-form account-info-form\"><div class=\"account-info-section\"><div class=\"row\"><div class=\"col-15 col-xs-12 col-header\"><h2 class=\"upper\">Order History</h2></div><!-- list order menus--><div class=\"historical-menus col-45 col-xs-12\"><section class=\"menu-row\" ng-repeat=\"menu in filteredMenus\" ng-show=\"menuHasRecipeContent(menu) &amp;&amp; menu.willShip\"><h2 class=\"upper\">Order for {{menu.arrivalDate | amDateFormat:\"dddd, MMMM Do YYYY\"}}</h2><div class=\"menu-header row\" ng-switch=\"displayMenuStatus(menu)\"><div class=\"col-xs-12\" ng-switch-when=\"shipped\"><p class=\"caption\">Total Cost: ${{displayMenuPrice(menu)}}</p><p class=\"tracking-number\" ng-show=\"menu.status == &quot;shipped&quot;\">Shipment Tracking #:<a ng-repeat=\"entry in menu.tracking\" href=\"{{entry.trackingURL}}\" target=\"_blank\">{{entry.trackingNumber}}</a></p><span class=\"view-receipt-link\" ng-click=\"receiptModal(menu)\">View Receipt</span></div></div><div class=\"row recipe-row\" ng-class=\"{skipped: displayMenuStatus(menu) == 'skip'}\"><div class=\"recipe-item\" ng-class=\"recipesPerMenu(menu) === 2 ? 'col-sm-6': 'col-sm-4'\" ng-repeat=\"recipe in menu.recipes track by $index\"><a ng-if=\"recipe.linkUrl\" href=\"\" ng-click=\"navigateToRecipePage(recipe, false)\"><div class=\"recipe-image\"><img ng-src=\"{{recipe.thumbnailImageUrl}}\"></div></a><div class=\"recipe-image\"><img ng-if=\"!recipe.linkUrl\" ng-src=\"{{recipe.thumbnailImageUrl}}\"></div><div class=\"meal-name meal-name-small\"><a ng-if=\"recipe.linkUrl\" href=\"\" ng-click=\"navigateToRecipePage(recipe, false)\"><h3 ng-bind-html=\"recipe.mealName\"></h3></a><h3 ng-if=\"!recipe.linkUrl\" ng-bind-html=\"recipe.mealName\"></h3></div><div class=\"meal-intro\">{{recipe.mealIntro}}</div></div></div></section><div class=\"text-center wrap-pagination\" ng-show=\"filteredMenus.length\"><pagination total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" max-size=\"maxSize\" previous-text=\"&lt;\" next-text=\"&gt;\"></pagination></div></div><!-- end of list order menus--></div></div></div></div></div>")

$templateCache.put("my-account/suspend-account-state.tpl.html","<h2 class=\"text-uppercase\">hey!</h2><div class=\"suspend-message\"><div ng-if=\"suspendReasonGroups.normal.length &gt; 0\"><div class=\"reason\"><h4 class=\"title text-uppercase\">deliveries are paused</h4><div class=\"message-area\" ng-init=\"info = getReasonInfo(reason)\" ng-repeat=\"reason in suspendReasonGroups.normal\"><a class=\"message\" href=\"\" ng-click=\"info.action()\">{{info.message}}</a><span class=\"action\"><a class=\"link-action\" href=\"\" ng-click=\"info.action()\"><span class=\"hidden-xs\">{{info.linkAction}}</span></a><span class=\"hidden-xs indicator\"><a href=\"\" ng-click=\"info.action()\">></a></span></span></div></div></div><div ng-repeat=\"reason in suspendReasonGroups.other\" ng-if=\"suspendReasonGroups.other.length &gt; 0\" ng-class=\"{'cs-other-reason': suspension.reasons.length &gt; 1}\"><h4 class=\"title text-uppercase\">your account is suspended</h4><div class=\"message-area\"><a class=\"message\" href=\"mailto:help@greenchef.com\">{{reason.dataFields.userString}}.</a><span class=\"action\"><a class=\"link-action\" href=\"mailto:help@greenchef.com\"><span class=\"hidden-xs\">Contact Us</span></a><span class=\"hidden-xs indicator\"><a href=\"mailto:help@greenchef.com\">></a></span></span></div></div></div>")

$templateCache.put("on-the-menu/main/main-menu-page.tpl.html","<div class=\"main-menu\"><div class=\"main-section\"><div class=\"background-image\"></div><div class=\"content text-center\"><h1 class=\"main-title text-uppercase\">Eat Well Every Week</h1><p class=\"intro\">Choose from an affordable menu of nourishing meals, starting at only $10.99 each.</p></div><div class=\"certify\"><span class=\"usda-organic\"></span></div></div><div class=\"top-join-group\"><div class=\"container\"><join-now position=\"top\"></join-now></div></div><div class=\"container\"><!-- Immediately after main section--><div class=\"meal-plan-choice\"><div class=\"btn-group\"><a class=\"btn btn-2-person-plan active\" type=\"button\" href=\"#\" ng-click=\"scrollTo('.btn-2-person-plan', '#person-plan')\" track-click=\"\" event-name=\"twopersonplan\">2-person plan</a><a class=\"btn btn-family-plan\" type=\"button\" href=\"#\" ng-click=\"scrollTo('.btn-family-plan', '#family-plan')\" track-click=\"\" event-name=\"familyplan\">family plan</a></div></div><div class=\"clearfix\"></div><div class=\"meal-plans\"><!-- 2-person plan section--><a class=\"anchor\" id=\"person-plan\"></a><div class=\"two-person-plan meal-plan text-center\"><p class=\"title\">2-person plan</p><p class=\"intro hidden-xs\">Choose the option that's right for you. Get 3 dinners for 2 people delivered weekly (6 meals total).<br> Each delicious dinner is ready in about 30 minutes.</p><p class=\"intro visible-xs\">3 delicious dinners for 2 people.<br> Ready in about 30 mins.</p><p class=\"start-price text-uppercase\">starting at <span class=\"price\">{{twoPersonPlanMinCost|currency:$}}</span> per meal</p><ul class=\"menus-specific row\"><li class=\"col-sm-4 menu-specific\" ng-repeat-start=\"plan in twoPersonPlans\"><a class=\"wrap-link\" ui-sref=\"menus.{{plan.internalName}}({plan: plan})\" track-click=\"\" event-name=\"{{plan.internalName}}\"><div class=\"thumb\"><div class=\"overlay\"></div><img class=\"img-responsive\" ng-src=\"{{plan.menusPage.imageURL}}\" ng-srcset=\"{{plan.menusPage.imageRetinaURL}} 2x\"><h4 class=\"name text-uppercase\"><p class=\"name-wrapper\"><span class=\"hidden-xs\">See what's cooking</span></p></h4><div class=\"gf-badge\" ng-if=\"plan.glutenCertified\"><img class=\"img-responsive\" src=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_MEDIUM_WHITE@1x.9bfbbaef.png\" srcset=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_MEDIUM_WHITE@2x.db1b6d73.png 2x\"></div></div><p class=\"menu-title\">{{plan.displayName}}</p><p class=\"desc\">{{plan.menusPage.summary}}</p></a><div class=\"start-menu\"><a class=\"learn-more visible-xs\" ui-sref=\"menus.{{plan.internalName}}({plan: plan})\">Learn more</a><a class=\"link text-center\" href=\"\" ng-click=\"gotoSignup()\" track-sign-up=\"\" track-click=\"\" event-name=\"start{{plan.internalName}}\">SELECT THIS PLAN</a></div></li><div class=\"clearfix\" ng-if=\"$index === 2\" ng-repeat-end=\"\"></div></ul></div><a class=\"anchor\" id=\"family-plan\"></a><div class=\"family-plan meal-plan text-center\"><p class=\"title\">Family Plan</p><p class=\"intro hidden-xs\">2 wholesome dinners for a family of 4. Designed to be served family-style for parents<br> and kids alike. Ready in around 30-45 minutes.</p><p class=\"intro visible-xs\">2 wholesome dinners for a family of<br> 4 – for parents and kids alike.</p><p class=\"start-price text-uppercase\">starting at <span class=\"price\">{{familyPlanMinCost|currency:$}}</span> per meal</p><ul class=\"menus-specific row\"><li class=\"col-sm-4 menu-specific\" ng-repeat=\"plan in familyPlans\"><a class=\"wrap-link\" ui-sref=\"menus.{{plan.internalName}}({plan: plan})\" track-click=\"\" event-name=\"{{plan.internalName}}\"><div class=\"thumb\"><div class=\"overlay\"></div><img class=\"img-responsive\" ng-src=\"{{plan.menusPage.imageURL}}\" ng-srcset=\"{{plan.menusPage.imageRetinaURL}} 2x\"><h4 class=\"name text-uppercase\"><p class=\"name-wrapper\"><span class=\"hidden-xs\">See what's cooking</span></p></h4></div><p class=\"menu-title\">{{plan.displayName}}</p><p class=\"desc\">{{plan.menusPage.summary}}</p></a><div class=\"start-menu\"><a class=\"learn-more visible-xs\" ui-sref=\"menus.{{plan.internalName}}({plan: plan})\">Learn more</a><a class=\"link text-center\" href=\"\" ng-click=\"gotoSignup()\" track-sign-up=\"\" track-click=\"\" event-name=\"start{{plan.internalName}}\">SELECT THIS PLAN</a></div></li></ul></div></div><div class=\"visible-xs\"><join-now position=\"bottom\"></join-now></div><div class=\"community-section col-xs-push-12\"><h3 class=\"text-center\">What our community is saying</h3><carousel-twitter posts=\"communityPosts\"></carousel-twitter></div><div class=\"hidden-xs\"><join-now position=\"bottom\"></join-now></div></div></div>")

$templateCache.put("on-the-menu/plans/menu-specific.tpl.html","<div class=\"v3-page menu-specific {{ data.value }}\"><section class=\"wrap-header\"><div class=\"background-image {{ data.value }}\" data-stellar-ratio=\"0.8\" data-stellar-vertical-offset=\"-250\"></div><div class=\"background-content\"><div class=\"visible-xs\" ng-if=\"data.glutenCertified\"><img class=\"gluten-free-mobile\" src=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_MEDIUM_WHITE@1x.9bfbbaef.png\" srcset=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_MEDIUM_WHITE@2x.db1b6d73.png 2x\"></div><div ng-if=\"!data.glutenCertified\"><div class=\"visible-xs spacer\"></div></div><h1 class=\"menu-name text-uppercase\">{{data.isFamilyPlan ? 'family ': ''}}{{ data.name }}</h1><p class=\"menu-desc\"><span class=\"hidden-xs\">{{ data.menuSpecificSummary }}</span><span class=\"visible-xs\">{{ data.menuSpecificSummaryMobile }}</span></p><p class=\"menu-price text-uppercase\" ng-if=\"showCost\">priced at ${{ cost | number:2 }} per meal</p><div class=\"hidden-xs\" ng-if=\"data.glutenCertified\"><img class=\"gluten-free-desktop\" src=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_LARGE_WHITE@1x.d6857ac1.png\" srcset=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_LARGE_WHITE@2x.326cb77d.png 2x\"></div></div></section><section class=\"wrap-container wrap-menu-new\"><div class=\"menu-new\"><h2 class=\"menu-new-title\">A new menu every week</h2><p class=\"menu-new-nav\"><span class=\"btn-nav menu-new-nav-pre\" ng-class=\"{'invisible': !recipeData.previousMenuDate || !recipeDataPrev}\" ng-click=\"previousMenuV2(recipeData)\" track-click=\"\" event-name=\"leftarrow1_{{recipeData.menuDate}}\"></span><span>{{startOfWeek}} - {{endOfWeek}}</span><span class=\"btn-nav menu-new-nav-next\" ng-class=\"{'invisible': !recipeData.nextMenuDate}\" ng-click=\"nextMenuV2(recipeData)\" track-click=\"\" event-name=\"rightarrow1_{{recipeData.menuDate}}\"></span></p><div class=\"row menu-week\"><div class=\"extra\" ng-class=\"data.isFamilyPlan ? 'custom-carousel-content-item col-sm-1' : ''\"></div><div class=\"custom-carousel-content-item menu-week-item\" ng-repeat=\"recipe in recipes track by $index\" ng-class=\"data.isFamilyPlan ? 'col-sm-5' : 'col-sm-4'\"><div ng-if=\"recipe.isPublished\" track-click=\"\" event-name=\"recipe_{{recipe.recipeVanity}}\"><a href=\"\" ng-click=\"navigateToRecipePage(recipe, true)\"><img src=\"{{recipe.thumbnailImageUrl}}\"></a><a href=\"\" ng-click=\"navigateToRecipePage(recipe, true)\"><div class=\"menu-week-item-title\"><h4 ng-bind-html=\"recipe.mealName\"></h4></div></a></div><div ng-if=\"!recipe.isPublished\"><img ng-src=\"{{recipe.thumbnailImageUrl}}\"><div class=\"menu-week-item-title\"><h4 ng-bind-html=\"recipe.mealName\"></h4></div></div><div class=\"menu-week-item-desc\" ng-bind-html=\"recipe.mealIntro\"></div></div></div></div><div class=\"text-center\"><a class=\"btn btn-menu-specific btn-get-started\" href=\"\" track-sign-up=\"\" track-click=\"\" event-name=\"getstarted\" ng-click=\"gotoSignup()\">Get Started</a></div><div class=\"menu-past\" ng-if=\"favorites &amp;&amp; favorites.length &gt; 0\"><h3 class=\"menu-past-title text-center\">Favorites from the past</h3><div class=\"row menu-past-content\"><div class=\"col-sm-4 menu-past-detail-wrapper\" ng-repeat=\"favoriteFood in favorites\"><a class=\"favorite-food-link\" href=\"\" ng-click=\"navigateToRecipePage(favoriteFood, true)\" track-click=\"\" event-name=\"recipefavorites_{{recipe.recipeVanity}}\"><img class=\"favorite-food-image\" ng-src=\"{{ favoriteFood.thumbnailImageUrl }}\"><div class=\"favorite-food-name\">{{ favoriteFood.name }}</div><div class=\"favorite-food-desc text-center\">{{ favoriteFood.mealIntro }}</div></a></div></div></div></section><section class=\"wrap-footer\"><div class=\"testimonials text-center col-xs-push-12\" ng-if=\"testimonials &amp;&amp; testimonials.length &gt; 0\"><carousel-testimonials testimonials=\"testimonials\"></carousel-testimonials></div><div class=\"landing-banner\" ng-if=\"data.landingBannerStateName\"><a ui-sref=\"{{ data.landingBannerStateName }}\"><div class=\"background-image {{ data.value }}\"></div></a></div><div class=\"all-menus\"><div class=\"all-menus-wrap\"><h3 class=\"title text-center\">Check out all our menus</h3><div class=\"row custom-carousel hidden-xs\"><div class=\"custom-carousel-wrap\"><div class=\"custom-carousel-content\" id=\"all-menus-slide\"><div class=\"col-sm-3 custom-carousel-content-item\" ng-repeat=\"menu in displayAllMenus track by $index\"><a href=\"\" ng-click=\"navigateToMenuPage(menu.value)\" track-click=\"\" event-name=\"{{menu.value}}\"><div class=\"thumb\"><div class=\"overlay\"></div><img class=\"img-responsive\" ng-src=\"{{menu.imageUrL}}\"><div class=\"text\"><p class=\"text-what-cooking\"><span>See what's cooking</span></p></div><div class=\"gf-badge\" ng-if=\"menu.glutenCertified\"><img class=\"img-responsive\" src=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_MEDIUM_WHITE@1x.9bfbbaef.png\" srcset=\"//cdn.greenchef.com/assets/badges/glutenfree/GFicon_MEDIUM_WHITE@2x.db1b6d73.png 2x\"></div></div><h4 class=\"all-menus-name\" ng-if=\"!menu.isFamilyPlan\">{{menu.name}}</h4><h4 class=\"all-menus-name-family\" ng-if=\"menu.isFamilyPlan\">Family</h4><h4 class=\"all-menus-name-family-name\" ng-if=\"menu.isFamilyPlan\">{{menu.name}}</h4></a></div></div></div><div class=\"btn-nav btn-left-arrow\" ng-click=\"nextAllMenu(false)\"></div><div class=\"btn-nav btn-right-arrow\" ng-click=\"nextAllMenu(true)\"></div></div></div><div class=\"row all-menus-nav visible-xs\"><div class=\"col-xs-12\"><carousel class=\"carousel\" id=\"carousel-all-menus\" interval=\"0\"><slide ng-repeat=\"menu in allMenus\" active=\"$first\"><a class=\"carousel-menu\" ui-sref=\"menus.{{menu.value}}({menu: menu})\"><img ng-src=\"{{ menu.imageUrL }}\" alt=\"{{ menu.name }}\"><h4 class=\"carousel-menu-name carousel-menu-title\" ng-if=\"!menu.isFamilyPlan\">{{menu.name}}</h4><div class=\"carousel-menu-name\" ng-if=\"menu.isFamilyPlan\"><p class=\"carousel-menu-title\">family {{menu.name}}</p></div></a></slide></carousel></div></div><div class=\"join-now-group row\"><p class=\"intro col-sm-8\">Get a delicious variety of premium ingredients and chef-crafted recipes delivered weekly.</p><div class=\"col-sm-4 text-uppercase text-right\"><a class=\"btn btn-menu-specific btn-join-now-menu\" href=\"\" track-sign-up=\"\" track-click=\"\" event-name=\"join_below\" ng-click=\"gotoSignup()\">Join Now</a></div></div></div></section></div>")
}]);
})();