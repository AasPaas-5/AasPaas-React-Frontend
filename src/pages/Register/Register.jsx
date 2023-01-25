import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles.container}>
      <form
        action="/users/register"
        method="POST"
        className={styles.registration}
      >
        <div id="register">
          <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666903174/Social/AasPaas_Black_mdqn23.png" />
        </div>
        <br />
        <br />
        <div id="total">
          <div id="one">
            <div className={styles.ellipse}>
              <img src="<%=newUser.profileImg%>" />
            </div>
            <label for="name" id="info">
              Name :
            </label>
            <br />
            <input
              type="text"
              id="enter"
              name="name"
              className={styles.enter}
              value="<%=newUser.name%>"
              required
              autofocus
              oninvalid="this.setCustomValidity('Enter your Name')"
              oninput="this.setCustomValidity('')"
              disabled
            />
            <br />
            <label for="email" id="info">
              Email ID :
            </label>
            <br />
            <input
              type="text"
              id="enter"
              name="email"
              className={styles.enter}
              value="<%=newUser.email%>"
              required
              pattern="^[a-z0-9.]+@[itbhu]{5,6}.[ac]{2}.[in]{2}$"
              oninvalid="this.setCustomValidity('Enter your college ID only')"
              oninput="this.setCustomValidity('')"
              disabled
            />
            <br />
            <label for="branch" id="info">
              Branch :
            </label>
            <br />
            <select
              type="text"
              id="options"
              name="branch"
              required
              className={styles.options1}
              onchange="document.querySelector('.options1').style.color = 'black'"
              style="color: rgb(77, 77, 77)"
              oninvalid="this.setCustomValidity('Select your Branch')"
              oninput="this.setCustomValidity('')"
            >
              <option value="" disabled selected hidden>
                Select your option
              </option>
              <option value="Biochemical Engineering">
                Biochemical Engineering
              </option>
              <option value="Biomedical Engineering">
                Biomedical Engineering
              </option>
              <option value="Ceramic Engineering">Ceramic Engineering</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Computer Science and Engineering">
                Computer Science and Engineering
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Electronics Engineering">
                Electronics Engineering
              </option>
              <option value="Engineering Physics">Engineering Physics</option>
              <option value="Materials Science and Technology">
                Materials Science and Technology
              </option>
              <option value="Mathematics and Computing">
                Mathematics and Computing
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Metallurgical Engineering">
                Metallurgical Engineering
              </option>
              <option value="Mining Engineering">Mining Engineering</option>
              <option value="Pharmaceutical Engineering">
                Pharmaceutical Engineering
              </option>
            </select>
            <br />
          </div>
          <div id="two">
            <label for="year" id="info">
              Year :
            </label>
            <br />
            <select
              type="text"
              id="options"
              name="year"
              required
              className={styles.options2}
              onchange="document.querySelector('.options2').style.color = 'black'"
              style="color: rgb(77, 77, 77)"
              oninvalid="this.setCustomValidity('Select your Year')"
              oninput="this.setCustomValidity('')"
            >
              <option value="" disabled selected hidden>
                Select year
              </option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
            </select>
            <br />
            <label for="contact" id="info">
              Contact Number:
            </label>
            <br />
            <input
              type="text"
              id="enter"
              name="contact"
              className={styles.enter}
              placeholder=""
              required
              pattern="^[0-9]{10,}$"
              oninvalid="this.setCustomValidity('Enter correct contact number')"
              oninput="this.setCustomValidity('')"
            />
            <br />
            <label for="hostel" id="info">
              Hostel :
            </label>
            <br />
            <select
              type="text"
              id="options"
              name="hostel"
              required
              className={styles.options3}
              onchange="document.querySelector('.options3').style.color = 'black'"
              style="color: rgb(77, 77, 77)"
              oninvalid="this.setCustomValidity('Select your Hostel')"
              oninput="this.setCustomValidity('')"
            >
              <option value="" disabled selected hidden>
                Select your hostel
              </option>
              <option value="Dr. CV Raman">Dr. CV Raman</option>
              <option value="Morvi">Morvi</option>
              <option value="Dhanrajgiri Hostel - 1">
                Dhanrajgiri Hostel - 1
              </option>
              <option value="Dhanrajgiri Hostel - 2">
                Dhanrajgiri Hostel - 2
              </option>
              <option value="Visvesvaraya">Visvesvaraya</option>
              <option value="Rajputana">Rajputana</option>
              <option value="S.N.Bose">S.N.Bose</option>
              <option value="Limbdi">Limbdi</option>
              <option value="Vishwakarma">Vishwakarma</option>
              <option value="Vivekanand">Vivekanand</option>
              <option value="Aryabhatta Hostel - 1 & 2">
                Aryabhatta Hostel - 1 & 2
              </option>
              <option value="Ramanujan">Ramanujan</option>
              <option value="Ghandi Smriti Chhatravas">
                Ghandi Smriti Chhatravas
              </option>
              <option value="IIT (BHU) Girls Hostel - 1 & 2">
                IIT (BHU) Girls Hostel - 1 & 2
              </option>
              <option value="Saluja">Saluja</option>
              <option value="S.C.Dey">S.C.Dey</option>
            </select>
            <br />
            <label for="room" id="info">
              Room No. :
            </label>
            <br />
            <input
              type="number"
              id="enter"
              name="room"
              required
              className={styles.enter}
              placeholder=""
              oninvalid="this.setCustomValidity('Enter correct Room Number')"
              oninput="this.setCustomValidity('')"
            />
            <br />
          </div>
        </div>
        <div id="btn">
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
