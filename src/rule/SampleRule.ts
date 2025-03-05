import { ScanRule, context, message, name, treeQuery, suggestion, category } from 'cayce-types';

@name('Bad pattern')
@category('clarity')
@context('scan')
@message('The word foo is not allowed')
@suggestion('Consider a better name.')
@treeQuery('((variable_declarator) identifier @expression)')
export class SampleRule extends ScanRule {
    // This is just a stub. The super returns true always
}
