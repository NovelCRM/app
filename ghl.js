$(document).ready(function () {
    // product categories

    let categoriesApi = 'https://mcskeys.thefunneldiva.com/products-categories';
    let productsApi = 'https://mcskeys.thefunneldiva.com/products-api';
    let categoriesLocalStorage = JSON.parse(localStorage.getItem("MCSKEYS_CATEGORY"));
    let brandsApi = 'https://mcskeys.thefunneldiva.com/products-brands';

    $.get(brandsApi, function (res) {
        res.forEach(element => {
            $('._brands_list').append(`
                <li >
                    <a href="https://mcskeys.com/brands/3b-medical-inc" title="View Products By 3B Medical Inc"><span class="fas fa-angle-right"></span> ${element.brand}</a>
                </li>
            `)
        });
    })

    $.get(categoriesApi, function (res) {
       res.forEach(element => {
          $('._categories_list').append(`
             <li >
                <a href="https://app.novelcrm.com/v2/preview/jHIjAJIWKO6q5lAtWXGc" target="_top" class="view_category" data-id="${element.id}" title="View ${element.category} Products"><span class="fas fa-angle-right"></span> ${element.category}</a>
             </li>
          `)
       });

       $('.view_category').click(function () {
          const dataId = $(this).attr('data-id');
          localStorage.setItem("MCSKEYS_CATEGORY", dataId);
       })
    })
    // products
    $.get(productsApi, function (res) {

       let count = 0

       res.forEach(element => {
          count++;
          if (count != 6) {
             $('._products').append(`
             <div class="col-lg-3 col-md-4 col-sm-12">
                  <a class="d-flex flex-column justify-content-between align-items-stretch p-2 w-100 h-100" title="${element.productDescription}" href="https://app.novelcrm.com/v2/preview/BgX7KEpdx1xKY9sOC6Mw">
                      <div class="product-image"><img class="lazy d-block mx-auto" alt="Transcend Micro Auto Travel CPAP Machine product image" data-original="/uploads/ecommerce/transcend-micro-auto-travel-cpap-machine-858.jpg" src="https://mcskeys.thefunneldiva.com/storage/${element.productImage}" /></div>
                      <div class="product-content d-flex flex-column justify-content-between align-items-center align-items-md-start flex-grow-1 pt-2">
                         <div class="mb-2 text-left w-100">
                            <p class="products-list--category">${element.productBrand}</p>
                            <p class="products-list--name">${element.productName}</p>
                         </div>
                         <div
                            data-id="${element.productId}"
                            data-name="${element.productName}"
                            data-image="${element.productImage}"
                            data-category="${element.productCategory}"
                            data-categoryid="${element.productCategoryId}"
                            data-description="${element.productDescription}"
                            data-features="${element.productFeatures}"
                            data-resources="${element.productResources}"
                            data-brand="${element.productBrand}"
                            class="_view_product d-flex flex-column align-items-stretch w-100 _view_product_btn"
                        ><span class="button button-primary button--mini">View Product</span>
                        </div>
                      </div>
                   </a>
              </div>
          `)
          }
       });

       $('#_record-count').html(res.length);

       $('._view_product').click(function () {
            let viewProduct = {
                id: $(this).attr('data-id'),
                name: $(this).attr('data-name'),
                image: $(this).attr('data-image'),
                category: $(this).attr('data-category'),
                categoryid: $(this).attr('data-categoryid'),
                description: $(this).attr('data-description'),
                features: $(this).attr('data-features'),
                resources: $(this).attr('data-resources'),
                brand: $(this).attr('data-brand'),
            };

            localStorage.setItem('MCSKEYS_SELECTED_PRODUCT', JSON.stringify(viewProduct));

        })
    })

    // category page

    let category = localStorage.getItem('MCSKEYS_CATEGORY');

    $.get('https://mcskeys.thefunneldiva.com/products-categories', function (res) {
        res.forEach(element => {
           if (element.id === category) {
                $('#heading-NQodKU9sog h1').text(element.category);
           }
        });
    })

 })
