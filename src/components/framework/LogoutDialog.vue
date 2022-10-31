<template>
	<div class="modal fade" id="logoutModal" tabindex="-1" ref="modelRef">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="logoutModalLabel">Abmeldung</h1>
				</div>
				<div class="modal-body">Möchtest Du Dich abmelden?</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nein</button>
					<button type="button" class="btn btn-primary" @click="logOut()">Abmelden</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Modal } from 'bootstrap';
import { useRouter } from 'vue-router';
import Parse from 'parse/dist/parse.min.js';

const router = useRouter();

let modelRef = ref(null);
let modal = null;

onMounted(() => {
	modal = new Modal(modelRef.value);
});
function _show() {
	modal.show();
}
// function _close() {
// 	modal.close();
// }

async function logOut() {
	try {
		await Parse.User.logOut();
		modal.hide();
		router.push('/login');
	} catch (error) {
		this.logOut();
	}
}
defineExpose({ show: _show });
</script>
