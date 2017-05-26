import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('project-info-hero-image', 'Integration | Component | project info hero image', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{project-info-hero-image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#project-info-hero-image}}
      template block text
    {{/project-info-hero-image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
