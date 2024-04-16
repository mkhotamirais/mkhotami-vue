<template>
  <section class="bg-white p-3 rounded">
    <form @submit.prevent="onSubmit">
      <input type="email" v-model="email" class="border p-2 rounded focus:outline-none" placeholder="email" />
      <input type="password" v-model="password" class="border p-2 rounded focus:outline-none" placeholder="password" />
      <p v-if="pwdError" class="text-red-500">{{ pwdError }}</p>
      <select v-model="role" class="border p-2 rounded focus:outline-none">
        <option value="">--Select role--</option>
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
      <span class="border rounded p-2">
        <input type="checkbox" v-model="terms" />
        <label>terms</label>
      </span>
      <span class="border rounded p-2">
        <input type="checkbox" value="ahmad" v-model="names" />
        <label>ahmad</label>
        <input type="checkbox" value="abdul" v-model="names" />
        <label>abdul</label>
        <input type="checkbox" value="siti" v-model="names" />
        <label>siti</label>
      </span>
      <input
        type="text"
        v-model="tempSkill"
        @keyup.alt="addSkill"
        class="border rounded p-2"
        placeholder="skills (alt + ,)"
      />
      <button type="submit" class="border leading-none rounded bg-blue-500 p-2 text-white">submit</button>
    </form>
    <div>
      <p>email: {{ email }}</p>
      <p>password: {{ password }}</p>
      <p>role: {{ role }}</p>
      <p>terms: {{ terms }}</p>
      <p>names: {{ names }}</p>
      <p>
        <span>skill: </span>
        <span v-for="skill in skills">
          <span>{{ skill }}</span>
          <button @click="removeSkill(skill)" class="mx-2 border rounded leading-none text-rose-500 p-1">x</button>
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
      pwdError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) this.skills.push(this.tempSkill);
        this.tempSkill = "";
      }
    },
    removeSkill(data) {
      this.skills = this.skills.filter((skill) => skill !== data);
    },
    onSubmit() {
      this.pwdError = this.password.length > 5 ? "" : "Password must be at least 6 chars long";
      if (!this.pwdError) {
        console.log(this.email, this.password, this.role, this.skills, this.terms);
      }
    },
  },
};
</script>
