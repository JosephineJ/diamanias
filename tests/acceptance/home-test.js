import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /home', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test-main-navigation-open]').doesNotExist();
    await click('[data-test-home-menu]');
    assert.dom('[data-test-main-navigation-open]').exists();
    await click('[data-test-chapter="1"]');
  });
});
