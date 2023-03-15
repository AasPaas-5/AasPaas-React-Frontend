/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./EachProduct.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetchEachProductQuery } from "../../store";

function EachProduct() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, error, isFetching } = useFetchEachProductQuery(
    searchParams.get("id")
  );

  useEffect(() => {
    // console.log(searchParams.get("id"));
    console.log(data);
  }, [data]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div id="product">
        <div id="back">
          <a href="/">←Back</a>
        </div>
        <div id="productimg">
          <div className={styles.prodtrend1}>
            <a href="javascript:void(0)">
              <img src={data.images[0].url} />
            </a>
            <div className={styles.prod11}>
              <div className={styles.title1}>
                <a href="javascript:void(0)">{data.title}</a>
              </div>
              <div className={styles.pricebox1}>
                <a href="" className={styles.price1}>
                  {data.price}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="productdesc">
          <h1>{data.title}</h1>
          <p>Available</p>
          <p>
            Price:<b>{data.price}</b>
          </p>
          <h3>Seller's Note</h3>
          <p>{data.description}</p>
          <div id="Lock">
            <button
              id="Lockbtn"
            >
              Lock Product
            </button>
            <button id="Favouritebtn">
              Add to Wishlist
            </button>
          </div>
          <div id="report">
            <a href="/">
              🚩Report Product
            </a>
          </div>
        </div>
      </div>
      <div className={styles.freshers}>
        <div className={styles.topimage}>
          <div className={styles.freshers1}>
            <div className={styles.otherdeals}>
              <div className={styles.trendingheader}>
                <div className={styles.head}></div>
              </div>
              <div className={styles.product3}>
                {/* <% for (let topDeal of topDeals){%>
                    <div className={styles.prodtrend}>
                      <a href="/products?id=<%=topDeal._id%>"><img src="<%=topDeal.images[0].sizing%>" /></a>
                      <div className={styles.prod1}>
                        <div className={styles.title}><a href="/products?id=<%=topDeal._id%>">
                            <%=topDeal.title%>
                          </a></div>
                        <div className={styles.pricebox}>
                          <a href="" className={styles.price}>₹<%=topDeal.price%></a>
                        </div>
                      </div>
                    </div>
                    <% }%> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EachProduct;
