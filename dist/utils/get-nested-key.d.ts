import { LocaleStrings } from '../types';
/**
 * { error: { notFound: 'Message not found!' } }
 * 		= __('error.notFound')
 *
 * { error: { 'not.found': 'Message not found!' } }
 * 		= __('error.not.found')
 *
 * { error: { 'string.validate': { 'not.found': 'Message not found!' } } }
 * 		= __('error.string.validate.not.found')
 */
export declare function getNestedKey<LocalizedData>(key: string, localeData: LocaleStrings<LocalizedData>): LocalizedData;
