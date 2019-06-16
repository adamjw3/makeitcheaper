<template>
  <div class="c-contact">
      <form method="post" novalidate="true" @submit.prevent="handleSubmit" v-if="!success">
				<legend class="c-contact__legend">Contact Form</legend>
				<div class="c-content__form-item">
					<label class="c-content__form-label" for="fullname">Fullname:</label>
					<input class="c-content__form-input" id="fullname" v-model="fullname" data-fullname type="text" name="fullname" placeholder="Enter Full Name"/>
				</div>
				<div class="c-content__form-item">
					<label class="c-content__form-label" for="businessname">Business Name:</label>
					<input class="c-content__form-input" id="businessname" v-model="businessname" data-businessname maxlength="100" type="text" name="businessname" placeholder="Enter Business Name"/>
				</div>
				<div class="c-content__form-item">
					<label class="c-content__form-label" for="email">Email:</label>
					<input class="c-content__form-input" id="email" v-model="email" data-email type="email" name="email" placeholder="Enter Email" />
				</div>
				<div class="c-content__form-item">
					<label class="c-content__form-label" for="phone">Phone:</label>
					<input class="c-content__form-input" id="phone" v-model="phone" data-phone type="tel" maxlength="13" name="phone" placeholder="Enter Phone Number" />
				</div>
				<input class="c-content__form-submit" id="submit" type="submit" name="submit" value="submit"/>
      </form>
			<p v-if="errors.length" class="c-content__form-error">
				<b class="c-content__form-error-header">Please correct the following error(s):</b>
				<ul class="c-content__form-error-items">
					<li class="c-content__form-error-item" v-for="error in errors" v-bind:key="error">{{ error }}</li>
				</ul>
  		</p>
			<div v-if="success" class="c-contenr__form-success">
					Thanks {{fullname}}, we have your details and will be in contact...
			</div>
  </div>
</template>

<script>
import { HTTP } from "../apis/makeiteasy"
import { validFullName, validEmail, validPhone, generateUUID, encodeForm } from "../utils/form"

export default {
	name: "Form",
	data: function (){
         return  {
						errors: [],
						success: false,
						fullname: null,
						businessname: null,
						email: null,
						phone: null
         }
    },
	methods: {
		handleSubmit: function (e) {
			this.errors = [];

      if (!this.fullname) {
        this.errors.push("Fullname required.");
			} else if (!validFullName(this.fullname)){
				this.errors.push('Fullname requires at least two words');
			}

			if (!this.email) {
        this.errors.push('Email required.');
      } else if (!validEmail(this.email)) {
        this.errors.push('Valid email required.');
			}
			
			if (!this.phone) {
				 this.errors.push('Telephone Number required.');
			} else if (!validPhone(this.phone)) {
				this.errors.push('Valid phone required.');
			}

			if(!this.businessname) {
				this.errors.push('Business name required.');
			}
			
      if (!this.errors.length) {
				this.sendForm()
        return true;
			}

      e.preventDefault();
		},
		sendForm: function() {
			let formData = {
					pGUID: generateUUID(),
					pAccName: this.businessname,
					pPartner: this.businessname,
					name: this.fullname,
					business_name: this.businessname,
					telephone_number: this.phone,
					email: this.email
			};
 
			HTTP.post("create?access_token=9b4fce1c40c0cecfdf3b355ffb33f111", 
				encodeForm(formData)
			)
			.then(response => {
				console.log("response", response)
				this.success = true;
			})
			.catch(e => {
				console.log("error", e)
				this.errors.push(e)
			})
		}
  }
};
</script>

<style lang="scss" scoped>
	.c-contact {
		max-width: 800px;
    margin: 0 auto;
		border-radius: 20px;
		padding: 20px;
	}

	.c-contact__legend {
		display: none;
	}

	.c-content__form-item {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}

	.c-content__form-label {
		margin-bottom: 10px;
	}

	.c-content__form-label {
		color: black;
		font-size: 1.6rem;
	}

	.c-content__form-input {
		border: none;
		border-radius: 10px;
		padding: 5px 10px;
		background-color: #ebf0f2;
    box-shadow: 0 -2px 0 0 #c6cacc;
    border-radius: 4px;
    border: 0;
    padding: 5px 10px;
    font-size: 1.4rem;
    line-height: 100%;
    color: black;
	}

	.c-content__form-submit {
		cursor: pointer;
		color: white;
		background-color: #ef4639;
    box-shadow: 0 0 0 0 #b92c21;
		border: none;
		font-size: 1.6rem;
		border-radius: 10px;
		padding: 10px 20px;
	}
</style>