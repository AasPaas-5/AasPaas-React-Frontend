// import styles from './FAQ.module.css'
// function FAQ() {
//   return (
//     <div className={styles.container1}>
//       <div className={styles.faq}>
//         <div className={styles.title}>FAQs</div>
//         <div className={styles.boxes}>
//           <div className={styles.accordion} id="accordionExample">
//             <div className={styles.accordion_item}>
//               <h2 className={styles.accordion_header} id="headingOne">
//                 <button
//                   className={styles.accordion_button}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseOne"
//                   aria-expanded="true"
//                   aria-controls="collapseOne"
//                   style="
//                         font-size: 25px ; font-family: 'Inter'; font-weight: 600;"
//                 >
//                   What is AasPaas?
//                 </button>
//               </h2>
//               <div
//                 id="collapseOne"
//                 className={styles.accordion_collapse collapse show}
//                 aria-labelledby="headingOne"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div
//                   className={styles.accordion_body}
//                   style="font-family: 'Arial';font-style: normal;font-weight: 400;font-size: 20px;color: #000000;"
//                 >
//                   AasPaas is a student built project for listing and buying 2nd
//                   hand products inside the college itself. A lot of freshers
//                   along with seniors have a lot of issues with getting and
//                   selling alike things like cycles , notes , appliainces and
//                   other stuff , we aim to solve that. People can list their
//                   products and buyers can lock them , and after a review
//                   information will be exchanged and the financials will be dealt
//                   with personally. AasPaas dosent deal with any of your
//                   financials , to avoid scams.
//                 </div>
//               </div>
//             </div>
//             <div className={styles.accordion_item}>
//               <h2 className={styles.accordion_header} id="headingTwo">
//                 <button
//                   className={styles.accordion_button collapsed}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseTwo"
//                   aria-expanded="false"
//                   aria-controls="collapseTwo"
//                   style="
//                         font-size: 25px ; font-family: 'Inter'; font-weight: 600;"
//                 >
//                   How to login and register?
//                 </button>
//               </h2>
//               <div
//                 id="collapseTwo"
//                 className={styles.accordion_collapse collapse}
//                 aria-labelledby="headingTwo"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div
//                   className={styles.accordion_body}
//                   style="font-family: 'Arial';font-style: normal;font-weight: 400;font-size: 20px;color: #000000;"
//                 >
//                   AasPaas is a student built project for listing and buying 2nd
//                   hand products inside the college itself. A lot of freshers
//                   along with seniors have a lot of issues with getting and
//                   selling alike things like cycles , notes , appliainces and
//                   other stuff , we aim to solve that. People can list their
//                   products and buyers can lock them , and after a review
//                   information will be exchanged and the financials will be dealt
//                   with personally. AasPaas dosent deal with any of your
//                   financials , to avoid scams.
//                 </div>
//               </div>
//             </div>
//             <div className={styles.accordion_item}>
//               <h2 className={styles.accordion_header} id="headingThree">
//                 <button
//                   className={styles.accordion_button collapsed}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseThree"
//                   aria-expanded="false"
//                   aria-controls="collapseThree"
//                   style="
//                         font-size: 25px ; font-family: 'Inter'; font-weight: 600;"
//                 >
//                   Who can see my info?
//                 </button>
//               </h2>
//               <div
//                 id="collapseThree"
//                 className={styles.accordion_collapse collapse}
//                 aria-labelledby="headingThree"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div
//                   className={styles.accordion_body}
//                   style="font-family: 'Arial';font-style: normal;font-weight: 400;font-size: 20px;color: #000000;"
//                 >
//                   AasPaas is a student built project for listing and buying 2nd
//                   hand products inside the college itself. A lot of freshers
//                   along with seniors have a lot of issues with getting and
//                   selling alike things like cycles , notes , appliainces and
//                   other stuff , we aim to solve that. People can list their
//                   products and buyers can lock them , and after a review
//                   information will be exchanged and the financials will be dealt
//                   with personally. AasPaas dosent deal with any of your
//                   financials , to avoid scams.
//                 </div>
//               </div>
//             </div>
//             <div className={styles.accordion_item}>
//               <h2 className={styles.accordion_header} id="headingfour">
//                 <button
//                   className={styles.accordion_button collapsed}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapsefour"
//                   aria-expanded="false"
//                   aria-controls="collapsefour"
//                   style="
//                         font-size: 25px ; font-family: 'Inter'; font-weight: 600;"
//                 >
//                   What is ‘Locking’ Products? What happens after I lock a
//                   product?{" "}
//                 </button>
//               </h2>
//               <div
//                 id="collapsefour"
//                 className={styles.accordion_collapse collapse}
//                 aria-labelledby="headingfour"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div
//                   className={styles.accordion_body}
//                   style="font-family: 'Arial';font-style: normal;font-weight: 400;font-size: 20px;color: #000000;"
//                 >
//                   AasPaas is a student built project for listing and buying 2nd
//                   hand products inside the college itself. A lot of freshers
//                   along with seniors have a lot of issues with getting and
//                   selling alike things like cycles , notes , appliainces and
//                   other stuff , we aim to solve that. People can list their
//                   products and buyers can lock them , and after a review
//                   information will be exchanged and the financials will be dealt
//                   with personally. AasPaas dosent deal with any of your
//                   financials , to avoid scams.
//                 </div>
//               </div>
//             </div>
//             <div className={styles.accordion_item}>
//               <h2 className={styles.accordion_header} id="headingfive">
//                 <button
//                   className={`${styles.accordion_button ${styles.collapsed}`}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapsefive"
//                   aria-expanded="false"
//                   aria-controls="collapsefive"
//                   style="
//                         font-size: 25px ; font-family: 'Inter'; font-weight: 600;"
//                 >
//                   How do I list products to sell?{" "}
//                 </button>
//               </h2>
//               <div
//                 id="collapsefive"
//                 className={styles.accordion_collapse collapse}
//                 aria-labelledby="headingfive"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div
//                   className={styles.accordion_body}
//                   style="font-family: 'Arial';font-style: normal;font-weight: 400;font-size: 20px;color: #000000;"
//                 >
//                   AasPaas is a student built project for listing and buying 2nd
//                   hand products inside the college itself. A lot of freshers
//                   along with seniors have a lot of issues with getting and
//                   selling alike things like cycles , notes , appliainces and
//                   other stuff , we aim to solve that. People can list their
//                   products and buyers can lock them , and after a review
//                   information will be exchanged and the financials will be dealt
//                   with personally. AasPaas dosent deal with any of your
//                   financials , to avoid scams.
//                 </div>
//               </div>
//             </div>
//             <div className={styles.accordion_item}>
//               <h2 className={styles.accordion_header} id="headingsix">
//                 <button
//                   className={styles.accordion_button collapsed}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapsesix"
//                   aria-expanded="false"
//                   aria-controls="collapsesix"
//                   style="
//                         font-size: 25px ; font-family: 'Inter'; font-weight: 600;"
//                 >
//                   How to contact and negotiate with the buyers for my products?{" "}
//                 </button>
//               </h2>
//               <div
//                 id="collapsesix"
//                 className={styles.accordion_collapse collapse}
//                 aria-labelledby="headingsix"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div
//                   className={styles.accordion_body}
//                   style="font-family: 'Arial';font-style: normal;font-weight: 400;font-size: 20px;color: #000000;"
//                 >
//                   AasPaas is a student built project for listing and buying 2nd
//                   hand products inside the college itself. A lot of freshers
//                   along with seniors have a lot of issues with getting and
//                   selling alike things like cycles , notes , appliainces and
//                   other stuff , we aim to solve that. People can list their
//                   products and buyers can lock them , and after a review
//                   information will be exchanged and the financials will be dealt
//                   with personally. AasPaas dosent deal with any of your
//                   financials , to avoid scams.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
