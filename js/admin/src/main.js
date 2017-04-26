/*
 * This file is part of FlarumES/Spanish.
 * -----------------------------------------------------------------------
 * Copyright © 2015-2017 Toby Zerner and Flarum
 * Copyright © 2015-2017 Johann Rodríguez and Flarum en Español
 * -----------------------------------------------------------------------
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';

import SpanishSettingsModal from 'flarumes/spanish/components/SpanishSettingsModal';

app.initializers.add('flarumes-spanish', app => {
  app.extensionSettings['flarumes-spanish'] = () => app.modal.show(new SpanishSettingsModal());
});
