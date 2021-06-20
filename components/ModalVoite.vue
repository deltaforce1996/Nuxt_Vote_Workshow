<template>
  <v-dialog
    v-model="LisenerIsOpen"
    transition="dialog-bottom-transition"
    persistent
    max-width="600"
  >
    <v-card>
      <v-toolbar color="primary" dark>Voite</v-toolbar>
      <v-card-text>
        <v-radio-group v-model="OptionName">
          <v-radio
            v-for="n in LisenerArrayOtions"
            :key="n"
            :label="`${n}`"
            :value="n"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary" text @click="LisenerSuccess">Voite</v-btn>
        <v-btn color="error" text @click="LisenerFailed">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable vue/prop-name-casing */
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    IsLogOpen: {
      type: Boolean,
      default: false,
    },
    ArrayOptions: {
      type: Array,
      default: () => [],
    },
    PoleExp: {
      type: Number,
      default: 0,
    },
    PoleRefId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      OptionName: '',
    }
  },
  computed: {
    ...mapGetters({
      // users
      GET_USER: 'MODULE_USER/GET_USER_SINGIN',
    }),
    LisenerIsOpen() {
      return this.IsLogOpen
    },
    LisenerArrayOtions() {
      return this.ArrayOptions
    },
    LisenerPoleExp() {
      return this.PoleExp
    },
    LisenerPoleRefId() {
      return this.PoleRefId
    },
  },
  methods: {
    ...mapActions({
      // Voite
      ACTION_NEW_VOITE_POLE: 'MODULE_VOITE/ACTION_NEW_VOITE_POLE',
    }),
    Valid() {
      if (this.OptionName) return true
      return false
    },
    LisenerFailed() {
      this.OptionName = ''
      this.$emit('LisenerFailed')
    },
    async LisenerSuccess() {
      if (!this.Valid()) {
        // Notify Here
        return
      }
      const res = await this.ACTION_NEW_VOITE_POLE({
        UserId: this.GET_USER.UserId,
        Username: this.GET_USER.Username,
        Option: this.OptionName,
        RefVoite: this.LisenerPoleRefId,
      })
      if (res.success) {
        this.OptionName = ''
        this.$emit('LisenerSuccess')
      } else {
        // Notify Here
      }
    },
  },
}
</script>
