(function($) {
  "use strict";

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/

  $(window).on("load", function() {
    $(window).trigger("scroll");
    $(window).trigger("resize");
  });

  $(document).on("ready", function() {
    $(window).trigger("resize");
    mainMenu();
    mobileMenu();
    sideBarHeader();
    stickyHeader();
    customToggleInt();
    bootstrapInt();
    checkMark();
    formField();
    stickyFooter();
    nicescrollInt();
    calendarInt();
    emailEditorInt();
    chattingInt();
    chattingToggle();
    dataTable();
  });

  $(window).on("resize", function() {
    mobileMenu();
  });

  $(window).on("scroll", function() {
    stickyHeader();
  });

  $.exists = function(selector) {
    return $(selector).length > 0;
  };

  /*--------------------------------------------------------------
    1. Header Sctipt
  --------------------------------------------------------------*/

  /* Main Menu */
  function mainMenu() {
    $(".yoo-nav-toggle").on("click", function() {
      $(this).siblings(".yoo-nav").slideToggle();
      $(this).toggleClass("yoo-active");
    });
    $(".yoo-has-children").append('<span class="yoo-dropdown-btn"></span>');
    $(".yoo-dropdown-btn").on("click", function() {
      $(this).siblings("ul, .yoo-megamenu-in, .yoo-vertical-megamenu-in").slideToggle("slow");
      $(this).toggleClass("yoo-active");
    });
  }

  /* Mobile Menu */
  function mobileMenu() {
    if ($(window).width() <= 991) {
      $(".yoo-header").addClass("yoo-mobile-header");
      $(".yoo-nav").addClass("yoo-mobile-nav").removeClass("yoo-desktop-nav");
    } else {
      $(".yoo-header").removeClass("yoo-mobile-header");
      $(".yoo-nav").addClass("yoo-desktop-nav").removeClass("yoo-mobile-nav");
    }
  }

  /* Sticky Header */
  function stickyHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".yoo-header").addClass("yoo-sticky-active");
    } else {
      $(".yoo-header").removeClass("yoo-sticky-active");
    }
  }

  /* Sidebar Header */
  function sideBarHeader() {
    $(".yoo-sidebar-has-children").append('<span class="yoo-dropdown-arrow"><ion-icon name="chevron-forward"></ion-icon></span>');
    $('.yoo-sidebar-nav-dropdown .active').parents('.yoo-sidebar-nav-dropdown').show();
    $('.yoo-sidebar-nav-dropdown .active').parents('.yoo-sidebar-nav-dropdown').siblings('.yoo-dropdown-arrow').addClass('active');
    $(".yoo-sidebar-has-children>a").removeAttr("href").on("click", function() {
      $(this).siblings(".yoo-sidebar-nav-dropdown").slideToggle();
      $(this).siblings(".yoo-dropdown-arrow").toggleClass("active");
      $(this).parents('.yoo-sidebar-has-children').siblings().find('.yoo-sidebar-nav-dropdown').slideUp();
      $(this).parents('.yoo-sidebar-has-children').siblings().find('.yoo-dropdown-arrow').removeClass('active');
    });
    $(".yoo-sidebarheader-toggle").on("click", function() {
      $("body").toggleClass("yoo-sidebar-active");
    });
    // Hover To Class Toggle
    $(".yoo-sidebarheader").hover(
      function() {
        $("body").addClass("yoo-sidebar-hover-active");
      },
      function() {
        $("body").removeClass("yoo-sidebar-hover-active");
      }
    );
  }

  /*--------------------------------------------------------------
    2. Form Active Class
  --------------------------------------------------------------*/
  function formField() {
    $('.level-up .form-control').focusin(function() {
      $(this).parents('.level-up').addClass("active1");
    });
    $('.level-up .form-control').focusout(function() {
      $(this).parents('.level-up').removeClass("active1");
    });

    $('.level-up .form-control').blur(function() {
      if ($(this).val()) {
        $(this).parents('.level-up').addClass('active2');
      } else {
        $(this).parents('.level-up').removeClass('active2');
      }
    });
  }

  /*--------------------------------------------------------------
    3. Toggle Btn
  --------------------------------------------------------------*/
  function customToggleInt() {
    // Custome Toggle Button
    $(".yoo-toggle-btn").on("click", function() {
      $(this).toggleClass("active").siblings(".yoo-dropdown").toggleClass("active");
      $(this).parents("li").siblings().find(".yoo-dropdown, .yoo-toggle-btn").removeClass("active");
      $(this).parents('.yoo-toggle-body').siblings().find('.yoo-dropdown, .yoo-toggle-btn').removeClass('active');
    });
    $('.yoo-form-reset-btn').on('click', function() {
      $(this).parents('.yoo-toggle-body').find('.yoo-toggle-btn, .yoo-dropdown').removeClass('active');
    })
    $(document).on("click", function() {
      $(".yoo-dropdown").removeClass("active").siblings().removeClass("active");
    });
    $(".yoo-dropdown, .yoo-toggle-btn").on("click", function(e) {
      e.stopPropagation();
    });

    // Star Toggle Btn
    $('.yoo-get-star').on('click', function() {
      $(this).toggleClass('active');
    })
    // Toggle Switch
    $('.yoo-switch').on('click', function() {
      $(this).toggleClass('active');
    });
    $('.yoo-people-toggle-btn').on('click', function() {
      $(this).toggleClass('active');
      $('.yoo-messenger-sidebar').toggleClass('active');
    })
  }

  /*--------------------------------------------------------------
    4. Bootstrap Setup Mode
  --------------------------------------------------------------*/
  function bootstrapInt() {
    // Checkbox
    $('.your-checkbox').prop('indeterminate', true);
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // Popover
    $('[data-toggle="popover"]').popover();
    // Toast
    $('.toast').toast();
  }
  /*--------------------------------------------------------------
    5. Check Mark
  --------------------------------------------------------------*/
  function checkMark() {
    $('.yoo-check-mark').on('click', function() {
      $(this).toggleClass('active');
    })
    $('.yoo-check-mark-all').on('click', function() {
      $(this).toggleClass('active');
    })
    $('.yoo-check-mark-all .yoo-first').on('click', function() {
      $('.yoo-check-mark').addClass('active');
    })
    $('.yoo-check-mark-all .yoo-last').on('click', function() {
      $('.yoo-check-mark').removeClass('active');
    })
  }

  /*--------------------------------------------------------------
    6. sticky footer
  --------------------------------------------------------------*/
  function stickyFooter() {
    $('.yoo-sticky-footer').parents('.yoo-content').append('<div class="yoo-height-b40 yoo-height-lg-b0"></div>');
  }

  /*--------------------------------------------------------------
    7. Nice Scroll
  --------------------------------------------------------------*/
  function nicescrollInt() {
    Scrollbar.initAll();
  }

  /*--------------------------------------------------------------
    8. Calendar
  --------------------------------------------------------------*/
  function calendarInt() {
    if ($.exists("#yoo-calendar")) {
      $('#yoo-calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2019-01-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [{
            title: 'All Day Event',
            start: '2019-01-01T20:00:00'
          },
          {
            title: 'Long Event',
            start: '2019-01-07T10:00:00',
            end: '2019-01-08T16:00:00'
          },
          {
            title: 'Repeating Event',
            start: '2019-01-10T16:00:00'
          },
          {
            title: 'Conference',
            start: '2019-01-10T09:00:00'
          },
          {
            title: 'Meeting',
            start: '2019-01-12T10:30:00',
            end: '2019-01-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2019-01-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2019-01-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2019-01-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2019-01-01T14:00:00',
            end: '2019-01-02T14:30:00'
          },
          {
            title: 'Birthday Party',
            start: '2019-01-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2019-01-28T08:00:00'
          }
        ]
      });
    }
  }

  /*--------------------------------------------------------------
    9. Email Editor
  --------------------------------------------------------------*/
  function emailEditorInt() {
    if ($.exists("#yoo-email-editor")) {
      console.clear()
      var FontAttributor = Quill.import('formats/font');
      var fonts = ['impact', 'courier', 'comic'];
      var lHeights = ['1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6'];
      FontAttributor.whitelist = fonts;
      Quill.register(FontAttributor, true);
      var quill = new Quill('#yoo-email-editor', {
        modules: {
          toolbar: { container: '#yoo-email-editor-toolbox' }
        },
        placeholder: 'Type something here',
        theme: 'snow' // 'snow' or 'bubble'
      });
      $('.ql-bold').html('<strong>B</strong>');
      $('.ql-italic').html('<i>I</i>');
      $('.ql-underline').html('<u>U</u>');
    }
  }

  /*--------------------------------------------------------------
    10. Chatting Setup
  --------------------------------------------------------------*/
  function chattingInt() {
    // Input Clone To To Chat Box
    $('.yoo-chat-input').keypress(function(ev) {
      if (ev.keyCode == 13 && !ev.shiftKey) {
        var p = ev.which;
        var chatTime = moment().format("h:mm:a");
        var chatText = $(this).html();
        if (p == 13) {
          if (chatText == "") {
            alert('Empty Field');
          } else {
            // Live Chat Input
            $(this).parents('.yoo-chat-conversation').find('.yoo-conversation-list').append(
              `<li>
                <div class="yoo-conversation-text">
                    <div><p>${chatText}</p></div>
                </div>
              </li>`);
            // Messanger Chat Input
            $(this).parents('.yoo-chatbox-wrap').find('.yoo-chatbox-for-messaenger').append(
              `<div class="yoo-user yoo-style2 yoo-right-side">
                <div class="yoo-user-chat-text-group">
                  <div class="yoo-user-chat-text">
                    <div class="yoo-user-chat-text-in">
                      ${chatText}
                      <div class="yoo-user-chat-text-seting">
                        <ul class="yoo-icon-group yoo-style1 yoo-mp0">
                          <li><a href="#" class="yoo-icon-group-icon"><ion-icon name="happy"></ion-icon></a></li>
                          <li><a href="#" class="yoo-icon-group-icon"><ion-icon name="arrow-redo"></ion-icon></a></li>
                          <li><a href="#" class="yoo-icon-group-icon"><ion-icon name="ellipsis-horizontal"></ion-icon></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`);
            // Chatting Software Input
            $(this).parents('.yoo-chatbox-wrap').find('.yoo-chatbox-for-chatting-software').append(
              `<div class="yoo-user yoo-style2">
                <div class="yoo-user-img"><img src="assets/img/msg/msg2.png" alt=""></div>
                <div class="yoo-user-info">
                  <h3 class="yoo-user-name">marthaa<span class="yoo-user-time">${chatTime}</span></h3>
                  <div class="yoo-user-chat-text">
                    <p>${chatText}</p>
                  </div>
                </div>
              </div>`);
            reverseScroll();
          }
          $(this).html('');
          return false;
          ev.epreventDefault();
          ev.stopPropagation();
        }
        return false
      }
    });

    // Reverse Scroll
    function reverseScroll() {
      var height = 0;
      $('.yoo-reverse-scroll').children().each(function(i, value) {
        height += parseInt($(this).height());
      });

      height += '';
      $('.yoo-reverse-scroll').animate({ scrollTop: height });
    }
    reverseScroll();
  }

  /* Chatting Toggle */
  function chattingToggle() {
    // Liver Chat Toggle
    $('.yoo-toggle-chat-btn').on('click', function() {
      $(this).parents('.yoo-toggle-chat-wrap').toggleClass('yoo-active');
    })

    $(document).on("click", function() {
      $(".yoo-toggle-chat-wrap").removeClass("yoo-active");
    });
    $(".yoo-toggle-chat-wrap, .yoo-toggle-chat-btn").on("click", function(e) {
      e.stopPropagation();
    });

    // Click to single chat window
    $('.yoo-live-chat-single').on('click', function() {
      $(this).parents('.yoo-live-chat-wrap').toggleClass('yoo-active');
    });
    $('.yoo-live-chat-heading').on('click', function() {
      $(this).parents('.yoo-live-chat-wrap').removeClass('yoo-active');
    });

    // Info Sidebar Toggle
    $('.yoo-chat-info-toggle-btn').on('click', function() {
      $('.yoo-chat-container').toggleClass('yoo-active');
    });
    $('.yoo-chat-info-cross').on('click', function() {
      $('.yoo-chat-container').toggleClass('yoo-active');
    });
  }

  /*--------------------------------------------------------------
    10. Dynamic Datatable
  --------------------------------------------------------------*/
  function dataTable() {
    if ($.exists("#yooDataTable")) {
      $('#yooDataTable').DataTable({
        "lengthMenu": [
          [6, 12, -1],
          ['Display 6', 'Display 12', "All"]
        ],
        "dom": '<"top"flpi>rt<"clear">',
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search...",
          "autoWidth": true,
          "info": "_PAGE_ of _PAGES_",
          "lengthMenu": "_MENU_",
          paginate: {
            next: '<ion-icon name="chevron-forward"></ion-icon>',
            previous: '<ion-icon name="chevron-back"></ion-icon>'
          }
        }
      });
    }
  }


})(jQuery); // End of use strict
